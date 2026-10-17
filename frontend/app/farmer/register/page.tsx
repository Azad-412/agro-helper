"use client";

/**
 * ============================================================
 * AGRO HELPER
 * Registration Type Selection Page
 * Route: /farmer/register
 * ============================================================
 *
 * Purpose:
 * - User selects Farmer / Expert / Admin account type.
 * - Farmer continues to the Personal Information page.
 * - All styles are kept in this page to avoid CSS module issues.
 */

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Bot,
  BookOpen,
  Check,
  CircleHelp,
  FileText,
  Globe2,
  Headphones,
  Home,
  Info,
  LayoutGrid,
  Leaf,
  MessageCircle,
  Phone,
  User,
  UserRoundCog,
  Users,
} from "lucide-react";

type AccountType = "farmer" | "expert" | "admin";

export default function RegistrationTypePage() {
  const router = useRouter();

  // Farmer is selected by default.
  const [selectedRole, setSelectedRole] =
    useState<AccountType>("farmer");

  /**
   * Continue to the selected registration flow.
   * Currently the farmer registration flow is implemented.
   */
  const handleNext = () => {
    if (selectedRole === "farmer") {
      router.push("/farmer/register/details");
      return;
    }

    if (selectedRole === "expert") {
      alert("বিশেষজ্ঞ নিবন্ধন পেজ পরবর্তী ধাপে তৈরি করা হবে।");
      return;
    }

    alert("অ্যাডমিন নিবন্ধন পেজ পরবর্তী ধাপে তৈরি করা হবে।");
  };

  return (
    <>
      <main className="register-page">
        {/* =====================================================
            NAVBAR
            ===================================================== */}
        <header className="reg-navbar">
          <div className="reg-navbar-inner">
            {/* Logo */}
            <Link href="/" className="reg-logo-link">
              <Image
                src="/images/logo/aglogo.png"
                alt="Agro Helper"
                width={185}
                height={60}
                priority
                className="reg-logo"
              />
            </Link>

            {/* Main Navigation */}
            <nav className="reg-nav-links">
              <Link href="/" className="reg-nav-item active">
                <Home size={17} />
                হোম
              </Link>

              <Link href="/#services" className="reg-nav-item">
                <LayoutGrid size={17} />
                আমাদের সেবা
              </Link>

              <Link href="/#crops" className="reg-nav-item">
                <Leaf size={17} />
                ফসলের তালিকা
              </Link>

              <Link href="/#experts" className="reg-nav-item">
                <Users size={17} />
                বিশেষজ্ঞদের তালিকা
              </Link>

              <Link href="/#how-it-works" className="reg-nav-item">
                <BookOpen size={17} />
                কিভাবে কাজ করে
              </Link>

              <Link href="/#contact" className="reg-nav-item">
                <Phone size={17} />
                যোগাযোগ
              </Link>

              <Link href="/#about" className="reg-nav-item">
                <CircleHelp size={17} />
                সম্পর্কে
              </Link>
            </nav>

            {/* Right-side Actions */}
            <div className="reg-nav-actions">
              <button
                type="button"
                className="reg-language-button"
              >
                <Globe2 size={17} />
                বাংলা
              </button>

              <button
                type="button"
                className="reg-login-button"
              >
                লগইন
              </button>

              <button
                type="button"
                className="reg-register-button"
              >
                নিবন্ধন
              </button>
            </div>
          </div>
        </header>

        {/* =====================================================
            REGISTRATION AREA
            ===================================================== */}
        <section className="registration-area">
          <div className="background-decoration-one" />
          <div className="background-decoration-two" />

          <div className="registration-container">
            {/* =================================================
                LEFT PANEL
                ================================================= */}
            <section className="registration-left-panel">
              <div className="left-heading">
                <Leaf
                  size={31}
                  className="small-heading-leaf"
                />

                <div>
                  <h1>নিবন্ধন করুন</h1>

                  <p>
                    Agro Helper-এ যোগ দিয়ে
                    <br />
                    স্মার্ট কৃষির অংশ হোন
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="benefit-list">
                <article className="benefit-card">
                  <div className="benefit-icon green-icon">
                    <Leaf size={22} />
                  </div>

                  <div>
                    <strong>
                      ফসলের সমস্যা রিপোর্ট করুন
                    </strong>

                    <span>
                      ছবি ও বিস্তারিত তথ্য দিয়ে সমস্যা জানান
                    </span>
                  </div>
                </article>

                <article className="benefit-card">
                  <div className="benefit-icon orange-icon">
                    <Bot size={22} />
                  </div>

                  <div>
                    <strong>AI সহায়তা নিন</strong>

                    <span>
                      AI থেকে প্রাথমিক রোগ বিশ্লেষণ পান
                    </span>
                  </div>
                </article>

                <article className="benefit-card">
                  <div className="benefit-icon blue-icon">
                    <MessageCircle size={22} />
                  </div>

                  <div>
                    <strong>
                      বিশেষজ্ঞের পরামর্শ নিন
                    </strong>

                    <span>
                      অভিজ্ঞ কৃষি বিশেষজ্ঞের চূড়ান্ত পরামর্শ পান
                    </span>
                  </div>
                </article>

                <article className="benefit-card">
                  <div className="benefit-icon red-icon">
                    <FileText size={22} />
                  </div>

                  <div>
                    <strong>
                      কেয়ার প্ল্যান সংগ্রহ করুন
                    </strong>

                    <span>
                      পরামর্শ ও পরিচর্যা পরিকল্পনা সংরক্ষণ করুন
                    </span>
                  </div>
                </article>

                <article className="benefit-card">
                  <div className="benefit-icon purple-icon">
                    <Headphones size={22} />
                  </div>

                  <div>
                    <strong>ভয়েস পরামর্শ</strong>

                    <span>
                      প্রয়োজনে বিশেষজ্ঞের সাথে সরাসরি কথা বলুন
                    </span>
                  </div>
                </article>
              </div>

              {/* Decorative Quote */}
              <div className="farmer-quote">
                কৃষকের
                <br />
                সমস্যা,
                <br />
                আমাদের
                <br />
                সমাধান
              </div>

              {/* Farmer Image */}
              <div className="farmer-image-wrapper">
                <Image
                  src="/images/hero/farmer.jpg"
                  alt="Bangladeshi farmer"
                  fill
                  priority
                  sizes="50vw"
                  className="farmer-image"
                />
              </div>
            </section>

            {/* =================================================
                RIGHT PANEL
                ================================================= */}
            <section className="registration-right-panel">
              {/* Progress */}
              <div className="registration-progress">
                <div className="progress-step">
                  <div className="progress-circle progress-active">
                    1
                  </div>

                  <span>ধরন নির্বাচন</span>
                </div>

                <div className="progress-line" />

                <div className="progress-step">
                  <div className="progress-circle">
                    2
                  </div>

                  <span>তথ্য প্রদান</span>
                </div>

                <div className="progress-line" />

                <div className="progress-step">
                  <div className="progress-circle">
                    3
                  </div>

                  <span>নিবন্ধন সম্পন্ন</span>
                </div>
              </div>

              {/* Heading */}
              <div className="role-heading">
                <h2>
                  আপনি কী হিসেবে নিবন্ধন করতে চান?
                </h2>

                <p>
                  আপনার অ্যাকাউন্টের ধরন নির্বাচন করুন
                </p>
              </div>

              {/* =================================================
                  ROLE CARDS
                  ================================================= */}
              <div className="role-grid">
                {/* Farmer */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedRole("farmer")
                  }
                  className={`role-card ${
                    selectedRole === "farmer"
                      ? "role-selected"
                      : ""
                  }`}
                >
                  {selectedRole === "farmer" && (
                    <div className="selected-mark">
                      <Check size={16} />
                    </div>
                  )}

                  <div className="role-icon farmer-role-icon">
                    <User size={34} />
                  </div>

                  <h3>
                    কৃষক হিসেবে
                    <br />
                    নিবন্ধন
                  </h3>

                  <p>
                    ফসলের সমস্যা জানিয়ে AI ও কৃষি বিশেষজ্ঞের
                    পরামর্শ নিন
                  </p>
                </button>

                {/* Expert */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedRole("expert")
                  }
                  className={`role-card ${
                    selectedRole === "expert"
                      ? "role-selected"
                      : ""
                  }`}
                >
                  {selectedRole === "expert" && (
                    <div className="selected-mark">
                      <Check size={16} />
                    </div>
                  )}

                  <div className="role-icon expert-role-icon">
                    <Users size={34} />
                  </div>

                  <h3>
                    বিশেষজ্ঞ হিসেবে
                    <br />
                    নিবন্ধন
                  </h3>

                  <p>
                    কৃষকের সমস্যা পর্যালোচনা করে পেশাদার
                    কৃষি পরামর্শ দিন
                  </p>
                </button>

                {/* Admin */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedRole("admin")
                  }
                  className={`role-card ${
                    selectedRole === "admin"
                      ? "role-selected"
                      : ""
                  }`}
                >
                  {selectedRole === "admin" && (
                    <div className="selected-mark">
                      <Check size={16} />
                    </div>
                  )}

                  <div className="role-icon admin-role-icon">
                    <UserRoundCog size={34} />
                  </div>

                  <h3>
                    অ্যাডমিন হিসেবে
                    <br />
                    নিবন্ধন
                  </h3>

                  <p>
                    সিস্টেম, ব্যবহারকারী ও সেবাসমূহ পরিচালনা করুন
                  </p>
                </button>
              </div>

              {/* Information */}
              <div className="registration-info-box">
                <Info size={18} />

                <p>
                  কৃষক হিসেবে নিবন্ধন করলে আপনি ফসলের সমস্যা
                  রিপোর্ট করতে পারবেন, AI-এর প্রাথমিক সহায়তা
                  এবং কৃষি বিশেষজ্ঞের চূড়ান্ত পরামর্শ পাবেন।
                </p>
              </div>

              {/* Next */}
              <button
                type="button"
                className="next-button"
                onClick={handleNext}
              >
                পরবর্তী ধাপ
                <ArrowRight size={19} />
              </button>

              {/* Existing Account */}
              <div className="existing-login-text">
                <span>
                  ইতোমধ্যে অ্যাকাউন্ট আছে?
                </span>

                <button type="button">
                  লগইন করুন
                </button>
              </div>
            </section>
          </div>
        </section>

        {/* =====================================================
            FOOTER
            ===================================================== */}
        <footer className="reg-footer">
          <div className="reg-footer-inner">
            <div className="footer-brand">
              <Image
                src="/images/logo/aglogo.png"
                alt="Agro Helper"
                width={180}
                height={58}
                className="footer-logo"
              />

              <span>
                কৃষকের পাশে, সবসময়
              </span>
            </div>

            <div className="footer-links">
              <strong>দ্রুত লিংক</strong>

              <Link href="/">হোম</Link>

              <Link href="/#services">
                আমাদের সেবা
              </Link>

              <Link href="/#crops">
                ফসলের তালিকা
              </Link>

              <Link href="/#how-it-works">
                কিভাবে কাজ করে
              </Link>

              <Link href="/#about">
                আমাদের সম্পর্কে
              </Link>
            </div>

            <div className="footer-links">
              <strong>সহায়তা</strong>

              <a href="#">সাধারণ প্রশ্ন</a>
              <a href="#">গোপনীয়তা নীতি</a>
              <a href="#">যোগাযোগ</a>

              <div className="social-icons">
                <span className="facebook">
                  f
                </span>

                <span className="youtube">
                  ▶
                </span>

                <span className="linkedin">
                  in
                </span>
              </div>
            </div>

            <div className="footer-subscribe">
              <strong>
                নিয়মিতভাবে কৃষি আপডেট পেতে
                <br />
                সাবস্ক্রাইব করুন
              </strong>

              <div className="subscribe-row">
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
          PAGE STYLING
          ===================================================== */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        button,
        input,
        select {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        /* =====================================================
           PAGE
           ===================================================== */

        .register-page {
          width: 100%;
          min-height: 100vh;

          overflow-x: hidden;

          background: #ffffff;
          color: #14251b;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        /* =====================================================
           NAVBAR
           ===================================================== */

        .reg-navbar {
          width: 100%;

          position: relative;
          z-index: 100;

          /* Gives breathing room above and below the navbar */
          padding: 10px 16px;

          background: #ffffff;

          border-bottom: 1px solid #e8eee9;

          box-shadow:
            0 4px 14px
            rgba(20, 80, 38, 0.05);
        }

        .reg-navbar-inner {
          width: 100%;
          max-width: 1480px;

          min-height: 64px;

          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;
        }

        /* Logo */

        .reg-logo-link {
          flex-shrink: 0;

          display: flex;
          align-items: center;

          text-decoration: none;
        }

        .reg-logo {
          width: 175px;
          height: auto;

          object-fit: contain;
        }

        /* Navigation */

        .reg-nav-links {
          flex: 1;

          min-width: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 2px;
        }

        .reg-nav-item {
          padding: 9px 7px;

          display: flex;
          align-items: center;

          gap: 5px;

          border-radius: 9px;

          color: #303c35;

          text-decoration: none;

          white-space: nowrap;

          font-size: 13px;
          line-height: 1.3;
          font-weight: 600;
        }

        .reg-nav-item:hover,
        .reg-nav-item.active {
          color: #078a3a;

          background: #edf9ef;
        }

        /* Right side navbar buttons */

        .reg-nav-actions {
          flex-shrink: 0;

          margin-left: auto;

          display: flex;
          align-items: center;

          gap: 8px;
        }

        .reg-nav-actions button {
          min-height: 42px;

          padding: 0 14px;

          border-radius: 9px;

          font-size: 13px;
          font-weight: 700;

          white-space: nowrap;
        }

        .reg-language-button {
          display: flex;
          align-items: center;

          gap: 6px;

          border: 0;

          background: #f4f6f5;
          color: #29362f;
        }

        .reg-login-button {
          border: 1px solid #078b3b;

          background: #ffffff;
          color: #078338;
        }

        .reg-register-button {
          border: 1px solid #078b3b;

          background: #078b3b;
          color: #ffffff;
        }

        /* =====================================================
           REGISTRATION AREA
           ===================================================== */

        .registration-area {
          min-height: 650px;

          position: relative;
          overflow: hidden;

          padding: 26px 0 22px;

          background:
            linear-gradient(
              90deg,
              #effaf1 0%,
              #f5fbf3 44%,
              #edf9ef 100%
            );
        }

        .background-decoration-one {
          width: 390px;
          height: 390px;

          position: absolute;

          left: -120px;
          bottom: -180px;

          border-radius: 50%;

          background:
            rgba(80, 178, 72, 0.11);
        }

        .background-decoration-two {
          width: 420px;
          height: 420px;

          position: absolute;

          right: -160px;
          top: -180px;

          border-radius: 50%;

          background:
            rgba(116, 195, 77, 0.1);
        }

        /* =====================================================
           MAIN CONTENT
           ===================================================== */

        .registration-container {
          width: min(
            1440px,
            calc(100% - 50px)
          );

          min-height: 620px;

          position: relative;
          z-index: 2;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(440px, 0.95fr)
            minmax(590px, 1.05fr);

          overflow: hidden;

          border-radius: 18px;

          background:
            rgba(255, 255, 255, 0.65);

          box-shadow:
            0 18px 50px
            rgba(30, 91, 43, 0.08);
        }

        /* =====================================================
           LEFT PANEL
           ===================================================== */

        .registration-left-panel {
          min-height: 620px;

          position: relative;
          overflow: hidden;

          padding: 38px 35px;

          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.83),
              rgba(225, 245, 223, 0.85)
            );
        }

        .left-heading {
          position: relative;
          z-index: 20;

          display: flex;
          align-items: flex-start;

          gap: 10px;
        }

        .small-heading-leaf {
          flex-shrink: 0;

          margin-top: 3px;

          color: #0a963e;

          transform: rotate(-20deg);
        }

        .left-heading h1 {
          margin: 0;

          color: #10231a;

          font-size: 39px;
          line-height: 1.1;
          font-weight: 900;
        }

        .left-heading p {
          margin: 12px 0 0;

          color: #35483d;

          font-size: 19px;
          line-height: 1.45;
          font-weight: 700;
        }

        /* =====================================================
           BENEFITS
           ===================================================== */

        .benefit-list {
          width: 285px;

          position: relative;
          z-index: 30;

          margin-top: 28px;

          display: flex;
          flex-direction: column;

          gap: 10px;
        }

        .benefit-card {
          min-height: 61px;

          padding: 9px 11px;

          display: flex;
          align-items: center;

          gap: 11px;

          border: 1px solid #dce8df;
          border-radius: 11px;

          background:
            rgba(255, 255, 255, 0.95);

          box-shadow:
            0 4px 13px
            rgba(31, 71, 40, 0.07);
        }

        .benefit-icon {
          width: 42px;
          height: 42px;

          flex-shrink: 0;

          display: grid;
          place-items: center;

          border-radius: 9px;
        }

        .green-icon {
          background: #dff5e4;
          color: #07903b;
        }

        .orange-icon {
          background: #fff0dd;
          color: #f28d1a;
        }

        .blue-icon {
          background: #e2f0ff;
          color: #177bd7;
        }

        .red-icon {
          background: #ffe5e5;
          color: #ed4545;
        }

        .purple-icon {
          background: #eee6ff;
          color: #7948d6;
        }

        .benefit-card strong,
        .benefit-card span {
          display: block;
        }

        .benefit-card strong {
          margin-bottom: 3px;

          color: #193025;

          font-size: 12px;
          font-weight: 800;
        }

        .benefit-card span {
          color: #69776e;

          font-size: 9px;
          line-height: 1.4;
        }

        /* =====================================================
           FARMER IMAGE
           ===================================================== */

        .farmer-image-wrapper {
          width: 58%;
          height: 69%;

          position: absolute;

          right: -3%;
          bottom: 0;

          overflow: hidden;

          border-radius: 150px 0 0 0;
        }

        .farmer-image {
          object-fit: cover;

          object-position: center;
        }

        /* =====================================================
           DECORATIVE QUOTE
           ===================================================== */

        .farmer-quote {
          width: 165px;

          position: absolute;

          right: 18px;

          /* Moved upward */
          top: 42px;

          z-index: 25;

          color: #087b35;

          text-align: center;

          font-size: 35px;
          line-height: 0.96;
          font-weight: 900;

          transform: rotate(-8deg);

          text-shadow:
            0 2px 8px
            rgba(255, 255, 255, 0.75);

          pointer-events: none;
        }

        /* =====================================================
           RIGHT PANEL
           ===================================================== */

        .registration-right-panel {
          min-height: 620px;

          padding: 34px 38px;

          background:
            rgba(255, 255, 255, 0.97);
        }

        /* =====================================================
           PROGRESS
           ===================================================== */

        .registration-progress {
          width: 80%;

          margin: 0 auto 34px;

          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .progress-step {
          min-width: 90px;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 7px;
        }

        .progress-circle {
          width: 31px;
          height: 31px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          background: #edf0ee;
          color: #6e7b73;

          font-size: 12px;
          font-weight: 800;
        }

        .progress-circle.progress-active {
          background: #0c963e;
          color: #ffffff;
        }

        .progress-step span {
          color: #6f7973;

          font-size: 10px;

          white-space: nowrap;
        }

        .progress-step:first-child span {
          color: #07883a;

          font-weight: 700;
        }

        .progress-line {
          height: 2px;

          flex: 1;

          margin-top: 15px;

          background: #dfe5e1;
        }

        /* =====================================================
           ROLE HEADING
           ===================================================== */

        .role-heading h2 {
          margin: 0;

          color: #173126;

          font-size: 27px;
          line-height: 1.25;
          font-weight: 900;
        }

        .role-heading p {
          margin: 7px 0 0;

          color: #5e6c63;

          font-size: 13px;
        }

        /* =====================================================
           ROLE CARDS
           ===================================================== */

        .role-grid {
          margin-top: 20px;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 14px;
        }

        .role-card {
          min-height: 200px;

          position: relative;

          padding: 21px 12px;

          border: 1.5px solid #e3e8e4;
          border-radius: 12px;

          background: #ffffff;
          color: inherit;

          text-align: center;

          transition:
            border-color 0.2s ease,
            background-color 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .role-card:hover {
          transform: translateY(-2px);

          border-color: #74c992;

          box-shadow:
            0 7px 17px
            rgba(23, 91, 41, 0.09);
        }

        .role-card.role-selected {
          border-color: #16a34a;

          background: #effaf2;

          box-shadow:
            0 5px 15px
            rgba(15, 145, 60, 0.08);
        }

        .selected-mark {
          width: 25px;
          height: 25px;

          position: absolute;

          right: 10px;
          top: 10px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          background: #13a143;
          color: #ffffff;
        }

        .role-icon {
          width: 67px;
          height: 67px;

          margin: 0 auto 12px;

          display: grid;
          place-items: center;

          border-radius: 50%;
        }

        .farmer-role-icon {
          background: #dcf6e4;
          color: #07933d;
        }

        .expert-role-icon {
          background: #e4f1ff;
          color: #187bd4;
        }

        .admin-role-icon {
          background: #fff0df;
          color: #ed871e;
        }

        .role-card h3 {
          margin: 0;

          color: #183025;

          font-size: 16px;
          line-height: 1.35;
          font-weight: 900;
        }

        .role-card p {
          margin: 8px 0 0;

          color: #69776e;

          font-size: 10px;
          line-height: 1.5;
        }

        /* =====================================================
           INFO BOX
           ===================================================== */

        .registration-info-box {
          margin-top: 17px;

          padding: 12px 14px;

          display: flex;
          align-items: flex-start;

          gap: 10px;

          border: 1px solid #dcebe0;
          border-radius: 9px;

          background: #f0faf3;
        }

        .registration-info-box svg {
          flex-shrink: 0;

          margin-top: 1px;

          color: #078e3b;
        }

        .registration-info-box p {
          margin: 0;

          color: #53655b;

          font-size: 10px;
          line-height: 1.55;
        }

        /* =====================================================
           NEXT BUTTON
           ===================================================== */

        .next-button {
          width: 100%;
          min-height: 48px;

          margin-top: 16px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          border: 0;
          border-radius: 8px;

          background: #078b3b;
          color: #ffffff;

          font-size: 14px;
          font-weight: 800;
        }

        .next-button:hover {
          background: #067c34;
        }

        /* =====================================================
           LOGIN TEXT
           ===================================================== */

        .existing-login-text {
          margin-top: 13px;

          display: flex;
          justify-content: center;
          align-items: center;

          gap: 5px;

          color: #7b857f;

          font-size: 10px;
        }

        .existing-login-text button {
          padding: 0;

          border: 0;

          background: transparent;
          color: #078b3b;

          font-weight: 800;
        }

        /* =====================================================
           FOOTER
           ===================================================== */

        .reg-footer {
          width: 100%;

          border-top: 1px solid #e4ebe6;

          background: #ffffff;
        }

        .reg-footer-inner {
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

          gap: 40px;

          align-items: start;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;

          gap: 8px;
        }

        .footer-logo {
          width: 180px;
          height: auto;

          object-fit: contain;
        }

        .footer-brand span {
          color: #4d5d54;

          font-size: 14px;
          line-height: 1.5;
        }

        .footer-links {
          display: flex;
          flex-direction: column;

          gap: 7px;
        }

        .footer-links strong {
          margin-bottom: 4px;

          color: #14251b;

          font-size: 16px;
          font-weight: 800;
        }

        .footer-links a {
          color: #536158;

          text-decoration: none;

          font-size: 14px;
          line-height: 1.5;
        }

        .footer-links a:hover {
          color: #078a39;
        }

        .social-icons {
          margin-top: 8px;

          display: flex;

          gap: 10px;
        }

        .social-icons span {
          width: 34px;
          height: 34px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          color: #ffffff;

          font-size: 14px;
          font-weight: 800;
        }

        .social-icons .facebook {
          background: #1877f2;
        }

        .social-icons .youtube {
          background: #ff0000;
        }

        .social-icons .linkedin {
          background: #0a66c2;
        }

        .footer-subscribe strong {
          display: block;

          margin-bottom: 10px;

          color: #14251b;

          font-size: 16px;
          line-height: 1.4;
          font-weight: 800;
        }

        .subscribe-row {
          display: flex;
          align-items: center;

          gap: 10px;
        }

        .subscribe-row input {
          min-width: 0;
          min-height: 42px;

          flex: 1;

          padding: 0 13px;

          border: 1px solid #dce5df;
          border-radius: 7px;

          outline: none;

          color: #2e3a33;

          font-size: 13px;
        }

        .subscribe-row input:focus {
          border-color: #078b3b;
        }

        .subscribe-row button {
          min-height: 42px;

          padding: 0 17px;

          border: 0;
          border-radius: 7px;

          background: #098b3c;
          color: #ffffff;

          font-size: 13px;
          font-weight: 700;
        }

        /* =====================================================
           MEDIUM / SMALL LAPTOP
           Important for 1280px-1400px screens.
           ===================================================== */

        @media (max-width: 1400px) {
          .reg-navbar {
            padding-left: 12px;
            padding-right: 12px;
          }

          .reg-logo {
            width: 160px;
          }

          .reg-nav-links {
            gap: 0;
          }

          .reg-nav-item {
            padding-left: 5px;
            padding-right: 5px;

            gap: 4px;

            font-size: 11px;
          }

          .reg-nav-item svg {
            width: 15px;
            height: 15px;
          }

          .reg-nav-actions {
            gap: 6px;
          }

          .reg-nav-actions button {
            min-height: 40px;

            padding-left: 10px;
            padding-right: 10px;

            font-size: 11px;
          }

          .registration-container {
            grid-template-columns:
              minmax(390px, 0.9fr)
              minmax(540px, 1.1fr);
          }

          .left-heading h1 {
            font-size: 34px;
          }

          .farmer-image-wrapper {
            width: 60%;
          }

          .farmer-quote {
            width: 150px;

            right: 14px;

            /* Kept higher on laptop screens */
            top: 42px;

            font-size: 31px;
          }

          .registration-right-panel {
            padding-left: 28px;
            padding-right: 28px;
          }
        }

        /* =====================================================
           TABLET
           ===================================================== */

        @media (max-width: 1100px) {
          .reg-nav-links {
            display: none;
          }

          .registration-container {
            grid-template-columns: 1fr;
          }

          .registration-left-panel {
            min-height: 600px;
          }

          .registration-right-panel {
            min-height: auto;
          }

          .reg-footer-inner {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .footer-subscribe {
            grid-column: span 2;
          }
        }

        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width: 700px) {
          .reg-navbar {
            padding:
              8px
              8px;
          }

          .reg-navbar-inner {
            width: 100%;
          }

          .reg-logo {
            width: 135px;
          }

          .reg-language-button {
            display: none !important;
          }

          .reg-nav-actions {
            gap: 5px;
          }

          .reg-login-button,
          .reg-register-button {
            min-height: 38px !important;

            padding-left: 9px !important;
            padding-right: 9px !important;

            font-size: 10px !important;
          }

          .registration-area {
            padding-top: 12px;
            padding-bottom: 12px;
          }

          .registration-container {
            width: calc(100% - 20px);

            border-radius: 12px;
          }

          .registration-left-panel {
            min-height: 650px;

            padding:
              26px
              20px;
          }

          .left-heading h1 {
            font-size: 31px;
          }

          .left-heading p {
            font-size: 16px;
          }

          .benefit-list {
            width: 100%;
            max-width: 270px;
          }

          .farmer-image-wrapper {
            width: 75%;
            height: 47%;
          }

          .farmer-quote {
            width: 120px;

            right: 8px;
            top: 40px;

            font-size: 25px;
          }

          .registration-right-panel {
            padding:
              25px
              18px;
          }

          .registration-progress {
            width: 100%;
          }

          .progress-step {
            min-width: 67px;
          }

          .progress-step span {
            font-size: 8px;
          }

          .role-heading h2 {
            font-size: 23px;
          }

          .role-grid {
            grid-template-columns: 1fr;
          }

          .role-card {
            min-height: 160px;
          }

          .reg-footer-inner {
            width: calc(100% - 24px);

            grid-template-columns: 1fr;

            gap: 24px;
          }

          .footer-subscribe {
            grid-column: auto;
          }

          .subscribe-row {
            flex-direction: column;
            align-items: stretch;
          }

          .subscribe-row button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}