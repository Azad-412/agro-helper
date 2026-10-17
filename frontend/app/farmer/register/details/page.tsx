"use client";

/**
 * ============================================================
 * AGRO HELPER
 * Farmer Registration - Personal Information
 * Route: /farmer/register/details
 * ============================================================
 *
 * Page flow:
 * Registration Type
 *      ↓
 * Personal Information
 *      ↓
 * Address Information
 *
 * All CSS uses details-* classes so this page does not
 * interfere with Home or Registration Type pages.
 */

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CircleHelp,
  Eye,
  EyeOff,
  FileText,
  Globe2,
  Home,
  LayoutGrid,
  Leaf,
  LockKeyhole,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  User,
  Users,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function FarmerPersonalInformationPage() {
  const router = useRouter();

  // Password visibility control.
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // Default gender.
  const [gender, setGender] = useState("male");

  /**
   * After completing personal information,
   * the user continues to the Address Information page.
   */
  const handleNext = () => {
    router.push("/farmer/register/address");
  };

  return (
    <>
      <main className="details-page">
        {/* =====================================================
            NAVBAR
            ===================================================== */}
        <header className="details-topbar">
          <div className="details-topbar-inner">
            {/* Logo */}
            <Link href="/" className="details-logo-link">
              <Image
                src="/images/logo/aglogo.png"
                alt="Agro Helper"
                width={175}
                height={58}
                priority
                className="details-top-logo"
              />
            </Link>

            {/* Navigation */}
            <nav className="details-top-nav">
              <Link
                href="/"
                className="details-top-link details-top-active"
              >
                <Home size={16} />
                হোম
              </Link>

              <Link
                href="/#services"
                className="details-top-link"
              >
                <LayoutGrid size={16} />
                আমাদের সেবা
              </Link>

              <Link
                href="/#crops"
                className="details-top-link"
              >
                <Leaf size={16} />
                ফসলের তালিকা
              </Link>

              <Link
                href="/#experts"
                className="details-top-link"
              >
                <Users size={16} />
                বিশেষজ্ঞদের তালিকা
              </Link>

              <Link
                href="/#how-it-works"
                className="details-top-link"
              >
                <BookOpen size={16} />
                কিভাবে কাজ করে
              </Link>

              <Link
                href="/#contact"
                className="details-top-link"
              >
                <Phone size={16} />
                যোগাযোগ
              </Link>

              <Link
                href="/#about"
                className="details-top-link"
              >
                <CircleHelp size={16} />
                সম্পর্কে
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="details-top-actions">
              <button
                type="button"
                className="details-language-btn"
              >
                <Globe2 size={16} />
                বাংলা
              </button>

              <button
                type="button"
                className="details-login-btn"
              >
                লগইন
              </button>

              <Link
                href="/farmer/register"
                className="details-register-btn"
              >
                নিবন্ধন
              </Link>
            </div>
          </div>
        </header>

        {/* =====================================================
            MAIN REGISTRATION AREA
            ===================================================== */}
        <section className="details-main">
          {/* ===================================================
              LEFT SIDE
              =================================================== */}
          <aside className="details-left">
            <Link
              href="/farmer/register"
              className="details-back"
            >
              <ArrowLeft size={19} />
              ফিরে যান
            </Link>

            <div className="details-left-copy">
              <h1>কৃষক হিসেবে নিবন্ধন করুন</h1>

              <p>
                Agro Helper-এ নিবন্ধন করে আপনার ফসলের
                সমস্যা জানাতে পারবেন এবং AI ও বিশেষজ্ঞ
                কৃষি পরামর্শ পেতে পারবেন।
              </p>
            </div>

            {/* Farmer Background Image */}
            <div className="details-farmer-image-wrap">
              <Image
                src="/images/hero/farmer.jpg"
                alt="Bangladeshi farmer"
                fill
                priority
                sizes="42vw"
                className="details-farmer-image"
              />
            </div>

            {/* Decorative Leaves */}
            <Leaf
              className="details-leaf-one"
              size={68}
            />

            <Leaf
              className="details-leaf-two"
              size={58}
            />

            {/* Benefit Cards */}
            <div className="details-benefit-stack">
              <article className="details-benefit-card">
                <div className="details-benefit-icon details-benefit-green">
                  <Leaf size={27} />
                </div>

                <div>
                  <strong>
                    ফসলের রোগ শনাক্তকরণ
                  </strong>

                  <span>
                    ছবি আপলোড করে দ্রুত ফলাফল পান
                  </span>
                </div>
              </article>

              <article className="details-benefit-card">
                <div className="details-benefit-icon details-benefit-blue">
                  <MessageCircle size={27} />
                </div>

                <div>
                  <strong>
                    বিশেষজ্ঞ পরামর্শ
                  </strong>

                  <span>
                    অভিজ্ঞ কৃষি বিশেষজ্ঞদের সাথে কথা বলুন
                  </span>
                </div>
              </article>

              <article className="details-benefit-card">
                <div className="details-benefit-icon details-benefit-orange">
                  <Phone size={27} />
                </div>

                <div>
                  <strong>
                    ভয়েস পরামর্শ
                  </strong>

                  <span>
                    প্রয়োজনে সরাসরি কথা বলার সুযোগ
                  </span>
                </div>
              </article>

              <article className="details-benefit-card">
                <div className="details-benefit-icon details-benefit-red">
                  <FileText size={27} />
                </div>

                <div>
                  <strong>
                    কেয়ার প্ল্যান (PDF)
                  </strong>

                  <span>
                    সম্পূর্ণ পরামর্শ পরিকল্পনা পান
                  </span>
                </div>
              </article>
            </div>
          </aside>

          {/* ===================================================
              RIGHT FORM
              =================================================== */}
          <section className="details-form-card">
            {/* Heading */}
            <div className="details-form-heading">
              <h2>কৃষক নিবন্ধন</h2>

              <p>
                আপনার তথ্য দিয়ে একটি অ্যাকাউন্ট তৈরি করুন
              </p>
            </div>

            {/* =================================================
                PROGRESS
                ================================================= */}
            <div className="details-progress">
              <div className="details-progress-step details-current-step">
                <div className="details-step-circle">
                  1
                </div>
                <span>ব্যক্তিগত তথ্য</span>
              </div>

              <div className="details-progress-line" />

              <div className="details-progress-step">
                <div className="details-step-circle">
                  2
                </div>
                <span>ঠিকানা তথ্য</span>
              </div>

              <div className="details-progress-line" />

              <div className="details-progress-step">
                <div className="details-step-circle">
                  3
                </div>
                <span>কৃষি সম্পর্কিত তথ্য</span>
              </div>

              <div className="details-progress-line" />

              <div className="details-progress-step">
                <div className="details-step-circle">
                  4
                </div>
                <span>নিশ্চিতকরণ</span>
              </div>
            </div>

            {/* Personal Information Heading */}
            <div className="details-section-heading">
              <div className="details-section-icon">
                <User size={28} />
              </div>

              <div>
                <h3>ব্যক্তিগত তথ্য</h3>
                <p>
                  আপনার মৌলিক তথ্য প্রদান করুন
                </p>
              </div>
            </div>

            {/* =================================================
                FORM
                ================================================= */}
            <form
              className="details-form"
              onSubmit={(event) => {
                event.preventDefault();
                handleNext();
              }}
            >
              {/* Full Name */}
              <div className="details-field">
                <label htmlFor="fullName">
                  পূর্ণ নাম <span>*</span>
                </label>

                <div className="details-input-wrap">
                  <User size={20} />

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="details-field">
                <label htmlFor="email">
                  ইমেইল (ঐচ্ছিক)
                </label>

                <div className="details-input-wrap">
                  <Mail size={20} />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="আপনার ইমেইল লিখুন"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div className="details-field">
                <label htmlFor="phone">
                  মোবাইল নম্বর <span>*</span>
                </label>

                <div className="details-input-wrap">
                  <Phone size={20} />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="details-field">
                <label htmlFor="password">
                  পাসওয়ার্ড <span>*</span>
                </label>

                <div className="details-input-wrap">
                  <LockKeyhole size={20} />

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="কমপক্ষে ৬টি অক্ষর ব্যবহার করুন"
                    minLength={6}
                    required
                  />

                  <button
                    type="button"
                    className="details-password-toggle"
                    onClick={() =>
                      setShowPassword(
                        (current) => !current
                      )
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* NID */}
              <div className="details-field">
                <label htmlFor="nid">
                  জাতীয় পরিচয়পত্র নম্বর (ঐচ্ছিক)
                </label>

                <div className="details-input-wrap">
                  <ShieldCheck size={20} />

                  <input
                    id="nid"
                    name="nid"
                    type="text"
                    placeholder="আপনার জাতীয় পরিচয়পত্র নম্বর লিখুন"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="details-field">
                <label htmlFor="confirmPassword">
                  পাসওয়ার্ড নিশ্চিত করুন{" "}
                  <span>*</span>
                </label>

                <div className="details-input-wrap">
                  <LockKeyhole size={20} />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="আবার পাসওয়ার্ড লিখুন"
                    minLength={6}
                    required
                  />

                  <button
                    type="button"
                    className="details-password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current
                      )
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Birth Date */}
              <div className="details-field">
                <label htmlFor="birthDate">
                  জন্ম তারিখ <span>*</span>
                </label>

                <div className="details-input-wrap">
                  <CalendarDays size={20} />

                  <input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    required
                  />
                </div>
              </div>

              {/* Language */}
              <div className="details-field">
                <label htmlFor="language">
                  পছন্দের ভাষা <span>*</span>
                </label>

                <div className="details-input-wrap">
                  <Globe2 size={20} />

                  <select
                    id="language"
                    name="language"
                    defaultValue="bangla"
                    required
                  >
                    <option value="bangla">
                      বাংলা
                    </option>

                    <option value="english">
                      English
                    </option>
                  </select>
                </div>
              </div>

              {/* Gender */}
              <div className="details-field details-gender-field">
                <label>
                  লিঙ্গ <span>*</span>
                </label>

                <div className="details-gender-options">
                  <label className="details-radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={(event) =>
                        setGender(event.target.value)
                      }
                    />

                    <span className="details-custom-radio" />
                    পুরুষ
                  </label>

                  <label className="details-radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={(event) =>
                        setGender(event.target.value)
                      }
                    />

                    <span className="details-custom-radio" />
                    মহিলা
                  </label>

                  <label className="details-radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={gender === "other"}
                      onChange={(event) =>
                        setGender(event.target.value)
                      }
                    />

                    <span className="details-custom-radio" />
                    অন্যান্য
                  </label>
                </div>
              </div>

              {/* Next Button */}
              <div className="details-next-wrap">
                <button
                  type="submit"
                  className="details-next-button"
                >
                  পরবর্তী ধাপ
                  <ArrowRight size={21} />
                </button>
              </div>
            </form>
          </section>
        </section>

        {/* =====================================================
            COMPACT FOOTER
            ===================================================== */}
        <footer className="details-footer">
          <div className="details-footer-inner">
            {/* Brand */}
            <div className="details-footer-brand">
              <Image
                src="/images/logo/aglogo.png"
                alt="Agro Helper"
                width={170}
                height={55}
                className="details-footer-logo"
              />

              <span>
                কৃষকের পাশে, সবসময়
              </span>
            </div>

            {/* Quick Links */}
            <div className="details-footer-links">
              <strong>
                দ্রুত লিংক
              </strong>

              <Link href="/">
                হোম
              </Link>

              <Link href="/#services">
                আমাদের সেবা
              </Link>

              <Link href="/#crops">
                ফসলের তালিকা
              </Link>

              <Link href="/#how-it-works">
                কিভাবে কাজ করে
              </Link>
            </div>

            {/* Support */}
            <div className="details-footer-links">
              <strong>
                সহায়তা
              </strong>

              <a href="#">
                সাধারণ প্রশ্ন
              </a>

              <a href="#">
                গোপনীয়তা নীতি
              </a>

              <a href="#">
                যোগাযোগ
              </a>

              <div className="details-social-icons">
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

            {/* Newsletter */}
            <div className="details-footer-subscribe">
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
        /* =====================================================
           PAGE ROOT
           ===================================================== */

        .details-page {
          width: 100%;
          min-height: 100vh;

          overflow-x: hidden;

          background: #eefaf4;
          color: #16291f;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .details-page *,
        .details-page *::before,
        .details-page *::after {
          box-sizing: border-box;
        }

        .details-page button,
        .details-page input,
        .details-page select {
          font: inherit;
        }

        .details-page button {
          cursor: pointer;
        }

        /* =====================================================
           NAVBAR
           ===================================================== */

        .details-topbar {
          width: 100%;

          padding: 15px 26px 0;

          position: relative;
          z-index: 100;

          background:
            linear-gradient(
              90deg,
              #f4fff8,
              #edfff9
            );
        }

        .details-topbar-inner {
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
            0 8px 28px
            rgba(23, 92, 48, 0.08);
        }

        .details-logo-link {
          flex-shrink: 0;

          display: flex;
          align-items: center;

          text-decoration: none;
        }

        .details-top-logo {
          width: 190px;
          height: auto;

          object-fit: contain;
        }

        .details-top-nav {
          flex: 1;
          min-width: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 2px;
        }

        .details-top-link {
          padding: 9px 7px;

          display: flex;
          align-items: center;

          gap: 5px;

          border-radius: 9px;

          color: #29382f;

          text-decoration: none;

          white-space: nowrap;

          font-size: 13px;
          line-height: 1.2;
          font-weight: 700;
        }

        .details-top-link:hover,
        .details-top-active {
          background: #eef9f1;

          color: #078b3b;
        }

        .details-top-actions {
          flex-shrink: 0;

          margin-left: auto;

          display: flex;
          align-items: center;

          gap: 8px;
        }

        .details-top-actions button,
        .details-register-btn {
          min-height: 42px;

          padding: 0 15px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 6px;

          border-radius: 9px;

          white-space: nowrap;

          font-size: 13px;
          font-weight: 800;

          text-decoration: none;
        }

        .details-language-btn {
          border: 0;

          background: #f3f5f4;
          color: #27372e;
        }

        .details-login-btn {
          border: 1px solid #078b3b;

          background: #ffffff;
          color: #078b3b;
        }

        .details-register-btn {
          border: 1px solid #078b3b;

          background: #078b3b;
          color: #ffffff;
        }

        /* =====================================================
           MAIN AREA
           ===================================================== */

        .details-main {
          width: 100%;

          min-height: 845px;

          display: grid;

          grid-template-columns:
            minmax(430px, 37%)
            minmax(700px, 63%);

          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(92, 207, 224, 0.22),
              transparent 25%
            ),
            radial-gradient(
              circle at 92% 16%,
              rgba(94, 217, 137, 0.17),
              transparent 25%
            ),
            #effaf5;
        }

        /* =====================================================
           LEFT AREA
           ===================================================== */

        .details-left {
          min-height: 845px;

          position: relative;

          overflow: hidden;

          padding: 48px 50px;

          background:
            linear-gradient(
              180deg,
              rgba(245, 255, 253, 0.7),
              rgba(236, 249, 225, 0.45)
            );
        }

        .details-back {
          position: relative;
          z-index: 40;

          display: inline-flex;
          align-items: center;

          gap: 8px;

          color: #2a3f34;

          text-decoration: none;

          font-size: 14px;
          font-weight: 700;
        }

        .details-left-copy {
          max-width: 490px;

          position: relative;
          z-index: 40;

          margin-top: 33px;
        }

        .details-left-copy h1 {
          margin: 0;

          color: #10281c;

          font-size: 40px;
          line-height: 1.2;
          font-weight: 900;
        }

        .details-left-copy p {
          max-width: 470px;

          margin: 14px 0 0;

          color: #354b3e;

          font-size: 18px;
          line-height: 1.55;
        }

        .details-leaf-one,
        .details-leaf-two {
          position: absolute;

          z-index: 10;

          color: #82bf37;

          opacity: 0.9;
        }

        .details-leaf-one {
          right: 4px;
          top: 118px;

          transform: rotate(-30deg);
        }

        .details-leaf-two {
          right: 10px;
          top: 245px;

          transform: rotate(20deg);
        }

        /* Farmer Image */

        .details-farmer-image-wrap {
          width: 100%;
          height: 70%;

          position: absolute;

          left: 0;
          bottom: 0;

          overflow: hidden;
        }

        .details-farmer-image-wrap::before {
          content: "";

          position: absolute;
          inset: 0;

          z-index: 2;

          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.82) 0%,
              rgba(255, 255, 255, 0.1) 30%,
              rgba(255, 255, 255, 0) 55%
            );
        }

        .details-farmer-image {
          object-fit: cover;

          object-position: center 42%;
        }

        /* =====================================================
           BENEFIT CARDS
           ===================================================== */

        .details-benefit-stack {
          width: 315px;

          position: absolute;

          left: 32px;
          bottom: 66px;

          z-index: 30;

          display: flex;
          flex-direction: column;

          gap: 16px;
        }

        .details-benefit-card {
          min-height: 91px;

          padding: 14px;

          display: flex;
          align-items: center;

          gap: 13px;

          border-radius: 19px;

          background:
            rgba(255, 255, 255, 0.96);

          box-shadow:
            0 7px 22px
            rgba(19, 72, 37, 0.12);
        }

        .details-benefit-icon {
          width: 57px;
          height: 57px;

          flex-shrink: 0;

          display: grid;
          place-items: center;

          border-radius: 16px;
        }

        .details-benefit-green {
          background: #def7e8;
          color: #0a9241;
        }

        .details-benefit-blue {
          background: #def2ff;
          color: #1686e3;
        }

        .details-benefit-orange {
          background: #fff0dd;
          color: #f08a13;
        }

        .details-benefit-red {
          background: #ffe4e3;
          color: #ef3d3d;
        }

        .details-benefit-card strong,
        .details-benefit-card span {
          display: block;
        }

        .details-benefit-card strong {
          color: #183026;

          font-size: 15px;
          font-weight: 900;
        }

        .details-benefit-card span {
          margin-top: 5px;

          color: #58695f;

          font-size: 11px;
        }

        /* =====================================================
           FORM CARD
           ===================================================== */

        .details-form-card {
          min-height: 845px;

          margin: 30px 26px 30px 0;

          padding: 31px 42px 29px;

          border-radius: 19px;

          background:
            rgba(255, 255, 255, 0.97);

          box-shadow:
            0 17px 40px
            rgba(27, 88, 45, 0.08);
        }

        .details-form-heading h2 {
          margin: 0;

          color: #123025;

          font-size: 36px;
          font-weight: 900;
        }

        .details-form-heading p {
          margin: 8px 0 0;

          color: #5e6e65;

          font-size: 15px;
        }

        /* =====================================================
           PROGRESS
           ===================================================== */

        .details-progress {
          width: 94%;

          margin: 27px auto;

          display: flex;
          align-items: flex-start;
        }

        .details-progress-step {
          min-width: 112px;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 8px;
        }

        .details-step-circle {
          width: 36px;
          height: 36px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          background: #eef1ef;

          color: #526159;

          font-size: 15px;
          font-weight: 900;
        }

        .details-current-step
        .details-step-circle {
          background: #078b3b;

          color: #ffffff;
        }

        .details-progress-step span {
          color: #5c6962;

          font-size: 11px;
          font-weight: 600;

          white-space: nowrap;
        }

        .details-current-step span {
          color: #078b3b;

          font-weight: 900;
        }

        .details-progress-line {
          height: 2px;

          flex: 1;

          margin-top: 17px;

          background: #dce4df;
        }

        /* =====================================================
           PERSONAL HEADING
           ===================================================== */

        .details-section-heading {
          margin-bottom: 23px;

          display: flex;
          align-items: center;

          gap: 13px;
        }

        .details-section-icon {
          width: 56px;
          height: 56px;

          display: grid;
          place-items: center;

          border-radius: 17px;

          background: #dff8f6;

          color: #078d41;
        }

        .details-section-heading h3 {
          margin: 0;

          color: #183127;

          font-size: 22px;
          font-weight: 900;
        }

        .details-section-heading p {
          margin: 4px 0 0;

          color: #697870;

          font-size: 12px;
        }

        /* =====================================================
           FORM
           ===================================================== */

        .details-form {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          column-gap: 29px;
          row-gap: 18px;
        }

        .details-field {
          min-width: 0;
        }

        .details-field > label {
          display: block;

          margin-bottom: 7px;

          color: #22372c;

          font-size: 13px;
          font-weight: 800;
        }

        .details-field > label span {
          color: #df3333;
        }

        .details-input-wrap {
          min-height: 53px;

          padding: 0 14px;

          display: flex;
          align-items: center;

          gap: 11px;

          border: 1px solid #d4ddd8;
          border-radius: 10px;

          background: #ffffff;
        }

        .details-input-wrap:focus-within {
          border-color: #0d9a43;

          box-shadow:
            0 0 0 3px
            rgba(7, 139, 59, 0.08);
        }

        .details-input-wrap > svg {
          flex-shrink: 0;

          color: #344a5c;
        }

        .details-input-wrap input,
        .details-input-wrap select {
          width: 100%;
          min-width: 0;

          height: 50px;

          flex: 1;

          border: 0;

          outline: 0;

          background: transparent;

          color: #263a30;

          font-size: 13px;
        }

        .details-input-wrap input::placeholder {
          color: #929e98;
        }

        .details-password-toggle {
          width: 34px;
          height: 34px;

          flex-shrink: 0;

          display: grid;
          place-items: center;

          padding: 0;

          border: 0;

          background: transparent;

          color: #344b5c;
        }

        /* Gender */

        .details-gender-field {
          grid-column: 1 / 2;
        }

        .details-gender-options {
          min-height: 48px;

          display: flex;
          align-items: center;

          gap: 38px;
        }

        .details-radio-label {
          margin: 0 !important;

          display: flex !important;
          align-items: center;

          gap: 8px;

          cursor: pointer;

          font-size: 13px !important;
          font-weight: 600 !important;
        }

        .details-radio-label input {
          display: none;
        }

        .details-custom-radio {
          width: 23px;
          height: 23px;

          position: relative;

          flex-shrink: 0;

          display: inline-block;

          border: 1.5px solid #aebbb3;
          border-radius: 50%;

          background: #ffffff;
        }

        .details-radio-label
        input:checked
        + .details-custom-radio {
          border-color: #0a963f;

          background: #0a963f;
        }

        .details-radio-label
        input:checked
        + .details-custom-radio::after {
          content: "";

          width: 7px;
          height: 7px;

          position: absolute;

          top: 50%;
          left: 50%;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          background: #ffffff;
        }

        /* Next Button */

        .details-next-wrap {
          grid-column: 2 / 3;

          display: flex;
          align-items: flex-end;
        }

        .details-next-button {
          width: 100%;
          min-height: 54px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 11px;

          border: 0;
          border-radius: 9px;

          background: #078b3b;

          color: #ffffff;

          font-size: 16px;
          font-weight: 900;
        }

        .details-next-button:hover {
          background: #067b34;
        }

        /* =====================================================
           COMPACT FOOTER
           ===================================================== */

        .details-footer {
          width: 100%;

          border-top: 1px solid #e2ebe5;

          background: #ffffff;
        }

        .details-footer-inner {
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

          align-items: start;
        }

        .details-footer-brand {
          display: flex;
          flex-direction: column;

          gap: 6px;
        }

        .details-footer-logo {
          width: 170px;
          height: auto;

          object-fit: contain;
        }

        .details-footer-brand span {
          color: #59675f;

          font-size: 13px;
        }

        .details-footer-links {
          display: flex;
          flex-direction: column;

          gap: 6px;
        }

        .details-footer-links strong,
        .details-footer-subscribe strong {
          margin-bottom: 4px;

          color: #172c21;

          font-size: 15px;
          font-weight: 900;
        }

        .details-footer-links a {
          color: #56645c;

          text-decoration: none;

          font-size: 13px;
        }

        .details-footer-links a:hover {
          color: #078b3b;
        }

        .details-social-icons {
          margin-top: 8px;

          display: flex;

          gap: 9px;
        }

        .details-social-icons a {
          width: 32px;
          height: 32px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          color: #ffffff;

          text-decoration: none;

          font-size: 13px;
        }

        .details-social-icons a:nth-child(1) {
          background: #1877f2;
        }

        .details-social-icons a:nth-child(2) {
          background: #ff0000;
        }

        .details-social-icons a:nth-child(3) {
          background: #0a66c2;
        }

        .details-footer-subscribe > strong {
          display: block;

          line-height: 1.4;
        }

        .details-footer-subscribe > div {
          margin-top: 9px;

          display: flex;

          gap: 8px;
        }

        .details-footer-subscribe input {
          min-width: 0;
          min-height: 40px;

          flex: 1;

          padding: 0 12px;

          border: 1px solid #dce5df;
          border-radius: 7px;

          outline: none;

          font-size: 12px;
        }

        .details-footer-subscribe input:focus {
          border-color: #078b3b;
        }

        .details-footer-subscribe button {
          min-height: 40px;

          padding: 0 15px;

          border: 0;
          border-radius: 7px;

          background: #078b3b;

          color: #ffffff;

          font-size: 12px;
          font-weight: 800;
        }

        /* =====================================================
           SMALL LAPTOP
           ===================================================== */

        @media (max-width: 1400px) {
          .details-top-logo {
            width: 160px;
          }

          .details-top-link {
            padding-left: 5px;
            padding-right: 5px;

            gap: 4px;

            font-size: 11px;
          }

          .details-top-link svg {
            width: 14px;
            height: 14px;
          }

          .details-top-actions button,
          .details-register-btn {
            min-height: 39px;

            padding-left: 10px;
            padding-right: 10px;

            font-size: 11px;
          }

          .details-main {
            grid-template-columns:
              minmax(390px, 39%)
              minmax(650px, 61%);
          }

          .details-left {
            padding-left: 38px;
            padding-right: 38px;
          }

          .details-left-copy h1 {
            font-size: 34px;
          }

          .details-left-copy p {
            font-size: 16px;
          }

          .details-form-card {
            padding-left: 32px;
            padding-right: 32px;
          }

          .details-progress-step {
            min-width: 95px;
          }
        }

        /* =====================================================
           TABLET
           ===================================================== */

        @media (max-width: 1100px) {
          .details-top-nav {
            display: none;
          }

          .details-main {
            grid-template-columns: 1fr;
          }

          .details-left {
            min-height: 720px;
          }

          .details-form-card {
            margin: 18px;
          }

          .details-footer-inner {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .details-footer-subscribe {
            grid-column: span 2;
          }
        }

        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width: 720px) {
          .details-topbar {
            padding:
              8px
              8px
              0;
          }

          .details-topbar-inner {
            padding: 0 10px;

            min-height: 62px;
          }

          .details-top-logo {
            width: 135px;
          }

          .details-language-btn {
            display: none !important;
          }

          .details-login-btn,
          .details-register-btn {
            min-height: 36px !important;

            padding-left: 8px !important;
            padding-right: 8px !important;

            font-size: 10px !important;
          }

          .details-left {
            min-height: 720px;

            padding:
              30px
              20px;
          }

          .details-left-copy h1 {
            font-size: 29px;
          }

          .details-left-copy p {
            font-size: 15px;
          }

          .details-benefit-stack {
            width:
              calc(100% - 40px);

            left: 20px;
            bottom: 28px;
          }

          .details-benefit-card {
            min-height: 76px;
          }

          .details-form-card {
            margin: 12px;

            padding:
              24px
              18px;
          }

          .details-form-heading h2 {
            font-size: 29px;
          }

          .details-progress {
            width: 100%;
          }

          .details-progress-step {
            min-width: 60px;
          }

          .details-progress-step span {
            font-size: 8px;
          }

          .details-form {
            grid-template-columns: 1fr;
          }

          .details-gender-field,
          .details-next-wrap {
            grid-column: 1;
          }

          .details-gender-options {
            gap: 20px;

            flex-wrap: wrap;
          }

          .details-footer-inner {
            width:
              calc(100% - 24px);

            grid-template-columns: 1fr;

            gap: 22px;
          }

          .details-footer-subscribe {
            grid-column: auto;
          }

          .details-footer-subscribe > div {
            flex-direction: column;
          }

          .details-footer-subscribe button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}