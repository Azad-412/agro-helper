"use client";

/**
 * ============================================================
 * AGRO HELPER
 * Farmer Registration - Address Information
 * Route: /farmer/register/address
 * ============================================================
 *
 * Registration Flow:
 * Step 1 -> Personal Information
 * Step 2 -> Address Information
 * Step 3 -> Farming Information
 * Step 4 -> Confirmation
 *
 * All CSS classes use the "address-" prefix so this page
 * will not affect Home, Registration Type or Personal Info pages.
 */

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CircleHelp,
  FileText,
  Globe2,
  Home,
  House,
  LayoutGrid,
  Leaf,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function FarmerAddressPage() {
  const router = useRouter();

  // Address form dropdown states.
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [union, setUnion] = useState("");

  // Return to Personal Information page.
  const handlePrevious = () => {
    router.push("/farmer/register/details");
  };

  // Continue to Farming Information page.
  const handleNext = () => {
    router.push("/farmer/register/farming");
  };

  return (
    <>
      <main className="address-page">
        {/* =====================================================
            NAVBAR
        ===================================================== */}
        <header className="address-topbar">
          <div className="address-topbar-inner">
            {/* Logo */}
            <Link href="/" className="address-logo-link">
              <Image
                src="/images/logo/aglogo.png"
                alt="Agro Helper"
                width={175}
                height={58}
                priority
                className="address-top-logo"
              />
            </Link>

            {/* Main Navigation */}
            <nav className="address-top-nav">
              <Link
                href="/"
                className="address-top-link address-top-active"
              >
                <Home size={16} />
                হোম
              </Link>

              <Link
                href="/#services"
                className="address-top-link"
              >
                <LayoutGrid size={16} />
                আমাদের সেবা
              </Link>

              <Link
                href="/#crops"
                className="address-top-link"
              >
                <Leaf size={16} />
                ফসলের তালিকা
              </Link>

              <Link
                href="/#experts"
                className="address-top-link"
              >
                <Users size={16} />
                বিশেষজ্ঞদের তালিকা
              </Link>

              <Link
                href="/#how-it-works"
                className="address-top-link"
              >
                <BookOpen size={16} />
                কিভাবে কাজ করে
              </Link>

              <Link
                href="/#contact"
                className="address-top-link"
              >
                <Phone size={16} />
                যোগাযোগ
              </Link>

              <Link
                href="/#about"
                className="address-top-link"
              >
                <CircleHelp size={16} />
                সম্পর্কে
              </Link>
            </nav>

            {/* Right Navbar Actions */}
            <div className="address-top-actions">
              <button
                type="button"
                className="address-language-btn"
              >
                <Globe2 size={16} />
                বাংলা
              </button>

              <button
                type="button"
                className="address-login-btn"
              >
                লগইন
              </button>

              <Link
                href="/farmer/register"
                className="address-register-btn"
              >
                নিবন্ধন
              </Link>
            </div>
          </div>
        </header>

        {/* =====================================================
            MAIN REGISTRATION AREA
        ===================================================== */}
        <section className="address-main">
          {/* ===================================================
              LEFT FARMER AREA
          =================================================== */}
          <aside className="address-left">
            {/* Back Button */}
            <Link
              href="/farmer/register/details"
              className="address-back"
            >
              <ArrowLeft size={19} />
              ফিরে যান
            </Link>

            {/* Main Left Heading */}
            <div className="address-left-copy">
              <h1>
                কৃষক হিসেবে নিবন্ধন করুন
              </h1>

              <p>
                Agro Helper-এ যোগ দিয়ে আধুনিক কৃষি
                প্রযুক্তির মাধ্যমে আপনার ফসলের ফলন
                বাড়ান এবং বিশেষজ্ঞদের সহায়তা পান।
              </p>
            </div>

            {/* Decorative Green Quote */}
            <div className="address-quote">
              <span>কৃষকের</span>
              <span>সমস্যা,</span>
              <span>আমাদের</span>
              <span>সমাধান</span>
            </div>

            {/* Farmer Background Image */}
            <div className="address-farmer-image-wrap">
              <Image
                src="/images/hero/farmer.jpg"
                alt="Bangladeshi Farmer"
                fill
                priority
                sizes="42vw"
                className="address-farmer-image"
              />
            </div>

            {/* Farmer Service Cards */}
            <div className="address-benefit-stack">
              <article className="address-benefit-card">
                <div className="address-benefit-icon address-benefit-green">
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

              <article className="address-benefit-card">
                <div className="address-benefit-icon address-benefit-blue">
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

              <article className="address-benefit-card">
                <div className="address-benefit-icon address-benefit-orange">
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

              <article className="address-benefit-card">
                <div className="address-benefit-icon address-benefit-red">
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
              RIGHT ADDRESS FORM
          =================================================== */}
          <section className="address-form-card">
            {/* Main Form Heading */}
            <div className="address-form-heading">
              <h2>
                কৃষক নিবন্ধন
              </h2>

              <p>
                আপনার ঠিকানা ও জমির তথ্য দিন
              </p>
            </div>

            {/* =================================================
                REGISTRATION PROGRESS
            ================================================= */}
            <div className="address-progress">
              {/* Step 1 Completed */}
              <div className="address-progress-step address-completed-step">
                <div className="address-step-circle">
                  ✓
                </div>

                <span>
                  ব্যক্তিগত তথ্য
                </span>
              </div>

              <div className="address-progress-line address-completed-line" />

              {/* Step 2 Current */}
              <div className="address-progress-step address-current-step">
                <div className="address-step-circle">
                  2
                </div>

                <span>
                  ঠিকানা তথ্য
                </span>
              </div>

              <div className="address-progress-line" />

              {/* Step 3 */}
              <div className="address-progress-step">
                <div className="address-step-circle">
                  3
                </div>

                <span>
                  কৃষি সম্পর্কিত তথ্য
                </span>
              </div>

              <div className="address-progress-line" />

              {/* Step 4 */}
              <div className="address-progress-step">
                <div className="address-step-circle">
                  4
                </div>

                <span>
                  নিশ্চিতকরণ
                </span>
              </div>
            </div>

            {/* =================================================
                ADDRESS INFORMATION HEADER
            ================================================= */}
            <div className="address-section-heading">
              <div className="address-section-icon">
                <MapPin size={28} />
              </div>

              <div>
                <h3>
                  ঠিকানা তথ্য
                </h3>

                <p>
                  আপনার বর্তমান ঠিকানা ও অবস্থান নির্বাচন করুন
                </p>
              </div>
            </div>

            {/* =================================================
                ADDRESS FORM
            ================================================= */}
            <form
              className="address-form"
              onSubmit={(event) => {
                event.preventDefault();
                handleNext();
              }}
            >
              {/* Division */}
              <div className="address-field">
                <label htmlFor="division">
                  বিভাগ <span>*</span>
                </label>

                <div className="address-input-wrap">
                  <Map size={20} />

                  <select
                    id="division"
                    name="division"
                    value={division}
                    onChange={(event) =>
                      setDivision(event.target.value)
                    }
                    required
                  >
                    <option value="" disabled>
                      বিভাগ নির্বাচন করুন
                    </option>

                    <option value="dhaka">
                      ঢাকা
                    </option>

                    <option value="chattogram">
                      চট্টগ্রাম
                    </option>

                    <option value="rajshahi">
                      রাজশাহী
                    </option>

                    <option value="khulna">
                      খুলনা
                    </option>

                    <option value="barishal">
                      বরিশাল
                    </option>

                    <option value="sylhet">
                      সিলেট
                    </option>

                    <option value="rangpur">
                      রংপুর
                    </option>

                    <option value="mymensingh">
                      ময়মনসিংহ
                    </option>
                  </select>
                </div>
              </div>

              {/* District */}
              <div className="address-field">
                <label htmlFor="district">
                  জেলা <span>*</span>
                </label>

                <div className="address-input-wrap">
                  <Map size={20} />

                  <select
                    id="district"
                    name="district"
                    value={district}
                    onChange={(event) =>
                      setDistrict(event.target.value)
                    }
                    required
                  >
                    <option value="" disabled>
                      জেলা নির্বাচন করুন
                    </option>

                    <option value="dhaka">
                      ঢাকা
                    </option>

                    <option value="narayanganj">
                      নারায়ণগঞ্জ
                    </option>

                    <option value="gazipur">
                      গাজীপুর
                    </option>

                    <option value="manikganj">
                      মানিকগঞ্জ
                    </option>

                    <option value="munshiganj">
                      মুন্সিগঞ্জ
                    </option>

                    <option value="narsingdi">
                      নরসিংদী
                    </option>
                  </select>
                </div>
              </div>

              {/* Upazila */}
              <div className="address-field">
                <label htmlFor="upazila">
                  উপজেলা <span>*</span>
                </label>

                <div className="address-input-wrap">
                  <Map size={20} />

                  <select
                    id="upazila"
                    name="upazila"
                    value={upazila}
                    onChange={(event) =>
                      setUpazila(event.target.value)
                    }
                    required
                  >
                    <option value="" disabled>
                      উপজেলা নির্বাচন করুন
                    </option>

                    <option value="sadar">
                      সদর
                    </option>

                    <option value="rupganj">
                      রূপগঞ্জ
                    </option>

                    <option value="sonargaon">
                      সোনারগাঁও
                    </option>

                    <option value="araihazar">
                      আড়াইহাজার
                    </option>

                    <option value="bandar">
                      বন্দর
                    </option>
                  </select>
                </div>
              </div>

              {/* Union */}
              <div className="address-field">
                <label htmlFor="union">
                  ইউনিয়ন/পৌরসভা <span>*</span>
                </label>

                <div className="address-input-wrap">
                  <Map size={20} />

                  <select
                    id="union"
                    name="union"
                    value={union}
                    onChange={(event) =>
                      setUnion(event.target.value)
                    }
                    required
                  >
                    <option value="" disabled>
                      ইউনিয়ন/পৌরসভা নির্বাচন করুন
                    </option>

                    <option value="union-1">
                      ইউনিয়ন ১
                    </option>

                    <option value="union-2">
                      ইউনিয়ন ২
                    </option>

                    <option value="municipality">
                      পৌরসভা
                    </option>
                  </select>
                </div>
              </div>

              {/* Village */}
              <div className="address-field">
                <label htmlFor="village">
                  গ্রামের নাম <span>*</span>
                </label>

                <div className="address-input-wrap">
                  <House size={20} />

                  <input
                    id="village"
                    name="village"
                    type="text"
                    placeholder="আপনার গ্রামের নাম লিখুন"
                    required
                  />
                </div>
              </div>

              {/* Postal Code */}
              <div className="address-field">
                <label htmlFor="postalCode">
                  পোস্ট কোড
                </label>

                <div className="address-input-wrap">
                  <Mail size={20} />

                  <input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    placeholder="আপনার পোস্ট কোড লিখুন (যদি থাকে)"
                  />
                </div>
              </div>

              {/* Detailed Address */}
              <div className="address-field">
                <label htmlFor="detailedAddress">
                  বিস্তারিত ঠিকানা
                </label>

                <div className="address-input-wrap">
                  <FileText size={20} />

                  <input
                    id="detailedAddress"
                    name="detailedAddress"
                    type="text"
                    placeholder="গ্রাম, পোস্ট অফিস, ইউনিয়ন ইত্যাদি লিখুন"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="address-field">
                <label>
                  বর্তমান অবস্থান (ঐচ্ছিক)
                </label>

                <button
                  type="button"
                  className="address-location-button"
                  onClick={() => {
                    alert(
                      "বর্তমান অবস্থান ফিচারটি পরে Browser Geolocation-এর সাথে যুক্ত করা হবে।"
                    );
                  }}
                >
                  <MapPin size={21} />

                  বর্তমান অবস্থান ব্যবহার করুন
                </button>
              </div>

              {/* Bottom Navigation */}
              <div className="address-bottom-actions">
                <button
                  type="button"
                  className="address-previous-button"
                  onClick={handlePrevious}
                >
                  <ArrowLeft size={20} />
                  পূর্ববর্তী ধাপ
                </button>

                <button
                  type="submit"
                  className="address-next-button"
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
        <footer className="address-footer">
          <div className="address-footer-inner">
            {/* Brand */}
            <div className="address-footer-brand">
              <Image
                src="/images/logo/aglogo.png"
                alt="Agro Helper"
                width={170}
                height={55}
                className="address-footer-logo"
              />

              <span>
                কৃষকের পাশে, সবসময়
              </span>
            </div>

            {/* Quick Links */}
            <div className="address-footer-links">
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
            <div className="address-footer-links">
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

              <div className="address-social-icons">
                <a
                  href="#"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="address-footer-subscribe">
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

        .address-page {
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

        .address-page *,
        .address-page *::before,
        .address-page *::after {
          box-sizing: border-box;
        }

        .address-page button,
        .address-page input,
        .address-page select {
          font: inherit;
        }

        .address-page button {
          cursor: pointer;
        }

        /* =====================================================
           NAVBAR
        ===================================================== */

        .address-topbar {
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

        .address-topbar-inner {
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

        .address-logo-link {
          flex-shrink: 0;

          display: flex;
          align-items: center;

          text-decoration: none;
        }

        .address-top-logo {
          width: 190px;
          height: auto;

          object-fit: contain;
        }

        .address-top-nav {
          flex: 1;
          min-width: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 2px;
        }

        .address-top-link {
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

        .address-top-link:hover,
        .address-top-active {
          background: #eef9f1;

          color: #078b3b;
        }

        .address-top-actions {
          flex-shrink: 0;

          margin-left: auto;

          display: flex;
          align-items: center;

          gap: 8px;
        }

        .address-top-actions button,
        .address-register-btn {
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

        .address-language-btn {
          border: 0;

          background: #f3f5f4;

          color: #27372e;
        }

        .address-login-btn {
          border: 1px solid #078b3b;

          background: #ffffff;

          color: #078b3b;
        }

        .address-register-btn {
          border: 1px solid #078b3b;

          background: #078b3b;

          color: #ffffff;
        }

        /* =====================================================
           MAIN AREA
        ===================================================== */

        .address-main {
          width: 100%;

          min-height: 850px;

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
           LEFT SIDE
        ===================================================== */

        .address-left {
          min-height: 850px;

          position: relative;

          overflow: hidden;

          padding: 48px 50px;

          background:
            linear-gradient(
              180deg,
              rgba(245, 255, 253, 0.78),
              rgba(236, 249, 225, 0.42)
            );
        }

        .address-back {
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

        .address-left-copy {
          width: 100%;
          max-width: 430px;

          position: relative;
          z-index: 40;

          margin-top: 33px;
        }

        .address-left-copy h1 {
          margin: 0;

          color: #10281c;

          font-size: 40px;
          line-height: 1.2;
          font-weight: 900;
        }

        /*
         * Paragraph width is intentionally reduced.
         * This keeps the decorative quote away from the paragraph.
         */
        .address-left-copy p {
          max-width: 370px;

          margin: 14px 0 0;

          color: #354b3e;

          font-size: 18px;
          line-height: 1.55;
          font-weight: 500;
        }

        /* =====================================================
           DECORATIVE QUOTE
        ===================================================== */

        .address-quote {
          width: 142px;

          position: absolute;

          right: 20px;
          top: 255px;

          z-index: 36;

          display: flex;
          flex-direction: column;
          align-items: center;

          color: #078b3b;

          font-size: 22px;
          line-height: 1.05;
          font-weight: 900;

          text-align: center;

          transform: rotate(-6deg);

          pointer-events: none;
        }

        .address-quote span {
          display: block;
        }

        /* Decorative underline */
        .address-quote::after {
          content: "";

          width: 70px;
          height: 9px;

          margin-top: 8px;

          border-top: 3px solid #078b3b;
          border-bottom: 3px solid #078b3b;

          border-radius: 50%;

          transform: rotate(-4deg);
        }

        /* =====================================================
           FARMER IMAGE
        ===================================================== */

        .address-farmer-image-wrap {
          width: 100%;
          height: 69%;

          position: absolute;

          left: 0;
          bottom: 0;

          overflow: hidden;
        }

        .address-farmer-image-wrap::before {
          content: "";

          position: absolute;
          inset: 0;

          z-index: 2;

          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.85) 0%,
              rgba(255, 255, 255, 0.3) 15%,
              rgba(255, 255, 255, 0.05) 37%,
              rgba(255, 255, 255, 0) 55%
            );

          pointer-events: none;
        }

        .address-farmer-image {
          object-fit: cover;

          object-position: center 42%;
        }

        /* =====================================================
           BENEFIT CARDS
        ===================================================== */

        .address-benefit-stack {
          width: 315px;

          position: absolute;

          left: 32px;
          bottom: 60px;

          z-index: 30;

          display: flex;
          flex-direction: column;

          gap: 15px;
        }

        .address-benefit-card {
          min-height: 88px;

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

        .address-benefit-icon {
          width: 57px;
          height: 57px;

          flex-shrink: 0;

          display: grid;
          place-items: center;

          border-radius: 16px;
        }

        .address-benefit-green {
          background: #def7e8;
          color: #0a9241;
        }

        .address-benefit-blue {
          background: #def2ff;
          color: #1686e3;
        }

        .address-benefit-orange {
          background: #fff0dd;
          color: #f08a13;
        }

        .address-benefit-red {
          background: #ffe4e3;
          color: #ef3d3d;
        }

        .address-benefit-card strong,
        .address-benefit-card span {
          display: block;
        }

        .address-benefit-card strong {
          color: #183026;

          font-size: 15px;
          font-weight: 900;
        }

        .address-benefit-card span {
          margin-top: 5px;

          color: #58695f;

          font-size: 11px;
          line-height: 1.4;
        }

        /* =====================================================
           RIGHT FORM CARD
        ===================================================== */

        .address-form-card {
          min-height: 850px;

          margin: 30px 26px 30px 0;

          padding: 31px 42px 29px;

          border-radius: 19px;

          background:
            rgba(255, 255, 255, 0.97);

          box-shadow:
            0 17px 40px
            rgba(27, 88, 45, 0.08);
        }

        .address-form-heading h2 {
          margin: 0;

          color: #123025;

          font-size: 36px;
          line-height: 1.15;
          font-weight: 900;
        }

        .address-form-heading p {
          margin: 8px 0 0;

          color: #5e6e65;

          font-size: 15px;
        }

        /* =====================================================
           PROGRESS BAR
        ===================================================== */

        .address-progress {
          width: 94%;

          margin: 27px auto;

          display: flex;
          align-items: flex-start;
        }

        .address-progress-step {
          min-width: 112px;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 8px;
        }

        .address-step-circle {
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

        .address-completed-step
        .address-step-circle,
        .address-current-step
        .address-step-circle {
          background: #078b3b;

          color: #ffffff;
        }

        .address-progress-step span {
          color: #5c6962;

          font-size: 11px;
          font-weight: 600;

          white-space: nowrap;
        }

        .address-completed-step span,
        .address-current-step span {
          color: #078b3b;

          font-weight: 900;
        }

        .address-progress-line {
          height: 2px;

          flex: 1;

          margin-top: 17px;

          background: #dce4df;
        }

        .address-completed-line {
          background: #a8dabb;
        }

        /* =====================================================
           SECTION HEADER
        ===================================================== */

        .address-section-heading {
          margin-bottom: 23px;

          padding: 10px 12px;

          display: flex;
          align-items: center;

          gap: 13px;

          border-radius: 12px;

          background:
            linear-gradient(
              90deg,
              #edfdf8,
              #f8fcfa
            );
        }

        .address-section-icon {
          width: 56px;
          height: 56px;

          display: grid;
          place-items: center;

          border-radius: 17px;

          background: #dff8f1;

          color: #078d41;
        }

        .address-section-heading h3 {
          margin: 0;

          color: #183127;

          font-size: 22px;
          font-weight: 900;
        }

        .address-section-heading p {
          margin: 4px 0 0;

          color: #697870;

          font-size: 12px;
        }

        /* =====================================================
           FORM
        ===================================================== */

        .address-form {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          column-gap: 29px;
          row-gap: 18px;
        }

        .address-field {
          min-width: 0;
        }

        .address-field > label {
          display: block;

          margin-bottom: 7px;

          color: #22372c;

          font-size: 13px;
          font-weight: 800;
        }

        .address-field > label span {
          color: #df3333;
        }

        .address-input-wrap {
          min-height: 53px;

          padding: 0 14px;

          display: flex;
          align-items: center;

          gap: 11px;

          border: 1px solid #d4ddd8;
          border-radius: 10px;

          background: #ffffff;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .address-input-wrap:focus-within {
          border-color: #0d9a43;

          box-shadow:
            0 0 0 3px
            rgba(7, 139, 59, 0.08);
        }

        .address-input-wrap > svg {
          flex-shrink: 0;

          color: #344a5c;
        }

        .address-input-wrap input,
        .address-input-wrap select {
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

        .address-input-wrap input::placeholder {
          color: #929e98;
        }

        .address-input-wrap select {
          cursor: pointer;
        }

        /* =====================================================
           LOCATION BUTTON
        ===================================================== */

        .address-location-button {
          width: 100%;
          min-height: 53px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          border: 1px solid #b9e2cb;
          border-radius: 10px;

          background: #f2fbf6;

          color: #078b3b;

          font-size: 13px;
          font-weight: 800;
        }

        .address-location-button:hover {
          background: #e8f8ef;
        }

        /* =====================================================
           BOTTOM BUTTONS
        ===================================================== */

        .address-bottom-actions {
          grid-column: 1 / -1;

          margin-top: 21px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;
        }

        .address-previous-button,
        .address-next-button {
          min-height: 56px;

          padding: 0 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          border-radius: 9px;

          font-size: 16px;
          font-weight: 900;
        }

        .address-previous-button {
          min-width: 210px;

          border: 1px solid #cfd9d3;

          background: #ffffff;

          color: #33483c;
        }

        .address-previous-button:hover {
          background: #f5f8f6;
        }

        .address-next-button {
          min-width: 320px;

          border: 0;

          background: #078b3b;

          color: #ffffff;
        }

        .address-next-button:hover {
          background: #067b34;
        }

        /* =====================================================
           FOOTER
        ===================================================== */

        .address-footer {
          width: 100%;

          border-top: 1px solid #e2ebe5;

          background: #ffffff;
        }

        .address-footer-inner {
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

        .address-footer-brand {
          display: flex;
          flex-direction: column;

          gap: 6px;
        }

        .address-footer-logo {
          width: 170px;
          height: auto;

          object-fit: contain;
        }

        .address-footer-brand span {
          color: #59675f;

          font-size: 13px;
        }

        .address-footer-links {
          display: flex;
          flex-direction: column;

          gap: 6px;
        }

        .address-footer-links strong,
        .address-footer-subscribe strong {
          margin-bottom: 4px;

          color: #172c21;

          font-size: 15px;
          font-weight: 900;
        }

        .address-footer-links a {
          color: #56645c;

          text-decoration: none;

          font-size: 13px;
        }

        .address-footer-links a:hover {
          color: #078b3b;
        }

        .address-social-icons {
          margin-top: 8px;

          display: flex;

          gap: 9px;
        }

        .address-social-icons a {
          width: 32px;
          height: 32px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          color: #ffffff;

          text-decoration: none;

          font-size: 13px;
        }

        .address-social-icons a:nth-child(1) {
          background: #1877f2;
        }

        .address-social-icons a:nth-child(2) {
          background: #ff0000;
        }

        .address-social-icons a:nth-child(3) {
          background: #0a66c2;
        }

        .address-footer-subscribe > strong {
          display: block;

          line-height: 1.4;
        }

        .address-footer-subscribe > div {
          margin-top: 9px;

          display: flex;

          gap: 8px;
        }

        .address-footer-subscribe input {
          min-width: 0;
          min-height: 40px;

          flex: 1;

          padding: 0 12px;

          border: 1px solid #dce5df;
          border-radius: 7px;

          outline: none;

          font-size: 12px;
        }

        .address-footer-subscribe input:focus {
          border-color: #078b3b;
        }

        .address-footer-subscribe button {
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
          .address-top-logo {
            width: 160px;
          }

          .address-top-link {
            padding-left: 5px;
            padding-right: 5px;

            gap: 4px;

            font-size: 11px;
          }

          .address-top-link svg {
            width: 14px;
            height: 14px;
          }

          .address-top-actions button,
          .address-register-btn {
            min-height: 39px;

            padding-left: 10px;
            padding-right: 10px;

            font-size: 11px;
          }

          .address-main {
            grid-template-columns:
              minmax(390px, 39%)
              minmax(650px, 61%);
          }

          .address-left {
            padding-left: 38px;
            padding-right: 38px;
          }

          .address-left-copy {
            max-width: 390px;
          }

          .address-left-copy h1 {
            font-size: 34px;
          }

          .address-left-copy p {
            max-width: 330px;

            font-size: 16px;
          }

          /*
           * Important quote fix for common laptop screens.
           * Positioned below the paragraph, not on top of it.
           */
          .address-quote {
            width: 120px;

            right: 16px;
            top: 255px;

            font-size: 19px;
          }

          .address-form-card {
            padding-left: 32px;
            padding-right: 32px;
          }

          .address-progress-step {
            min-width: 95px;
          }

          .address-next-button {
            min-width: 280px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .address-top-nav {
            display: none;
          }

          .address-main {
            grid-template-columns: 1fr;
          }

          .address-left {
            min-height: 720px;
          }

          .address-form-card {
            margin: 18px;
          }

          /*
           * Hide decorative quote on smaller screens
           * so it never overlaps other content.
           */
          .address-quote {
            display: none;
          }

          .address-footer-inner {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .address-footer-subscribe {
            grid-column: span 2;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 720px) {
          .address-topbar {
            padding: 8px 8px 0;
          }

          .address-topbar-inner {
            min-height: 62px;

            padding: 0 10px;
          }

          .address-top-logo {
            width: 135px;
          }

          .address-language-btn {
            display: none !important;
          }

          .address-login-btn,
          .address-register-btn {
            min-height: 36px !important;

            padding-left: 8px !important;
            padding-right: 8px !important;

            font-size: 10px !important;
          }

          .address-left {
            min-height: 720px;

            padding: 30px 20px;
          }

          .address-left-copy {
            max-width: 100%;
          }

          .address-left-copy h1 {
            font-size: 29px;
          }

          .address-left-copy p {
            max-width: 100%;

            font-size: 15px;
          }

          .address-benefit-stack {
            width: calc(100% - 40px);

            left: 20px;
            bottom: 28px;
          }

          .address-benefit-card {
            min-height: 76px;
          }

          .address-form-card {
            margin: 12px;

            padding: 24px 18px;
          }

          .address-form-heading h2 {
            font-size: 29px;
          }

          .address-progress {
            width: 100%;
          }

          .address-progress-step {
            min-width: 60px;
          }

          .address-progress-step span {
            font-size: 8px;
          }

          .address-form {
            grid-template-columns: 1fr;
          }

          .address-bottom-actions {
            grid-column: 1;

            flex-direction: column;
          }

          .address-previous-button,
          .address-next-button {
            width: 100%;
            min-width: 0;
          }

          .address-footer-inner {
            width: calc(100% - 24px);

            grid-template-columns: 1fr;

            gap: 22px;
          }

          .address-footer-subscribe {
            grid-column: auto;
          }

          .address-footer-subscribe > div {
            flex-direction: column;
          }

          .address-footer-subscribe button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}