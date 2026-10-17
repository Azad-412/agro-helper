"""
============================================================
AGRO HELPER - MINIMAL BACKEND DEMO
============================================================

Features:
1. Farmer registration
2. Farmer login
3. SQLite database
4. Password hashing

This simplified version uses only Python's built-in SQLite
and hashlib modules to avoid unnecessary dependency problems.
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import sqlite3
import hashlib
import os
from fastapi.middleware.cors import CORSMiddleware


# ============================================================
# FASTAPI APPLICATION
# ============================================================

app = FastAPI(
    title="Agro Helper API",
    version="1.0.0",
    description="Minimal Agro Helper backend for farmer registration and login."
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============================================================
# DATABASE CONFIGURATION
# ============================================================

DATABASE_NAME = "agro.db"


def get_database_connection():
    """
    Opens a connection to the SQLite database.

    row_factory allows us to access database columns
    using names instead of numeric indexes.
    """

    connection = sqlite3.connect(DATABASE_NAME)

    connection.row_factory = sqlite3.Row

    return connection


def create_database():
    """
    Creates the farmers table automatically
    when the backend starts.
    """

    connection = get_database_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS farmers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
        """
    )

    connection.commit()

    connection.close()


# Create database/table when application starts.
create_database()


# ============================================================
# PASSWORD SECURITY
# ============================================================

def hash_password(password: str) -> str:
    """
    Hashes a password using PBKDF2-HMAC-SHA256.

    A random salt is generated for every password.

    Stored format:
    salt$hashed_password
    """

    salt = os.urandom(16)

    hashed_password = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt,
        100000
    )

    return f"{salt.hex()}${hashed_password.hex()}"


def verify_password(
    plain_password: str,
    stored_password: str
) -> bool:
    """
    Checks whether the login password matches
    the password stored in the database.
    """

    try:
        salt_hex, stored_hash = stored_password.split("$")

        salt = bytes.fromhex(salt_hex)

        new_hash = hashlib.pbkdf2_hmac(
            "sha256",
            plain_password.encode("utf-8"),
            salt,
            100000
        )

        return new_hash.hex() == stored_hash

    except ValueError:
        return False


# ============================================================
# REQUEST SCHEMAS
# ============================================================

class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str


class LoginRequest(BaseModel):
    email: str
    password: str


# ============================================================
# TEST ENDPOINT
# ============================================================

@app.get("/")
def home():
    """
    Simple endpoint used to check whether
    the Agro Helper backend is running.
    """

    return {
        "message": "Agro Helper backend is running"
    }


# ============================================================
# FARMER REGISTRATION
# ============================================================

@app.post("/register")
def register_farmer(data: RegisterRequest):
    """
    Registers a new farmer.

    Steps:
    1. Check whether email already exists.
    2. Hash the farmer password.
    3. Save farmer information into SQLite.
    """

    connection = get_database_connection()

    cursor = connection.cursor()

    try:
        # Check existing farmer.
        cursor.execute(
            "SELECT id FROM farmers WHERE email = ?",
            (data.email,)
        )

        existing_farmer = cursor.fetchone()

        if existing_farmer:
            raise HTTPException(
                status_code=400,
                detail="Email already registered"
            )

        # Never store a plain password.
        encrypted_password = hash_password(
            data.password
        )

        cursor.execute(
            """
            INSERT INTO farmers (
                name,
                email,
                password
            )
            VALUES (?, ?, ?)
            """,
            (
                data.name,
                data.email,
                encrypted_password
            )
        )

        connection.commit()

        farmer_id = cursor.lastrowid

        return {
            "message": "Farmer registered successfully",
            "farmer": {
                "id": farmer_id,
                "name": data.name,
                "email": data.email
            }
        }

    except sqlite3.IntegrityError:

        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    finally:

        connection.close()


# ============================================================
# FARMER LOGIN
# ============================================================

@app.post("/login")
def login_farmer(data: LoginRequest):
    """
    Logs a farmer into Agro Helper.

    Steps:
    1. Find farmer using email.
    2. Verify entered password.
    3. Return farmer information when valid.
    """

    connection = get_database_connection()

    cursor = connection.cursor()

    try:
        cursor.execute(
            """
            SELECT
                id,
                name,
                email,
                password
            FROM farmers
            WHERE email = ?
            """,
            (data.email,)
        )

        farmer = cursor.fetchone()

        # Email was not found.
        if farmer is None:

            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        # Password does not match.
        if not verify_password(
            data.password,
            farmer["password"]
        ):

            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        return {
            "message": "Login successful",
            "farmer": {
                "id": farmer["id"],
                "name": farmer["name"],
                "email": farmer["email"]
            }
        }

    finally:

        connection.close()


# ============================================================
# OPTIONAL TEST ENDPOINT
# ============================================================

@app.get("/farmers")
def get_farmers():
    """
    Shows registered farmers for classroom/demo testing.

    Passwords are intentionally NOT returned.
    """

    connection = get_database_connection()

    cursor = connection.cursor()

    try:
        cursor.execute(
            """
            SELECT
                id,
                name,
                email
            FROM farmers
            """
        )

        farmers = cursor.fetchall()

        return {
            "total": len(farmers),
            "farmers": [
                {
                    "id": farmer["id"],
                    "name": farmer["name"],
                    "email": farmer["email"]
                }
                for farmer in farmers
            ]
        }

    finally:

        connection.close()