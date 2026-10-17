"use client";

/**
 * ============================================================
 * AGRO HELPER
 * Farmer Login Page
 * Route: /farmer/login
 * ============================================================
 *
 * Current behaviour:
 * - Farmer enters email and password.
 * - Basic browser validation is applied.
 * - Successful submit redirects to Farmer Dashboard.
 *
 * Later this form will connect with the FastAPI authentication API.
 *
 * All CSS classes use the "farmer-login-" prefix so this page
 * does not interfere with existing Agro Helper pages.
 */

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  CircleHelp,
  Eye,
  EyeOff,
  Globe2,
  Home,
  LayoutGrid,
  Leaf,
  LockKeyhole,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function FarmerLoginPage() {
  const router = useRouter();

  // Login form values.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Controls password visibility.
  const [showPassword, setShowPassword] = useState(false);

  // Demo loading state for a more realistic login experience.
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles login form submission.
   *
   * At this frontend stage we only validate that both fields
   * contain values and then navigate to the farmer dashboard.
   * Real authentication will later be handled by FastAPI.
   */
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("অনুগ্রহ করে ইমেইল এবং পাসওয়ার্ড লিখুন।");
      return;
    }

    setIsSubmitting(true);

    // Temporary frontend-only login flow.
    setTimeout(() => {
      router.push("/farmer/dashboard");
    }, 500);
  };

  return (
    <>
      <main className="farmer-login-page">
        {/* =====================================================
            NAVBAR
        ===================================================== */}
        <header className="farmer-login-topbar">
          <div className="farmer-login-topbar-inner">
            <Link href="/" className="farmer-login-logo-link">
              <Image
                src="/images/logo/aglogo.png"
                alt="Agro Helper"
                width={180}
                height={58}
                priority
                className="farmer-login-logo"
              />
            </Link>

            <nav className="farmer-login-nav">
              <Link
                href="/"
                className="farmer-login-nav-link farmer-login-nav-active"
              >
                <Home size={16} />
                হোম
              </Link>

              <Link
                href="/#services"
                className="farmer-login-nav-link"
              >
                <LayoutGrid size={16} />
                আমাদের সেবা
              </Link>

              <Link
                href="/#crops"
                className="farmer-login-nav-link"
              >
                <Leaf size={16} />
                ফসলের তালিকা
              </Link>

              <Link
                href="/#experts"
                className="farmer-login-nav-link"
              >
                <Users size={16} />
                বিশেষজ্ঞদের তালিকা
              </Link>

              <Link
                href="/#how-it-works"
                className="farmer-login-nav-link"
              >
                <BookOpen size={16} />
                কিভাবে কাজ করে
              </Link>

              <Link
                href="/#contact"
                className="farmer-login-nav-link"
              >
                <Phone size={16} />
                যোগাযোগ
              </Link>

              <Link
                href="/#about"
                className="farmer-login-nav-link"
              >
                <CircleHelp size={16} />
                সম্পর্কে
              </Link>
            </nav>

            <div className="farmer-login-top-actions">
              <button
                type="button"
                className="farmer-login-language-button"
              >
                <Globe2 size={16} />
                বাংলা
              </button>

              <Link
                href="/farmer/login"
                className="farmer-login-navbar-login"
              >
                লগইন
              </Link>

              <Link
                href="/farmer/register"
                className="farmer-login-navbar-register"
              >
                নিবন্ধন
              </Link>
            </div>
          </div>
        </header>

        {/* =====================================================
            LOGIN HERO
        ===================================================== */}
        <section className="farmer-login-main">
          {/* ===================================================
              LEFT VISUAL AREA
          =================================================== */}
          <div className="farmer-login-visual">
            <div className="farmer-login-visual-content">
              <span className="farmer-login-small-label">
                <Sprout size={18} />
                স্মার্ট কৃষির বিশ্বস্ত সহযোগী
              </span>

              <h1>
                স্বাগতম
                <br />
                Agro Helper-এ
              </h1>

              <p>
                আপনার ফসলের সমস্যা জানান, AI সহায়তা নিন এবং
                অভিজ্ঞ কৃষি বিশেষজ্ঞদের কাছ থেকে সঠিক পরামর্শ পান।
              </p>
            </div>

            {/* Farmer Image */}
            <div className="farmer-login-farmer-image">
              <Image
                src="/images/hero/farmer.jpg"
                alt="Bangladeshi farmer using Agro Helper"
                fill
                priority
                sizes="50vw"
                className="farmer-login-farmer-photo"
              />
            </div>

            {/* Floating feature cards */}
            <div className="farmer-login-feature-list">
              <article className="farmer-login-feature-card">
                <div className="farmer-login-feature-icon">
                  <Leaf size={25} />
                </div>

                <div>
                  <strong>ফসলের রোগ শনাক্তকরণ</strong>
                  <span>ছবি দিয়ে AI প্রাথমিক বিশ্লেষণ পান</span>
                </div>
              </article>

              <article className="farmer-login-feature-card">
                <div className="farmer-login-feature-icon">
                  <MessageCircle size={25} />
                </div>

                <div>
                  <strong>বিশেষজ্ঞের পরামর্শ</strong>
                  <span>অভিজ্ঞ কৃষি বিশেষজ্ঞের সহায়তা নিন</span>
                </div>
              </article>

              <article className="farmer-login-feature-card">
                <div className="farmer-login-feature-icon">
                  <ShieldCheck size={25} />
                </div>

                <div>
                  <strong>নিরাপদ অ্যাকাউন্ট</strong>
                  <span>আপনার তথ্য সুরক্ষিতভাবে সংরক্ষিত থাকবে</span>
                </div>
              </article>
            </div>
          </div>

          {/* ===================================================
              RIGHT LOGIN FORM
          =================================================== */}
          <div className="farmer-login-form-side">
            <section className="farmer-login-card">
              <div className="farmer-login-heading">
                <div className="farmer-login-heading-icon">
                  <Leaf size={30} />
                </div>

                <h2>কৃষক লগইন</h2>

                <p>
                  আপনার Agro Helper অ্যাকাউন্টে প্রবেশ করুন
                </p>
              </div>

              <form
                className="farmer-login-form"
                onSubmit={handleLogin}
              >
                {/* Email */}
                <div className="farmer-login-field">
                  <label htmlFor="email">
                    ইমেইল ঠিকানা <span>*</span>
                  </label>

                  <div className="farmer-login-input-wrap">
                    <Mail size={21} />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="আপনার ইমেইল লিখুন"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="farmer-login-field">
                  <label htmlFor="password">
                    পাসওয়ার্ড <span>*</span>
                  </label>

                  <div className="farmer-login-input-wrap">
                    <LockKeyhole size={21} />

                    <input
                      id="password"
                      name="password"
                      type={
                        showPassword ? "text" : "password"
                      }
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      placeholder="আপনার পাসওয়ার্ড লিখুন"
                      autoComplete="current-password"
                      minLength={6}
                      required
                    />

                    <button
                      type="button"
                      className="farmer-login-password-toggle"
                      onClick={() =>
                        setShowPassword(
                          (current) => !current
                        )
                      }
                      aria-label="পাসওয়ার্ড দেখুন বা লুকান"
                    >
                      {showPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember + Forgot password */}
                <div className="farmer-login-options">
                  <label className="farmer-login-remember">
                    <input type="checkbox" />
                    <span />
                    আমাকে মনে রাখুন
                  </label>

                  <Link
                    href="#"
                    className="farmer-login-forgot"
                  >
                    পাসওয়ার্ড ভুলে গেছেন?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="farmer-login-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "লগইন হচ্ছে..."
                    : "লগইন করুন"}

                  {!isSubmitting && (
                    <ArrowRight size={21} />
                  )}
                </button>

                {/* Registration link */}
                <div className="farmer-login-register-message">
                  <span>
                    এখনো Agro Helper অ্যাকাউন্ট নেই?
                  </span>

                  <Link href="/farmer/register">
                    নতুন অ্যাকাউন্ট তৈরি করুন
                  </Link>
                </div>
              </form>

              {/* Security note */}
              <div className="farmer-login-security-note">
                <ShieldCheck size={19} />

                <div>
                  <strong>
                    আপনার তথ্য নিরাপদ
                  </strong>

                  <span>
                    আপনার ব্যক্তিগত তথ্য নিরাপদ ও গোপন রাখা হবে।
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* =====================================================
            COMPACT FOOTER
        ===================================================== */}
        <footer className="farmer-login-footer">
          <div className="farmer-login-footer-inner">
            <div className="farmer-login-footer-brand">
              <Image
                src="/images/logo/aglogo.png"
                alt="Agro Helper"
                width={170}
                height={55}
                className="farmer-login-footer-logo"
              />

              <span>
                কৃষকের পাশে, সবসময়
              </span>
            </div>

            <div className="farmer-login-footer-links">
              <strong>দ্রুত লিংক</strong>

              <Link href="/">হোম</Link>
              <Link href="/#services">আমাদের সেবা</Link>
              <Link href="/#crops">ফসলের তালিকা</Link>
              <Link href="/#how-it-works">
                কিভাবে কাজ করে
              </Link>
            </div>

            <div className="farmer-login-footer-links">
              <strong>সহায়তা</strong>

              <a href="#">সাধারণ প্রশ্ন</a>
              <a href="#">গোপনীয়তা নীতি</a>
              <a href="#">যোগাযোগ</a>

              <div className="farmer-login-social-icons">
                <a href="#" aria-label="Facebook">
                  <FaFacebookF />
                </a>

                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>

                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="farmer-login-footer-subscribe">
              <strong>
                নিয়মিতভাবে কৃষি আপডেট পেতে
                <br />
                সাবস্ক্রাইব করুন
              </strong>

              <div>
                <input
                  type="email"
                  placeholder="আপনার ইমেইল লিখুন"
                />

                <button type="button">
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* =====================================================
          PAGE-SCOPED CSS
      ===================================================== */}
      <style jsx global>{`
        .farmer-login-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #effaf5;
          color: #16291f;
          font-family: Arial, Helvetica, sans-serif;
        }

        .farmer-login-page *,
        .farmer-login-page *::before,
        .farmer-login-page *::after {
          box-sizing: border-box;
        }

        .farmer-login-page button,
        .farmer-login-page input {
          font: inherit;
        }

        /* =====================================================
           NAVBAR
        ===================================================== */

        .farmer-login-topbar {
          padding: 15px 26px 0;
          background: linear-gradient(
            90deg,
            #f4fff8,
            #edfff9
          );
        }

        .farmer-login-topbar-inner {
          width: 100%;
          max-width: 1480px;
          min-height: 72px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 17px;
          background: #ffffff;
          box-shadow:
            0 8px 28px rgba(23, 92, 48, 0.08);
        }

        .farmer-login-logo-link {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .farmer-login-logo {
          width: 190px;
          height: auto;
        }

        .farmer-login-nav {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .farmer-login-nav-link {
          padding: 9px 7px;
          display: flex;
          align-items: center;
          gap: 5px;
          border-radius: 9px;
          color: #29382f;
          text-decoration: none;
          white-space: nowrap;
          font-size: 13px;
          font-weight: 700;
        }

        .farmer-login-nav-link:hover,
        .farmer-login-nav-active {
          background: #eef9f1;
          color: #078b3b;
        }

        .farmer-login-top-actions {
          flex-shrink: 0;
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .farmer-login-language-button,
        .farmer-login-navbar-login,
        .farmer-login-navbar-register {
          min-height: 42px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border-radius: 9px;
          white-space: nowrap;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
        }

        .farmer-login-language-button {
          border: 0;
          background: #f3f5f4;
          color: #27372e;
          cursor: pointer;
        }

        .farmer-login-navbar-login {
          border: 1px solid #078b3b;
          background: #ffffff;
          color: #078b3b;
        }

        .farmer-login-navbar-register {
          border: 1px solid #078b3b;
          background: #078b3b;
          color: #ffffff;
        }

        /* =====================================================
           MAIN LOGIN AREA
        ===================================================== */

        .farmer-login-main {
          min-height: 760px;
          display: grid;
          grid-template-columns:
            minmax(500px, 52%)
            minmax(480px, 48%);
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(77, 204, 139, 0.17),
              transparent 30%
            ),
            #effaf5;
        }

        /* =====================================================
           LEFT VISUAL
        ===================================================== */

        .farmer-login-visual {
          min-height: 760px;
          position: relative;
          overflow: hidden;
          padding: 70px 55px;
        }

        .farmer-login-visual-content {
          max-width: 500px;
          position: relative;
          z-index: 20;
        }

        .farmer-login-small-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.86);
          color: #078b3b;
          font-size: 13px;
          font-weight: 800;
        }

        .farmer-login-visual-content h1 {
          margin: 18px 0 0;
          color: #10281c;
          font-size: 48px;
          line-height: 1.13;
          font-weight: 900;
        }

        .farmer-login-visual-content p {
          max-width: 430px;
          margin: 18px 0 0;
          color: #385047;
          font-size: 18px;
          line-height: 1.65;
        }

        .farmer-login-farmer-image {
          width: 100%;
          height: 67%;
          position: absolute;
          left: 0;
          bottom: 0;
        }

        .farmer-login-farmer-image::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(239, 250, 245, 1) 0%,
            rgba(239, 250, 245, 0.4) 25%,
            rgba(239, 250, 245, 0) 50%
          );
        }

        .farmer-login-farmer-photo {
          object-fit: cover;
          object-position: center 40%;
        }

        .farmer-login-feature-list {
          width: 315px;
          position: absolute;
          left: 35px;
          bottom: 48px;
          z-index: 20;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .farmer-login-feature-card {
          min-height: 80px;
          padding: 13px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow:
            0 8px 22px rgba(19, 72, 37, 0.12);
        }

        .farmer-login-feature-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #ddf7e7;
          color: #078b3b;
        }

        .farmer-login-feature-card strong,
        .farmer-login-feature-card span {
          display: block;
        }

        .farmer-login-feature-card strong {
          color: #183026;
          font-size: 14px;
          font-weight: 900;
        }

        .farmer-login-feature-card span {
          margin-top: 4px;
          color: #637269;
          font-size: 11px;
          line-height: 1.4;
        }

        /* =====================================================
           RIGHT LOGIN CARD
        ===================================================== */

        .farmer-login-form-side {
          min-height: 760px;
          padding: 65px 55px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .farmer-login-card {
          width: 100%;
          max-width: 520px;
          padding: 42px 40px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow:
            0 22px 60px rgba(23, 86, 49, 0.11);
        }

        .farmer-login-heading {
          text-align: center;
        }

        .farmer-login-heading-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 15px;
          display: grid;
          place-items: center;
          border-radius: 19px;
          background: #ddf8e8;
          color: #078b3b;
        }

        .farmer-login-heading h2 {
          margin: 0;
          color: #123025;
          font-size: 34px;
          font-weight: 900;
        }

        .farmer-login-heading p {
          margin: 9px 0 0;
          color: #6c7b73;
          font-size: 14px;
        }

        .farmer-login-form {
          margin-top: 30px;
        }

        .farmer-login-field {
          margin-bottom: 19px;
        }

        .farmer-login-field > label {
          display: block;
          margin-bottom: 8px;
          color: #263b30;
          font-size: 13px;
          font-weight: 800;
        }

        .farmer-login-field > label span {
          color: #df3333;
        }

        .farmer-login-input-wrap {
          min-height: 55px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          gap: 11px;
          border: 1px solid #d4ded8;
          border-radius: 11px;
          background: #ffffff;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .farmer-login-input-wrap:focus-within {
          border-color: #078b3b;
          box-shadow:
            0 0 0 3px rgba(7, 139, 59, 0.08);
        }

        .farmer-login-input-wrap > svg {
          flex-shrink: 0;
          color: #425a4c;
        }

        .farmer-login-input-wrap input {
          width: 100%;
          min-width: 0;
          height: 53px;
          flex: 1;
          border: 0;
          outline: 0;
          background: transparent;
          color: #263a30;
          font-size: 14px;
        }

        .farmer-login-input-wrap input::placeholder {
          color: #98a39d;
        }

        .farmer-login-password-toggle {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          padding: 0;
          border: 0;
          background: transparent;
          color: #50645a;
          cursor: pointer;
        }

        /* Remember me + Forgot password */

        .farmer-login-options {
          margin-top: -3px;
          margin-bottom: 23px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .farmer-login-remember {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #53655b;
          cursor: pointer;
          font-size: 12px;
        }

        .farmer-login-remember input {
          display: none;
        }

        .farmer-login-remember > span {
          width: 18px;
          height: 18px;
          position: relative;
          border: 1.5px solid #aab9b0;
          border-radius: 4px;
          background: #ffffff;
        }

        .farmer-login-remember
          input:checked
          + span {
          border-color: #078b3b;
          background: #078b3b;
        }

        .farmer-login-remember
          input:checked
          + span::after {
          content: "✓";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -54%);
          color: #ffffff;
          font-size: 12px;
          font-weight: 900;
        }

        .farmer-login-forgot {
          color: #078b3b;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
        }

        /* Login button */

        .farmer-login-submit {
          width: 100%;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 0;
          border-radius: 10px;
          background: #078b3b;
          color: #ffffff;
          cursor: pointer;
          font-size: 16px;
          font-weight: 900;
          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .farmer-login-submit:hover {
          background: #067b34;
          transform: translateY(-1px);
        }

        .farmer-login-submit:disabled {
          cursor: wait;
          opacity: 0.75;
          transform: none;
        }

        /* Registration message */

        .farmer-login-register-message {
          margin-top: 22px;
          padding-top: 20px;
          border-top: 1px solid #ebf0ed;
          text-align: center;
        }

        .farmer-login-register-message span {
          display: block;
          color: #68776f;
          font-size: 12px;
        }

        .farmer-login-register-message a {
          margin-top: 6px;
          display: inline-block;
          color: #078b3b;
          text-decoration: none;
          font-size: 13px;
          font-weight: 900;
        }

        /* Security information */

        .farmer-login-security-note {
          margin-top: 22px;
          padding: 13px 15px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          border-radius: 10px;
          background: #f0faf4;
          color: #078b3b;
        }

        .farmer-login-security-note svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .farmer-login-security-note strong,
        .farmer-login-security-note span {
          display: block;
        }

        .farmer-login-security-note strong {
          color: #245036;
          font-size: 12px;
          font-weight: 900;
        }

        .farmer-login-security-note span {
          margin-top: 3px;
          color: #65766c;
          font-size: 10px;
          line-height: 1.4;
        }

        /* =====================================================
           FOOTER
        ===================================================== */

        .farmer-login-footer {
          width: 100%;
          border-top: 1px solid #e2ebe5;
          background: #ffffff;
        }

        .farmer-login-footer-inner {
          width: min(
            1380px,
            calc(100% - 48px)
          );
          margin: 0 auto;
          padding: 24px 0;
          display: grid;
          grid-template-columns:
            1.2fr
            0.8fr
            0.8fr
            1.4fr;
          gap: 36px;
        }

        .farmer-login-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .farmer-login-footer-logo {
          width: 170px;
          height: auto;
        }

        .farmer-login-footer-brand span {
          color: #59675f;
          font-size: 13px;
        }

        .farmer-login-footer-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .farmer-login-footer-links strong,
        .farmer-login-footer-subscribe strong {
          margin-bottom: 4px;
          color: #172c21;
          font-size: 15px;
          font-weight: 900;
        }

        .farmer-login-footer-links a {
          color: #56645c;
          text-decoration: none;
          font-size: 13px;
        }

        .farmer-login-footer-links a:hover {
          color: #078b3b;
        }

        .farmer-login-social-icons {
          margin-top: 8px;
          display: flex;
          gap: 9px;
        }

        .farmer-login-social-icons a {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
        }

        .farmer-login-social-icons a:nth-child(1) {
          background: #1877f2;
        }

        .farmer-login-social-icons a:nth-child(2) {
          background: #ff0000;
        }

        .farmer-login-social-icons a:nth-child(3) {
          background: #0a66c2;
        }

        .farmer-login-footer-subscribe > div {
          margin-top: 9px;
          display: flex;
          gap: 8px;
        }

        .farmer-login-footer-subscribe input {
          min-width: 0;
          min-height: 40px;
          flex: 1;
          padding: 0 12px;
          border: 1px solid #dce5df;
          border-radius: 7px;
          outline: none;
          font-size: 12px;
        }

        .farmer-login-footer-subscribe button {
          min-height: 40px;
          padding: 0 15px;
          border: 0;
          border-radius: 7px;
          background: #078b3b;
          color: #ffffff;
          cursor: pointer;
          font-size: 12px;
          font-weight: 800;
        }

        /* =====================================================
           SMALL LAPTOP
        ===================================================== */

        @media (max-width: 1400px) {
          .farmer-login-logo {
            width: 160px;
          }

          .farmer-login-nav-link {
            padding-left: 5px;
            padding-right: 5px;
            font-size: 11px;
          }

          .farmer-login-nav-link svg {
            width: 14px;
            height: 14px;
          }

          .farmer-login-language-button,
          .farmer-login-navbar-login,
          .farmer-login-navbar-register {
            min-height: 39px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 11px;
          }

          .farmer-login-main {
            grid-template-columns:
              minmax(470px, 50%)
              minmax(500px, 50%);
          }

          .farmer-login-visual {
            padding-left: 40px;
            padding-right: 40px;
          }

          .farmer-login-visual-content h1 {
            font-size: 42px;
          }

          .farmer-login-form-side {
            padding-left: 35px;
            padding-right: 35px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .farmer-login-nav {
            display: none;
          }

          .farmer-login-main {
            grid-template-columns: 1fr;
          }

          .farmer-login-visual {
            min-height: 680px;
          }

          .farmer-login-form-side {
            min-height: auto;
            padding: 45px 25px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 720px) {
          .farmer-login-topbar {
            padding: 8px 8px 0;
          }

          .farmer-login-topbar-inner {
            min-height: 62px;
            padding: 0 10px;
          }

          .farmer-login-logo {
            width: 135px;
          }

          .farmer-login-language-button {
            display: none;
          }

          .farmer-login-navbar-login,
          .farmer-login-navbar-register {
            min-height: 36px;
            padding: 0 8px;
            font-size: 10px;
          }

          .farmer-login-visual {
            min-height: 640px;
            padding: 35px 20px;
          }

          .farmer-login-visual-content h1 {
            font-size: 34px;
          }

          .farmer-login-visual-content p {
            font-size: 15px;
          }

          .farmer-login-feature-list {
            width: calc(100% - 40px);
            left: 20px;
            bottom: 25px;
          }

          .farmer-login-form-side {
            padding: 30px 12px;
          }

          .farmer-login-card {
            padding: 32px 20px;
          }

          .farmer-login-heading h2 {
            font-size: 29px;
          }

          .farmer-login-options {
            align-items: flex-start;
            flex-direction: column;
          }

          .farmer-login-footer-inner {
            width: calc(100% - 24px);
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .farmer-login-footer-subscribe > div {
            flex-direction: column;
          }

          .farmer-login-footer-subscribe button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}