"use client";

/**
 * Temporary Farmer Dashboard.
 * The complete dashboard UI will be created in the next stage.
 */

import Link from "next/link";
import {
  Leaf,
  LayoutDashboard,
} from "lucide-react";

export default function FarmerDashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#effaf4",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "50px 30px",
          textAlign: "center",
          borderRadius: "24px",
          background: "#ffffff",
          boxShadow:
            "0 18px 50px rgba(20, 83, 44, 0.1)",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            margin: "0 auto 18px",
            display: "grid",
            placeItems: "center",
            borderRadius: "20px",
            background: "#dff8e9",
            color: "#078b3b",
          }}
        >
          <LayoutDashboard size={36} />
        </div>

        <h1
          style={{
            margin: 0,
            color: "#123025",
            fontSize: "34px",
          }}
        >
          কৃষক ড্যাশবোর্ড
        </h1>

        <p
          style={{
            maxWidth: "440px",
            margin: "14px auto 26px",
            color: "#637169",
            lineHeight: 1.6,
          }}
        >
          লগইন সফল হয়েছে। এখানে পরবর্তীতে আপনার সম্পূর্ণ
          Farmer Dashboard তৈরি করা হবে।
        </p>

        <Link
          href="/"
          style={{
            minHeight: "48px",
            padding: "0 24px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            borderRadius: "9px",
            background: "#078b3b",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 800,
          }}
        >
          <Leaf size={18} />
          হোমে ফিরে যান
        </Link>
      </section>
    </main>
  );
}