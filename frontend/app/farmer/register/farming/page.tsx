"use client";

/**
 * ============================================================
 * AGRO HELPER
 * Farmer Registration - Farming Information
 * Route: /farmer/register/farming
 * ============================================================
 *
 * Registration Flow:
 * 1. Personal Information
 * 2. Address Information
 * 3. Farming Information
 * 4. Confirmation
 *
 * All styles use the "farming-" prefix so this page does not
 * interfere with the previously completed registration pages.
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
  Droplets,
  FileText,
  Flower2,
  Globe2,
  Home,
  LandPlot,
  LayoutGrid,
  Leaf,
  MessageCircle,
  Mountain,
  Phone,
  Sprout,
  Users,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function FarmerFarmingInformationPage() {
  const router = useRouter();

  // Farming information form states.
  const [landUnit, setLandUnit] = useState("shotok");
  const [mainCrop, setMainCrop] = useState("");
  const [otherCrop, setOtherCrop] = useState("");
  const [cultivationType, setCultivationType] = useState("");
  const [irrigationType, setIrrigationType] = useState("");
  const [landType, setLandType] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  /**
   * Go back to the Address Information page.
   */
  const handlePrevious = () => {
    router.push("/farmer/register/address");
  };

  /**
   * Continue to the Confirmation page.
   */
  const handleNext = () => {
    router.push("/farmer/register/confirm");
  };

  return (
    <>
      <main className="farming-page">
        {/* =====================================================
            NAVBAR
        ===================================================== */}
        <header className="farming-topbar">
          <div className="farming-topbar-inner">
            <Link href="/" className="farming-logo-link">
              <Image
                src="/images/logo/aglogo.png"
                alt="Agro Helper"
                width={175}
                height={58}
                priority
                className="farming-top-logo"
              />
            </Link>

            <nav className="farming-top-nav">
              <Link
                href="/"
                className="farming-top-link farming-top-active"
              >
                <Home size={16} />
                হোম
              </Link>

              <Link href="/#services" className="farming-top-link">
                <LayoutGrid size={16} />
                আমাদের সেবা
              </Link>

              <Link href="/#crops" className="farming-top-link">
                <Leaf size={16} />
                ফসলের তালিকা
              </Link>

              <Link href="/#experts" className="farming-top-link">
                <Users size={16} />
                বিশেষজ্ঞদের তালিকা
              </Link>

              <Link href="/#how-it-works" className="farming-top-link">
                <BookOpen size={16} />
                কিভাবে কাজ করে
              </Link>

              <Link href="/#contact" className="farming-top-link">
                <Phone size={16} />
                যোগাযোগ
              </Link>

              <Link href="/#about" className="farming-top-link">
                <CircleHelp size={16} />
                সম্পর্কে
              </Link>
            </nav>

            <div className="farming-top-actions">
              <button type="button" className="farming-language-btn">
                <Globe2 size={16} />
                বাংলা
              </button>

              <button type="button" className="farming-login-btn">
                লগইন
              </button>

              <Link
                href="/farmer/register"
                className="farming-register-btn"
              >
                নিবন্ধন
              </Link>
            </div>
          </div>
        </header>

        {/* =====================================================
            MAIN REGISTRATION AREA
        ===================================================== */}
        <section className="farming-main">
          {/* ===================================================
              LEFT FARMER AREA
          =================================================== */}
          <aside className="farming-left">
            <Link
              href="/farmer/register/address"
              className="farming-back"
            >
              <ArrowLeft size={19} />
              ফিরে যান
            </Link>

            <div className="farming-left-copy">
              <h1>কৃষক হিসেবে নিবন্ধন করুন</h1>

              <p>
                Agro Helper-এ যোগ দিয়ে আধুনিক কৃষি প্রযুক্তির মাধ্যমে
                আপনার ফসলের ফলন বাড়ান এবং বিশেষজ্ঞদের সহায়তা পান।
              </p>
            </div>

            {/* Decorative Quote */}
            <div className="farming-quote">
              <span>কৃষকের</span>
              <span>সমস্যা,</span>
              <span>আমাদের</span>
              <span>সমাধান</span>
            </div>

            {/* Farmer Image */}
            <div className="farming-farmer-image-wrap">
              <Image
                src="/images/hero/farmer.jpg"
                alt="Bangladeshi Farmer"
                fill
                priority
                sizes="42vw"
                className="farming-farmer-image"
              />
            </div>

            {/* Service Cards */}
            <div className="farming-benefit-stack">
              <article className="farming-benefit-card">
                <div className="farming-benefit-icon farming-benefit-green">
                  <Leaf size={27} />
                </div>

                <div>
                  <strong>ফসলের রোগ শনাক্তকরণ</strong>
                  <span>ছবি আপলোড করে দ্রুত ফলাফল পান</span>
                </div>
              </article>

              <article className="farming-benefit-card">
                <div className="farming-benefit-icon farming-benefit-blue">
                  <MessageCircle size={27} />
                </div>

                <div>
                  <strong>বিশেষজ্ঞ পরামর্শ</strong>
                  <span>অভিজ্ঞ কৃষি বিশেষজ্ঞদের সাথে কথা বলুন</span>
                </div>
              </article>

              <article className="farming-benefit-card">
                <div className="farming-benefit-icon farming-benefit-orange">
                  <Phone size={27} />
                </div>

                <div>
                  <strong>ভয়েস পরামর্শ</strong>
                  <span>প্রয়োজনে সরাসরি কথা বলার সুযোগ</span>
                </div>
              </article>

              <article className="farming-benefit-card">
                <div className="farming-benefit-icon farming-benefit-red">
                  <FileText size={27} />
                </div>

                <div>
                  <strong>কেয়ার প্ল্যান (PDF)</strong>
                  <span>সম্পূর্ণ পরামর্শ পরিকল্পনা পান</span>
                </div>
              </article>
            </div>
          </aside>

          {/* ===================================================
              RIGHT FORM CARD
          =================================================== */}
          <section className="farming-form-card">
            <div className="farming-form-heading">
              <h2>কৃষক নিবন্ধন</h2>
              <p>আপনার কৃষি তথ্য দিন</p>
            </div>

            {/* =================================================
                REGISTRATION PROGRESS
            ================================================= */}
            <div className="farming-progress">
              <div className="farming-progress-step farming-completed-step">
                <div className="farming-step-circle">✓</div>
                <span>ব্যক্তিগত তথ্য</span>
              </div>

              <div className="farming-progress-line farming-completed-line" />

              <div className="farming-progress-step farming-completed-step">
                <div className="farming-step-circle">✓</div>
                <span>ঠিকানা তথ্য</span>
              </div>

              <div className="farming-progress-line farming-completed-line" />

              <div className="farming-progress-step farming-current-step">
                <div className="farming-step-circle">3</div>
                <span>কৃষি সম্পর্কিত তথ্য</span>
              </div>

              <div className="farming-progress-line" />

              <div className="farming-progress-step">
                <div className="farming-step-circle">4</div>
                <span>নিশ্চিতকরণ</span>
              </div>
            </div>

            {/* =================================================
                SECTION HEADING
            ================================================= */}
            <div className="farming-section-heading">
              <div className="farming-section-icon">
                <Sprout size={30} />
              </div>

              <div>
                <h3>কৃষি সম্পর্কিত তথ্য</h3>
                <p>
                  আপনার কৃষি জমি, ফসল ও চাষাবাদ সম্পর্কিত তথ্য দিন
                </p>
              </div>
            </div>

            {/* =================================================
                FORM
            ================================================= */}
            <form
              className="farming-form"
              onSubmit={(event) => {
                event.preventDefault();
                handleNext();
              }}
            >
              {/* Total Land */}
              <div className="farming-field">
                <label htmlFor="landAmount">
                  মোট জমির পরিমাণ <span>*</span>
                </label>

                <div className="farming-land-input">
                  <div className="farming-input-wrap farming-land-number">
                    <LandPlot size={20} />

                    <input
                      id="landAmount"
                      name="landAmount"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="মোট জমির পরিমাণ লিখুন"
                      required
                    />
                  </div>

                  <select
                    className="farming-unit-select"
                    value={landUnit}
                    onChange={(event) =>
                      setLandUnit(event.target.value)
                    }
                  >
                    <option value="shotok">শতক</option>
                    <option value="acre">একর</option>
                    <option value="bigha">বিঘা</option>
                    <option value="hectare">হেক্টর</option>
                  </select>
                </div>
              </div>

              {/* Main Crop */}
              <div className="farming-field">
                <label htmlFor="mainCrop">
                  প্রধান ফসল <span>*</span>
                </label>

                <div className="farming-input-wrap">
                  <Leaf size={20} />

                  <select
                    id="mainCrop"
                    name="mainCrop"
                    value={mainCrop}
                    onChange={(event) =>
                      setMainCrop(event.target.value)
                    }
                    required
                  >
                    <option value="" disabled>
                      প্রধান ফসল নির্বাচন করুন
                    </option>

                    <option value="rice">ধান</option>
                    <option value="tomato">টমেটো</option>
                    <option value="potato">আলু</option>
                    <option value="eggplant">বেগুন</option>
                    <option value="chili">মরিচ</option>
                    <option value="jute">পাট</option>
                    <option value="corn">ভুট্টা</option>
                    <option value="cucumber">শসা</option>
                  </select>
                </div>
              </div>

              {/* Other Crop */}
              <div className="farming-field">
                <label htmlFor="otherCrop">
                  অন্য ফসল (যদি থাকে)
                </label>

                <div className="farming-input-wrap">
                  <Flower2 size={20} />

                  <select
                    id="otherCrop"
                    name="otherCrop"
                    value={otherCrop}
                    onChange={(event) =>
                      setOtherCrop(event.target.value)
                    }
                  >
                    <option value="">
                      অন্য ফসলের নাম নির্বাচন করুন
                    </option>

                    <option value="rice">ধান</option>
                    <option value="tomato">টমেটো</option>
                    <option value="potato">আলু</option>
                    <option value="eggplant">বেগুন</option>
                    <option value="chili">মরিচ</option>
                    <option value="jute">পাট</option>
                    <option value="corn">ভুট্টা</option>
                    <option value="cucumber">শসা</option>
                  </select>
                </div>
              </div>

              {/* Cultivation Type */}
              <div className="farming-field">
                <label htmlFor="cultivationType">
                  চাষাবাদের ধরন <span>*</span>
                </label>

                <div className="farming-input-wrap">
                  <Sprout size={20} />

                  <select
                    id="cultivationType"
                    name="cultivationType"
                    value={cultivationType}
                    onChange={(event) =>
                      setCultivationType(event.target.value)
                    }
                    required
                  >
                    <option value="" disabled>
                      চাষাবাদের ধরন নির্বাচন করুন
                    </option>

                    <option value="traditional">
                      প্রচলিত চাষ
                    </option>

                    <option value="modern">
                      আধুনিক চাষ
                    </option>

                    <option value="organic">
                      জৈব চাষ
                    </option>

                    <option value="mixed">
                      মিশ্র চাষ
                    </option>
                  </select>
                </div>
              </div>

              {/* Irrigation */}
              <div className="farming-field">
                <label htmlFor="irrigationType">
                  সেচ ব্যবস্থা <span>*</span>
                </label>

                <div className="farming-input-wrap">
                  <Droplets size={20} />

                  <select
                    id="irrigationType"
                    name="irrigationType"
                    value={irrigationType}
                    onChange={(event) =>
                      setIrrigationType(event.target.value)
                    }
                    required
                  >
                    <option value="" disabled>
                      সেচ ব্যবস্থা নির্বাচন করুন
                    </option>

                    <option value="pump">পাম্প</option>
                    <option value="deep-tube-well">
                      গভীর নলকূপ
                    </option>
                    <option value="shallow-tube-well">
                      অগভীর নলকূপ
                    </option>
                    <option value="river">
                      নদী/খাল
                    </option>
                    <option value="rain">
                      বৃষ্টিনির্ভর
                    </option>
                  </select>
                </div>
              </div>

              {/* Land Type */}
              <div className="farming-field">
                <label htmlFor="landType">
                  জমির ধরন <span>*</span>
                </label>

                <div className="farming-input-wrap">
                  <Mountain size={20} />

                  <select
                    id="landType"
                    name="landType"
                    value={landType}
                    onChange={(event) =>
                      setLandType(event.target.value)
                    }
                    required
                  >
                    <option value="" disabled>
                      জমির ধরন নির্বাচন করুন
                    </option>

                    <option value="high">উঁচু জমি</option>
                    <option value="medium">মাঝারি জমি</option>
                    <option value="low">নিচু জমি</option>
                    <option value="wetland">জলাভূমি</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div className="farming-field farming-full-width">
                <label htmlFor="additionalInfo">
                  অতিরিক্ত তথ্য (ঐচ্ছিক)
                </label>

                <div className="farming-textarea-wrap">
                  <FileText size={20} />

                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={additionalInfo}
                    maxLength={500}
                    onChange={(event) =>
                      setAdditionalInfo(event.target.value)
                    }
                    placeholder="আপনার কৃষি সম্পর্কে অতিরিক্ত কোনো তথ্য থাকলে লিখুন..."
                  />

                  <span className="farming-character-count">
                    {additionalInfo.length}/500
                  </span>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="farming-bottom-actions">
                <button
                  type="button"
                  className="farming-previous-button"
                  onClick={handlePrevious}
                >
                  <ArrowLeft size={20} />
                  পূর্ববর্তী ধাপ
                </button>

                <button
                  type="submit"
                  className="farming-next-button"
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
        <footer className="farming-footer">
          <div className="farming-footer-inner">
            <div className="farming-footer-brand">
              <Image
                src="/images/logo/aglogo.png"
                alt="Agro Helper"
                width={170}
                height={55}
                className="farming-footer-logo"
              />

              <span>কৃষকের পাশে, সবসময়</span>
            </div>

            <div className="farming-footer-links">
              <strong>দ্রুত লিংক</strong>

              <Link href="/">হোম</Link>
              <Link href="/#services">আমাদের সেবা</Link>
              <Link href="/#crops">ফসলের তালিকা</Link>
              <Link href="/#how-it-works">কিভাবে কাজ করে</Link>
            </div>

            <div className="farming-footer-links">
              <strong>সহায়তা</strong>

              <a href="#">সাধারণ প্রশ্ন</a>
              <a href="#">গোপনীয়তা নীতি</a>
              <a href="#">যোগাযোগ</a>

              <div className="farming-social-icons">
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

            <div className="farming-footer-subscribe">
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
        .farming-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #eefaf4;
          color: #16291f;
          font-family: Arial, Helvetica, sans-serif;
        }

        .farming-page *,
        .farming-page *::before,
        .farming-page *::after {
          box-sizing: border-box;
        }

        .farming-page button,
        .farming-page input,
        .farming-page select,
        .farming-page textarea {
          font: inherit;
        }

        .farming-page button {
          cursor: pointer;
        }

        /* =====================================================
           NAVBAR
        ===================================================== */

        .farming-topbar {
          width: 100%;
          padding: 15px 26px 0;
          position: relative;
          z-index: 100;
          background: linear-gradient(90deg, #f4fff8, #edfff9);
        }

        .farming-topbar-inner {
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
          box-shadow: 0 8px 28px rgba(23, 92, 48, 0.08);
        }

        .farming-logo-link {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .farming-top-logo {
          width: 190px;
          height: auto;
          object-fit: contain;
        }

        .farming-top-nav {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .farming-top-link {
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

        .farming-top-link:hover,
        .farming-top-active {
          background: #eef9f1;
          color: #078b3b;
        }

        .farming-top-actions {
          flex-shrink: 0;
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .farming-top-actions button,
        .farming-register-btn {
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

        .farming-language-btn {
          border: 0;
          background: #f3f5f4;
          color: #27372e;
        }

        .farming-login-btn {
          border: 1px solid #078b3b;
          background: #ffffff;
          color: #078b3b;
        }

        .farming-register-btn {
          border: 1px solid #078b3b;
          background: #078b3b;
          color: #ffffff;
        }

        /* =====================================================
           MAIN AREA
        ===================================================== */

        .farming-main {
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
           LEFT AREA
        ===================================================== */

        .farming-left {
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

        .farming-back {
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

        .farming-left-copy {
          width: 100%;
          max-width: 430px;
          position: relative;
          z-index: 40;
          margin-top: 33px;
        }

        .farming-left-copy h1 {
          margin: 0;
          color: #10281c;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 900;
        }

        .farming-left-copy p {
          max-width: 370px;
          margin: 14px 0 0;
          color: #354b3e;
          font-size: 18px;
          line-height: 1.55;
          font-weight: 500;
        }

        /* Decorative quote */

        .farming-quote {
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

        .farming-quote span {
          display: block;
        }

        .farming-quote::after {
          content: "";
          width: 70px;
          height: 9px;
          margin-top: 8px;
          border-top: 3px solid #078b3b;
          border-bottom: 3px solid #078b3b;
          border-radius: 50%;
          transform: rotate(-4deg);
        }

        /* Farmer Image */

        .farming-farmer-image-wrap {
          width: 100%;
          height: 69%;
          position: absolute;
          left: 0;
          bottom: 0;
          overflow: hidden;
        }

        .farming-farmer-image-wrap::before {
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

        .farming-farmer-image {
          object-fit: cover;
          object-position: center 42%;
        }

        /* =====================================================
           BENEFIT CARDS
        ===================================================== */

        .farming-benefit-stack {
          width: 315px;
          position: absolute;
          left: 32px;
          bottom: 60px;
          z-index: 30;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .farming-benefit-card {
          min-height: 88px;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 13px;
          border-radius: 19px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 7px 22px rgba(19, 72, 37, 0.12);
        }

        .farming-benefit-icon {
          width: 57px;
          height: 57px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 16px;
        }

        .farming-benefit-green {
          background: #def7e8;
          color: #0a9241;
        }

        .farming-benefit-blue {
          background: #def2ff;
          color: #1686e3;
        }

        .farming-benefit-orange {
          background: #fff0dd;
          color: #f08a13;
        }

        .farming-benefit-red {
          background: #ffe4e3;
          color: #ef3d3d;
        }

        .farming-benefit-card strong,
        .farming-benefit-card span {
          display: block;
        }

        .farming-benefit-card strong {
          color: #183026;
          font-size: 15px;
          font-weight: 900;
        }

        .farming-benefit-card span {
          margin-top: 5px;
          color: #58695f;
          font-size: 11px;
          line-height: 1.4;
        }

        /* =====================================================
           RIGHT FORM CARD
        ===================================================== */

        .farming-form-card {
          min-height: 850px;
          margin: 30px 26px 30px 0;
          padding: 31px 42px 29px;
          border-radius: 19px;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 17px 40px rgba(27, 88, 45, 0.08);
        }

        .farming-form-heading h2 {
          margin: 0;
          color: #123025;
          font-size: 36px;
          line-height: 1.15;
          font-weight: 900;
        }

        .farming-form-heading p {
          margin: 8px 0 0;
          color: #5e6e65;
          font-size: 15px;
        }

        /* =====================================================
           PROGRESS
        ===================================================== */

        .farming-progress {
          width: 94%;
          margin: 27px auto;
          display: flex;
          align-items: flex-start;
        }

        .farming-progress-step {
          min-width: 112px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .farming-step-circle {
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

        .farming-completed-step .farming-step-circle,
        .farming-current-step .farming-step-circle {
          background: #078b3b;
          color: #ffffff;
        }

        .farming-progress-step span {
          color: #5c6962;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        .farming-completed-step span,
        .farming-current-step span {
          color: #078b3b;
          font-weight: 900;
        }

        .farming-progress-line {
          height: 2px;
          flex: 1;
          margin-top: 17px;
          background: #dce4df;
        }

        .farming-completed-line {
          background: #a8dabb;
        }

        /* =====================================================
           SECTION HEADING
        ===================================================== */

        .farming-section-heading {
          margin-bottom: 23px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 13px;
          border-radius: 12px;
          background: linear-gradient(90deg, #edfdf8, #f8fcfa);
        }

        .farming-section-icon {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          background: #dff8f1;
          color: #078d41;
        }

        .farming-section-heading h3 {
          margin: 0;
          color: #183127;
          font-size: 22px;
          font-weight: 900;
        }

        .farming-section-heading p {
          margin: 4px 0 0;
          color: #697870;
          font-size: 12px;
        }

        /* =====================================================
           FORM
        ===================================================== */

        .farming-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 29px;
          row-gap: 18px;
        }

        .farming-field {
          min-width: 0;
        }

        .farming-field > label {
          display: block;
          margin-bottom: 7px;
          color: #22372c;
          font-size: 13px;
          font-weight: 800;
        }

        .farming-field > label span {
          color: #df3333;
        }

        .farming-full-width {
          grid-column: 1 / -1;
        }

        /* Standard input container */

        .farming-input-wrap {
          min-height: 53px;
          padding: 0 14px;
          display: flex;
          align-items: center;
          gap: 11px;
          border: 1px solid #d4ddd8;
          border-radius: 10px;
          background: #ffffff;
        }

        .farming-input-wrap:focus-within {
          border-color: #0d9a43;
          box-shadow: 0 0 0 3px rgba(7, 139, 59, 0.08);
        }

        .farming-input-wrap > svg {
          flex-shrink: 0;
          color: #344a5c;
        }

        .farming-input-wrap input,
        .farming-input-wrap select {
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

        .farming-input-wrap input::placeholder {
          color: #929e98;
        }

        .farming-input-wrap select {
          cursor: pointer;
        }

        /* Land amount input with unit selector */

        .farming-land-input {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 105px;
          gap: 0;
        }

        .farming-land-number {
          border-radius: 10px 0 0 10px;
          border-right: 0;
        }

        .farming-unit-select {
          min-height: 53px;
          padding: 0 13px;
          border: 1px solid #d4ddd8;
          border-radius: 0 10px 10px 0;
          outline: 0;
          background: #ffffff;
          color: #263a30;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .farming-unit-select:focus {
          border-color: #0d9a43;
        }

        /* Textarea */

        .farming-textarea-wrap {
          min-height: 110px;
          position: relative;
          padding: 13px 16px 28px 48px;
          border: 1px solid #d4ddd8;
          border-radius: 10px;
          background: #ffffff;
        }

        .farming-textarea-wrap:focus-within {
          border-color: #0d9a43;
          box-shadow: 0 0 0 3px rgba(7, 139, 59, 0.08);
        }

        .farming-textarea-wrap > svg {
          position: absolute;
          top: 16px;
          left: 16px;
          color: #344a5c;
        }

        .farming-textarea-wrap textarea {
          width: 100%;
          min-height: 68px;
          resize: none;
          border: 0;
          outline: 0;
          background: transparent;
          color: #263a30;
          font-size: 13px;
          line-height: 1.5;
        }

        .farming-textarea-wrap textarea::placeholder {
          color: #929e98;
        }

        .farming-character-count {
          position: absolute;
          right: 12px;
          bottom: 8px;
          color: #6f7d75;
          font-size: 11px;
        }

        /* =====================================================
           BOTTOM BUTTONS
        ===================================================== */

        .farming-bottom-actions {
          grid-column: 1 / -1;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .farming-previous-button,
        .farming-next-button {
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

        .farming-previous-button {
          min-width: 210px;
          border: 1px solid #cfd9d3;
          background: #ffffff;
          color: #33483c;
        }

        .farming-previous-button:hover {
          background: #f5f8f6;
        }

        .farming-next-button {
          min-width: 320px;
          border: 0;
          background: #078b3b;
          color: #ffffff;
        }

        .farming-next-button:hover {
          background: #067b34;
        }

        /* =====================================================
           FOOTER
        ===================================================== */

        .farming-footer {
          width: 100%;
          border-top: 1px solid #e2ebe5;
          background: #ffffff;
        }

        .farming-footer-inner {
          width: min(1380px, calc(100% - 48px));
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

        .farming-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .farming-footer-logo {
          width: 170px;
          height: auto;
          object-fit: contain;
        }

        .farming-footer-brand span {
          color: #59675f;
          font-size: 13px;
        }

        .farming-footer-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .farming-footer-links strong,
        .farming-footer-subscribe strong {
          margin-bottom: 4px;
          color: #172c21;
          font-size: 15px;
          font-weight: 900;
        }

        .farming-footer-links a {
          color: #56645c;
          text-decoration: none;
          font-size: 13px;
        }

        .farming-footer-links a:hover {
          color: #078b3b;
        }

        .farming-social-icons {
          margin-top: 8px;
          display: flex;
          gap: 9px;
        }

        .farming-social-icons a {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
        }

        .farming-social-icons a:nth-child(1) {
          background: #1877f2;
        }

        .farming-social-icons a:nth-child(2) {
          background: #ff0000;
        }

        .farming-social-icons a:nth-child(3) {
          background: #0a66c2;
        }

        .farming-footer-subscribe > strong {
          display: block;
          line-height: 1.4;
        }

        .farming-footer-subscribe > div {
          margin-top: 9px;
          display: flex;
          gap: 8px;
        }

        .farming-footer-subscribe input {
          min-width: 0;
          min-height: 40px;
          flex: 1;
          padding: 0 12px;
          border: 1px solid #dce5df;
          border-radius: 7px;
          outline: none;
          font-size: 12px;
        }

        .farming-footer-subscribe input:focus {
          border-color: #078b3b;
        }

        .farming-footer-subscribe button {
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
          .farming-top-logo {
            width: 160px;
          }

          .farming-top-link {
            padding-left: 5px;
            padding-right: 5px;
            gap: 4px;
            font-size: 11px;
          }

          .farming-top-link svg {
            width: 14px;
            height: 14px;
          }

          .farming-top-actions button,
          .farming-register-btn {
            min-height: 39px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 11px;
          }

          .farming-main {
            grid-template-columns:
              minmax(390px, 39%)
              minmax(650px, 61%);
          }

          .farming-left {
            padding-left: 38px;
            padding-right: 38px;
          }

          .farming-left-copy {
            max-width: 390px;
          }

          .farming-left-copy h1 {
            font-size: 34px;
          }

          .farming-left-copy p {
            max-width: 330px;
            font-size: 16px;
          }

          .farming-quote {
            width: 120px;
            right: 16px;
            top: 255px;
            font-size: 19px;
          }

          .farming-form-card {
            padding-left: 32px;
            padding-right: 32px;
          }

          .farming-progress-step {
            min-width: 95px;
          }

          .farming-next-button {
            min-width: 280px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .farming-top-nav {
            display: none;
          }

          .farming-main {
            grid-template-columns: 1fr;
          }

          .farming-left {
            min-height: 720px;
          }

          .farming-form-card {
            margin: 18px;
          }

          .farming-quote {
            display: none;
          }

          .farming-footer-inner {
            grid-template-columns: repeat(2, 1fr);
          }

          .farming-footer-subscribe {
            grid-column: span 2;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 720px) {
          .farming-topbar {
            padding: 8px 8px 0;
          }

          .farming-topbar-inner {
            min-height: 62px;
            padding: 0 10px;
          }

          .farming-top-logo {
            width: 135px;
          }

          .farming-language-btn {
            display: none !important;
          }

          .farming-login-btn,
          .farming-register-btn {
            min-height: 36px !important;
            padding-left: 8px !important;
            padding-right: 8px !important;
            font-size: 10px !important;
          }

          .farming-left {
            min-height: 720px;
            padding: 30px 20px;
          }

          .farming-left-copy {
            max-width: 100%;
          }

          .farming-left-copy h1 {
            font-size: 29px;
          }

          .farming-left-copy p {
            max-width: 100%;
            font-size: 15px;
          }

          .farming-benefit-stack {
            width: calc(100% - 40px);
            left: 20px;
            bottom: 28px;
          }

          .farming-benefit-card {
            min-height: 76px;
          }

          .farming-form-card {
            margin: 12px;
            padding: 24px 18px;
          }

          .farming-form-heading h2 {
            font-size: 29px;
          }

          .farming-progress {
            width: 100%;
          }

          .farming-progress-step {
            min-width: 60px;
          }

          .farming-progress-step span {
            font-size: 8px;
          }

          .farming-form {
            grid-template-columns: 1fr;
          }

          .farming-full-width {
            grid-column: 1;
          }

          .farming-bottom-actions {
            grid-column: 1;
            flex-direction: column;
          }

          .farming-previous-button,
          .farming-next-button {
            width: 100%;
            min-width: 0;
          }

          .farming-footer-inner {
            width: calc(100% - 24px);
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .farming-footer-subscribe {
            grid-column: auto;
          }

          .farming-footer-subscribe > div {
            flex-direction: column;
          }

          .farming-footer-subscribe button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}