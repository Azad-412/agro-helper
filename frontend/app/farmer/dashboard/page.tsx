"use client";

/**
 * ============================================================
 * AGRO HELPER - FARMER DASHBOARD
 * Route: /farmer/dashboard
 * ============================================================
 *
 * This is the main dashboard shown after farmer login.
 *
 * Current frontend demo features:
 * - Farmer profile summary
 * - Dashboard statistics
 * - Crop image upload
 * - Recent activities
 * - Quick links
 * - Agricultural daily tip
 * - Sidebar navigation
 *
 * Backend/API integration will be added later.
 */

import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Bell,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Clock3,
  FileText,
  Globe2,
  Headphones,
  ImageIcon,
  LayoutDashboard,
  Leaf,
  Lightbulb,
  Link2,
  LogOut,
  MapPin,
  MessageCircle,
  Pencil,
  Phone,
  PhoneCall,
  Sprout,
  Upload,
  UserRound,
  Users,
} from "lucide-react";

export default function FarmerDashboardPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [selectedImageName, setSelectedImageName] =
    useState("");

  /**
   * Opens the hidden file selector when the farmer clicks
   * the upload area or upload button.
   */
  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  /**
   * Stores the selected crop image name.
   * Actual upload to backend/database will be implemented later.
   */
  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedImageName(file.name);
  };

  /**
   * Temporary frontend logout.
   * Later this will clear authentication token/session.
   */
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <>
      <main className="dashboard-page">
        {/* =====================================================
            TOP NAVBAR
        ===================================================== */}
        <header className="dashboard-topbar">
          <div className="dashboard-brand">
            <Image
              src="/images/logo/aglogo.png"
              alt="Agro Helper"
              width={205}
              height={62}
              priority
              className="dashboard-logo"
            />
          </div>

          <div className="dashboard-top-actions">
            <button
              type="button"
              className="dashboard-language"
            >
              <Globe2 size={20} />
              বাংলা
              <ChevronDown size={15} />
            </button>

            <button
              type="button"
              className="dashboard-notification-button"
              aria-label="Notifications"
            >
              <Bell size={23} />

              <span className="dashboard-notification-count">
                3
              </span>
            </button>

            <div className="dashboard-user-menu">
              <div className="dashboard-user-avatar">
                <UserRound size={24} />
              </div>

              <div>
                <strong>Md. Rahim Uddin</strong>
                <span>কৃষক</span>
              </div>

              <ChevronDown size={17} />
            </div>
          </div>
        </header>

        <div className="dashboard-layout">
          {/* ===================================================
              SIDEBAR
          =================================================== */}
          <aside className="dashboard-sidebar">
            <nav className="dashboard-sidebar-nav">
              <Link
                href="/farmer/dashboard"
                className="dashboard-side-link dashboard-side-active"
              >
                <LayoutDashboard size={23} />
                <span>ড্যাশবোর্ড</span>
              </Link>

              <a
                href="#crop-diagnosis"
                className="dashboard-side-link"
              >
                <Sprout size={23} />
                <span>ফসল নির্ণয় (AI)</span>
              </a>

              <a
                href="#chatbot"
                className="dashboard-side-link"
              >
                <MessageCircle size={23} />
                <span>চ্যাটবট (প্রশ্ন করুন)</span>
              </a>

              <a
                href="#voice-call"
                className="dashboard-side-link"
              >
                <PhoneCall size={23} />
                <span>ভয়েস কল (সহায়তা)</span>
              </a>

              <a
                href="#requests"
                className="dashboard-side-link"
              >
                <FileText size={23} />
                <span>আমার অনুরোধ</span>
              </a>

              <a
                href="#crop-info"
                className="dashboard-side-link"
              >
                <Users size={23} />
                <span>আমার ফসলের তথ্য</span>
              </a>

              <a
                href="#notifications"
                className="dashboard-side-link"
              >
                <Bell size={23} />
                <span>নোটিশ</span>
              </a>

              <a
                href="#profile"
                className="dashboard-side-link"
              >
                <CircleUserRound size={23} />
                <span>প্রোফাইল</span>
              </a>
            </nav>

            <button
              type="button"
              className="dashboard-logout"
              onClick={handleLogout}
            >
              <LogOut size={23} />
              লগআউট
            </button>
          </aside>

          {/* ===================================================
              MAIN CONTENT
          =================================================== */}
          <section className="dashboard-content">
            <div className="dashboard-main-column">
              {/* ===============================================
                  WELCOME BANNER
              =============================================== */}
              <section className="dashboard-welcome">
                <div className="dashboard-welcome-overlay" />

                <Image
                  src="/images/hero/farmer.jpg"
                  alt="Farmer using Agro Helper"
                  fill
                  priority
                  sizes="70vw"
                  className="dashboard-welcome-image"
                />

                <div className="dashboard-welcome-content">
                  <h1>
                    স্বাগতম, Md. Rahim Uddin
                  </h1>

                  <p>
                    Agro Helper - আপনার কৃষি সহকারী
                    সবসময় পাশে
                  </p>

                  <div className="dashboard-welcome-message">
                    <div>
                      <Leaf size={43} />
                    </div>

                    <strong>
                      সঠিক তথ্য, সঠিক পরামর্শ
                      <br />
                      ফসলের উন্নত ফলন
                    </strong>
                  </div>
                </div>
              </section>

              {/* ===============================================
                  STATISTICS
              =============================================== */}
              <section className="dashboard-stats">
                <article className="dashboard-stat dashboard-stat-green">
                  <div className="dashboard-stat-top">
                    <div className="dashboard-stat-icon">
                      <Sprout size={29} />
                    </div>

                    <div>
                      <span>মোট ফসল নির্ণয়</span>
                      <strong>১২</strong>
                    </div>
                  </div>

                  <button type="button">
                    বিস্তারিত দেখুন
                    <ChevronRight size={16} />
                  </button>
                </article>

                <article className="dashboard-stat dashboard-stat-blue">
                  <div className="dashboard-stat-top">
                    <div className="dashboard-stat-icon">
                      <MessageCircle size={29} />
                    </div>

                    <div>
                      <span>চ্যাটবট প্রশ্ন</span>
                      <strong>৮</strong>
                    </div>
                  </div>

                  <button type="button">
                    বিস্তারিত দেখুন
                    <ChevronRight size={16} />
                  </button>
                </article>

                <article className="dashboard-stat dashboard-stat-orange">
                  <div className="dashboard-stat-top">
                    <div className="dashboard-stat-icon">
                      <Phone size={29} />
                    </div>

                    <div>
                      <span>ভয়েস কল</span>
                      <strong>২</strong>
                    </div>
                  </div>

                  <button type="button">
                    বিস্তারিত দেখুন
                    <ChevronRight size={16} />
                  </button>
                </article>

                <article className="dashboard-stat dashboard-stat-red">
                  <div className="dashboard-stat-top">
                    <div className="dashboard-stat-icon">
                      <FileText size={29} />
                    </div>

                    <div>
                      <span>চলমান অনুরোধ</span>
                      <strong>১</strong>
                    </div>
                  </div>

                  <button type="button">
                    বিস্তারিত দেখুন
                    <ChevronRight size={16} />
                  </button>
                </article>
              </section>

              {/* ===============================================
                  CROP DIAGNOSIS / IMAGE UPLOAD
              =============================================== */}
              <section
                id="crop-diagnosis"
                className="dashboard-diagnosis-card"
              >
                <div className="dashboard-section-heading">
                  <Sprout size={34} />

                  <div>
                    <h2>
                      ফসলের ছবি আপলোড করে রোগ শনাক্ত করুন
                    </h2>

                    <p>
                      আপনার ক্ষেতের ফসলের ছবি দিন, AI তা
                      বিশ্লেষণ করে রোগ নির্ণয় ও পরামর্শ দেবে।
                    </p>
                  </div>
                </div>

                <div className="dashboard-diagnosis-grid">
                  <div className="dashboard-upload-side">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/png,image/jpeg"
                      onChange={handleFileChange}
                      className="dashboard-hidden-file"
                    />

                    <button
                      type="button"
                      className="dashboard-dropzone"
                      onClick={openFilePicker}
                    >
                      <ImageIcon size={46} />

                      <strong>
                        এখানে ছবি ড্র্যাগ করুন
                      </strong>

                      <span>
                        অথবা ক্লিক করে ছবি নির্বাচন করুন
                      </span>

                      <small>
                        JPG, PNG, সর্বোচ্চ 5MB
                      </small>

                      {selectedImageName && (
                        <div className="dashboard-selected-file">
                          <Check size={15} />
                          {selectedImageName}
                        </div>
                      )}
                    </button>

                    <button
                      type="button"
                      className="dashboard-upload-button"
                      onClick={openFilePicker}
                    >
                      <Upload size={20} />
                      ছবি আপলোড করুন
                    </button>
                  </div>

                  <div className="dashboard-benefits">
                    <h3>
                      কেন Agro Helper ব্যবহার করবেন?
                    </h3>

                    <ul>
                      <li>
                        <Check size={15} />
                        ফসলের রোগ দ্রুত শনাক্তকরণ
                      </li>

                      <li>
                        <Check size={15} />
                        AI ও বিশেষজ্ঞের পরামর্শ
                      </li>

                      <li>
                        <Check size={15} />
                        স্থানীয় রোগ ও সমাধান
                      </li>

                      <li>
                        <Check size={15} />
                        মানব বিশেষজ্ঞের সাথে কথা বলার সুযোগ
                      </li>

                      <li>
                        <Check size={15} />
                        বাংলাদেশের কৃষকদের জন্য বিশেষভাবে তৈরি
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ===============================================
                  LOWER DASHBOARD AREA
              =============================================== */}
              <div className="dashboard-bottom-grid">
                {/* Quick Links */}
                <section className="dashboard-box">
                  <div className="dashboard-box-title">
                    <Link2 size={25} />
                    <h2>দ্রুত লিংক</h2>
                  </div>

                  <div className="dashboard-quick-links">
                    <button
                      type="button"
                      className="dashboard-quick dashboard-quick-green"
                    >
                      <Sprout size={31} />

                      <div>
                        <strong>ফসল নির্ণয়</strong>
                        <span>এখনই শুরু করুন</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className="dashboard-quick dashboard-quick-blue"
                    >
                      <MessageCircle size={31} />

                      <div>
                        <strong>চ্যাটবট</strong>
                        <span>প্রশ্ন করুন</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className="dashboard-quick dashboard-quick-orange"
                    >
                      <PhoneCall size={31} />

                      <div>
                        <strong>ভয়েস কল</strong>
                        <span>বিশেষজ্ঞের সাথে কথা বলুন</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className="dashboard-quick dashboard-quick-purple"
                    >
                      <FileText size={31} />

                      <div>
                        <strong>কৃষি নির্দেশিকা</strong>
                        <span>PDF দেখুন</span>
                      </div>
                    </button>
                  </div>
                </section>

                {/* Today's Tip */}
                <section className="dashboard-box">
                  <div className="dashboard-box-title">
                    <Lightbulb size={27} />
                    <h2>
                      কৃষি টিপস
                      <span> (আজকের জন্য)</span>
                    </h2>
                  </div>

                  <div className="dashboard-tip">
                    <Image
                      src="/images/crops/rice.jpg"
                      alt="Rice farming tip"
                      width={115}
                      height={110}
                    />

                    <div>
                      <strong>
                        বোরো ধানের যত্ন
                      </strong>

                      <p>
                        এ সময় জমিতে পর্যাপ্ত পানি নিশ্চিত
                        করুন এবং প্রয়োজন অনুযায়ী সার প্রয়োগ
                        করুন। পোকার আক্রমণ নিয়মিত পর্যবেক্ষণ
                        করুন।
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="dashboard-more-tips"
                  >
                    আরও টিপস দেখুন
                    <ChevronRight size={16} />
                  </button>
                </section>
              </div>
            </div>

            {/* =================================================
                RIGHT COLUMN
            ================================================= */}
            <aside className="dashboard-right-column">
              {/* Farmer Profile */}
              <section
                id="profile"
                className="dashboard-profile-card"
              >
                <div className="dashboard-profile-head">
                  <div className="dashboard-profile-avatar">
                    <UserRound size={41} />
                  </div>

                  <div>
                    <h3>Md. Rahim Uddin</h3>
                    <span>কৃষক</span>

                    <div className="dashboard-verified">
                      নিবন্ধিত ব্যবহারকারী
                    </div>
                  </div>
                </div>

                <div className="dashboard-profile-details">
                  <div>
                    <Phone size={18} />
                    <span>01912345678</span>
                  </div>

                  <div>
                    <MessageCircle size={18} />
                    <span>rahim@gmail.com</span>
                  </div>

                  <div>
                    <MapPin size={18} />
                    <span>সাভার, ঢাকা</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="dashboard-edit-profile"
                >
                  <Pencil size={18} />
                  প্রোফাইল সম্পাদনা
                </button>
              </section>

              {/* Recent Activities */}
              <section
                id="requests"
                className="dashboard-activity-card"
              >
                <div className="dashboard-activity-title">
                  <div>
                    <Clock3 size={22} />
                    <strong>সাম্প্রতিক কার্যক্রম</strong>
                  </div>

                  <button type="button">
                    সব দেখুন
                  </button>
                </div>

                <ActivityItem
                  image="/images/crops/tomato.jpg"
                  title="টমেটো পাতার রোগ"
                  date="১৬ অক্টোবর ২০২৬"
                />

                <ActivityItem
                  image="/images/crops/rice.jpg"
                  title="ধানের পাতা বিশ্লেষণ"
                  date="১২ অক্টোবর ২০২৬"
                />

                <ActivityItem
                  image="/images/crops/eggplant.jpg"
                  title="বেগুন পাতা সমস্যা"
                  date="১০ অক্টোবর ২০২৬"
                  status="চলমান"
                />

                <ActivityItem
                  image="/images/crops/chili.jpg"
                  title="চ্যাটবট প্রশ্ন"
                  date="৮ অক্টোবর ২০২৬"
                  status="সম্পন্ন"
                />
              </section>
            </aside>
          </section>
        </div>
      </main>

      {/* =====================================================
          DASHBOARD CSS
      ===================================================== */}
      <style jsx global>{`
        .dashboard-page {
          min-height: 100vh;
          background: #f5f8f6;
          color: #17261d;
          font-family: Arial, Helvetica, sans-serif;
        }

        .dashboard-page *,
        .dashboard-page *::before,
        .dashboard-page *::after {
          box-sizing: border-box;
        }

        .dashboard-page button,
        .dashboard-page input {
          font: inherit;
        }

        /* =====================================================
           TOPBAR
        ===================================================== */

        .dashboard-topbar {
          height: 78px;
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #dde7e1;
          background: #ffffff;
        }

        .dashboard-logo {
          width: 205px;
          height: auto;
        }

        .dashboard-top-actions {
          display: flex;
          align-items: center;
          gap: 19px;
        }

        .dashboard-language,
        .dashboard-notification-button {
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .dashboard-language {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #19271f;
          font-weight: 700;
        }

        .dashboard-notification-button {
          width: 40px;
          height: 40px;
          position: relative;
          display: grid;
          place-items: center;
        }

        .dashboard-notification-count {
          width: 19px;
          height: 19px;
          position: absolute;
          top: 0;
          right: 0;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #e52d2d;
          color: #ffffff;
          font-size: 10px;
          font-weight: 900;
        }

        .dashboard-user-menu {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dashboard-user-avatar {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #dcefe5;
          color: #087f3a;
        }

        .dashboard-user-menu strong,
        .dashboard-user-menu span {
          display: block;
        }

        .dashboard-user-menu strong {
          font-size: 14px;
        }

        .dashboard-user-menu span {
          margin-top: 3px;
          color: #66746d;
          font-size: 12px;
        }

        /* =====================================================
           MAIN LAYOUT
        ===================================================== */

        .dashboard-layout {
          min-height: calc(100vh - 78px);
          display: grid;
          grid-template-columns: 285px 1fr;
        }

        /* =====================================================
           SIDEBAR
        ===================================================== */

        .dashboard-sidebar {
          min-height: calc(100vh - 78px);
          position: sticky;
          top: 78px;
          height: calc(100vh - 78px);
          padding: 24px 14px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #dde7e1;
          background: #ffffff;
        }

        .dashboard-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .dashboard-side-link {
          min-height: 57px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 18px;
          border-radius: 0 11px 11px 0;
          color: #17251e;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
        }

        .dashboard-side-link:hover {
          background: #f0faf4;
          color: #078b3b;
        }

        .dashboard-side-active {
          position: relative;
          background: linear-gradient(
            90deg,
            #effcf4,
            #e7f7ef
          );
          color: #078b3b;
        }

        .dashboard-side-active::before {
          content: "";
          width: 4px;
          position: absolute;
          top: 0;
          bottom: 0;
          left: -14px;
          background: #078b3b;
        }

        .dashboard-logout {
          min-height: 52px;
          margin-top: auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 18px;
          border: 0;
          background: transparent;
          color: #17251e;
          cursor: pointer;
          font-size: 15px;
          font-weight: 700;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .dashboard-content {
          padding: 18px;
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            290px;
          gap: 17px;
        }

        .dashboard-main-column {
          min-width: 0;
        }

        /* =====================================================
           WELCOME BANNER
        ===================================================== */

        .dashboard-welcome {
          height: 208px;
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          background: #dceedd;
        }

        .dashboard-welcome-image {
          object-fit: cover;
          object-position: center 46%;
        }

        .dashboard-welcome-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            90deg,
            rgba(245, 252, 247, 0.97) 0%,
            rgba(241, 250, 243, 0.88) 33%,
            rgba(239, 248, 241, 0.28) 60%,
            rgba(239, 248, 241, 0.05) 100%
          );
        }

        .dashboard-welcome-content {
          position: relative;
          z-index: 5;
          padding: 28px 38px;
        }

        .dashboard-welcome-content h1 {
          margin: 0;
          font-size: 27px;
          font-weight: 900;
        }

        .dashboard-welcome-content > p {
          margin: 7px 0 0;
          font-size: 17px;
        }

        .dashboard-welcome-message {
          width: 330px;
          min-height: 78px;
          margin-top: 18px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.92);
        }

        .dashboard-welcome-message > div {
          color: #078b3b;
        }

        .dashboard-welcome-message strong {
          font-size: 16px;
          line-height: 1.45;
        }

        /* =====================================================
           STAT CARDS
        ===================================================== */

        .dashboard-stats {
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 13px;
        }

        .dashboard-stat {
          padding: 16px;
          border-radius: 14px;
        }

        .dashboard-stat-green {
          background: #eaf9ef;
          color: #078b3b;
        }

        .dashboard-stat-blue {
          background: #e8f5ff;
          color: #0879db;
        }

        .dashboard-stat-orange {
          background: #fff4df;
          color: #ef8a00;
        }

        .dashboard-stat-red {
          background: #ffeded;
          color: #e12f2f;
        }

        .dashboard-stat-top {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .dashboard-stat-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.7);
        }

        .dashboard-stat-top span,
        .dashboard-stat-top strong {
          display: block;
        }

        .dashboard-stat-top span {
          font-size: 12px;
          font-weight: 800;
        }

        .dashboard-stat-top strong {
          margin-top: 3px;
          color: #14231b;
          font-size: 25px;
        }

        .dashboard-stat button {
          width: 100%;
          min-height: 34px;
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border: 0;
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.4);
          color: inherit;
          cursor: pointer;
          font-size: 11px;
          font-weight: 800;
        }

        /* =====================================================
           DIAGNOSIS
        ===================================================== */

        .dashboard-diagnosis-card,
        .dashboard-box,
        .dashboard-profile-card,
        .dashboard-activity-card {
          border: 1px solid #e0e8e3;
          background: #ffffff;
          box-shadow:
            0 4px 14px rgba(31, 76, 46, 0.04);
        }

        .dashboard-diagnosis-card {
          margin-top: 14px;
          padding: 18px 20px;
          border-radius: 14px;
        }

        .dashboard-section-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #078b3b;
        }

        .dashboard-section-heading h2 {
          margin: 0;
          color: #19281f;
          font-size: 18px;
        }

        .dashboard-section-heading p {
          margin: 4px 0 0;
          color: #63736a;
          font-size: 12px;
        }

        .dashboard-diagnosis-grid {
          margin-top: 17px;
          display: grid;
          grid-template-columns: 1.35fr 0.95fr;
          gap: 22px;
        }

        .dashboard-hidden-file {
          display: none;
        }

        .dashboard-dropzone {
          width: 100%;
          min-height: 164px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1.5px dashed #9eb3a6;
          border-radius: 10px;
          background: #ffffff;
          color: #15261d;
          cursor: pointer;
        }

        .dashboard-dropzone svg {
          color: #17261e;
        }

        .dashboard-dropzone strong {
          margin-top: 9px;
          font-size: 13px;
        }

        .dashboard-dropzone span {
          margin-top: 5px;
          color: #68776f;
          font-size: 11px;
        }

        .dashboard-dropzone small {
          margin-top: 18px;
          color: #607067;
        }

        .dashboard-selected-file {
          margin-top: 8px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: #078b3b;
          font-size: 10px;
          font-weight: 800;
        }

        .dashboard-upload-button {
          width: 100%;
          min-height: 44px;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 0;
          border-radius: 8px;
          background: #078b3b;
          color: #ffffff;
          cursor: pointer;
          font-size: 13px;
          font-weight: 900;
        }

        .dashboard-benefits {
          padding: 20px;
          border-radius: 11px;
          background: linear-gradient(
            135deg,
            #f2fbf6,
            #eff9f5
          );
        }

        .dashboard-benefits h3 {
          margin: 0;
          font-size: 14px;
        }

        .dashboard-benefits ul {
          margin: 14px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .dashboard-benefits li {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #44574c;
          font-size: 12px;
        }

        .dashboard-benefits li svg {
          width: 20px;
          height: 20px;
          padding: 3px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #078b3b;
          color: #ffffff;
        }

        /* =====================================================
           BOTTOM SECTION
        ===================================================== */

        .dashboard-bottom-grid {
          margin-top: 14px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 14px;
        }

        .dashboard-box {
          position: relative;
          padding: 16px;
          border-radius: 13px;
        }

        .dashboard-box-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dashboard-box-title h2 {
          margin: 0;
          font-size: 17px;
        }

        .dashboard-box-title h2 span {
          font-size: 12px;
          font-weight: 500;
        }

        .dashboard-quick-links {
          margin-top: 15px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .dashboard-quick {
          min-height: 105px;
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 9px;
          border: 0;
          border-radius: 10px;
          text-align: left;
          cursor: pointer;
        }

        .dashboard-quick strong,
        .dashboard-quick span {
          display: block;
        }

        .dashboard-quick strong {
          font-size: 12px;
        }

        .dashboard-quick span {
          margin-top: 3px;
          font-size: 9px;
        }

        .dashboard-quick-green {
          background: #e9f8ee;
          color: #078b3b;
        }

        .dashboard-quick-blue {
          background: #e8f4ff;
          color: #0879db;
        }

        .dashboard-quick-orange {
          background: #fff3df;
          color: #e88400;
        }

        .dashboard-quick-purple {
          background: #f4eaff;
          color: #7f34cb;
        }

        .dashboard-tip {
          margin-top: 15px;
          display: flex;
          gap: 14px;
        }

        .dashboard-tip img {
          width: 95px;
          height: 90px;
          border-radius: 9px;
          object-fit: cover;
        }

        .dashboard-tip strong {
          font-size: 13px;
        }

        .dashboard-tip p {
          margin: 6px 0 0;
          color: #596a60;
          font-size: 10px;
          line-height: 1.6;
        }

        .dashboard-more-tips {
          position: absolute;
          right: 14px;
          bottom: 12px;
          display: flex;
          align-items: center;
          gap: 3px;
          border: 0;
          border-radius: 7px;
          padding: 7px 11px;
          background: #e5f7eb;
          color: #078b3b;
          cursor: pointer;
          font-size: 10px;
          font-weight: 800;
        }

        /* =====================================================
           RIGHT PROFILE COLUMN
        ===================================================== */

        .dashboard-right-column {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .dashboard-profile-card {
          padding: 16px;
          border-radius: 13px;
        }

        .dashboard-profile-head {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .dashboard-profile-avatar {
          width: 70px;
          height: 70px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #e7eef0;
          color: #2e5968;
        }

        .dashboard-profile-head h3 {
          margin: 5px 0 0;
          font-size: 15px;
        }

        .dashboard-profile-head span {
          display: block;
          margin-top: 3px;
          font-size: 11px;
        }

        .dashboard-verified {
          margin-top: 7px;
          padding: 5px 8px;
          display: inline-block;
          border-radius: 6px;
          background: #ddf6e5;
          color: #078b3b;
          font-size: 9px;
          font-weight: 800;
        }

        .dashboard-profile-details {
          margin-top: 17px;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .dashboard-profile-details div {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 11px;
        }

        .dashboard-edit-profile {
          width: 100%;
          min-height: 41px;
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 0;
          border-radius: 8px;
          background: #e8f8ee;
          color: #078b3b;
          cursor: pointer;
          font-size: 11px;
          font-weight: 900;
        }

        /* =====================================================
           ACTIVITY
        ===================================================== */

        .dashboard-activity-card {
          padding: 14px;
          border-radius: 13px;
        }

        .dashboard-activity-title {
          margin-bottom: 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .dashboard-activity-title > div {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .dashboard-activity-title strong {
          font-size: 13px;
        }

        .dashboard-activity-title button {
          border: 0;
          background: transparent;
          color: #078b3b;
          cursor: pointer;
          font-size: 10px;
          font-weight: 800;
        }

        .dashboard-activity-item {
          min-height: 76px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid #edf1ee;
        }

        .dashboard-activity-item:last-child {
          border-bottom: 0;
        }

        .dashboard-activity-item img {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          border-radius: 8px;
          object-fit: cover;
        }

        .dashboard-activity-info {
          min-width: 0;
          flex: 1;
        }

        .dashboard-activity-info strong,
        .dashboard-activity-info span {
          display: block;
        }

        .dashboard-activity-info strong {
          font-size: 11px;
        }

        .dashboard-activity-info span {
          margin-top: 6px;
          color: #68786f;
          font-size: 9px;
        }

        .dashboard-activity-arrow {
          color: #567066;
        }

        .dashboard-activity-status {
          padding: 4px 7px;
          border-radius: 6px;
          background: #fff2d7;
          color: #a76300;
          font-size: 8px;
          font-weight: 800;
        }

        .dashboard-activity-status-completed {
          background: #e7f7eb;
          color: #078b3b;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1300px) {
          .dashboard-layout {
            grid-template-columns: 230px 1fr;
          }

          .dashboard-content {
            grid-template-columns: 1fr 260px;
          }

          .dashboard-side-link {
            padding-left: 14px;
            gap: 12px;
            font-size: 13px;
          }

          .dashboard-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-quick-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1050px) {
          .dashboard-layout {
            grid-template-columns: 1fr;
          }

          .dashboard-sidebar {
            display: none;
          }

          .dashboard-content {
            grid-template-columns: 1fr;
          }

          .dashboard-right-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 720px) {
          .dashboard-topbar {
            padding: 0 14px;
          }

          .dashboard-logo {
            width: 150px;
          }

          .dashboard-language,
          .dashboard-user-menu > div:not(
              .dashboard-user-avatar
            ) {
            display: none;
          }

          .dashboard-content {
            padding: 10px;
          }

          .dashboard-welcome {
            height: 250px;
          }

          .dashboard-welcome-content {
            padding: 25px 20px;
          }

          .dashboard-welcome-content h1 {
            font-size: 22px;
          }

          .dashboard-welcome-message {
            width: 100%;
            max-width: 320px;
          }

          .dashboard-stats,
          .dashboard-diagnosis-grid,
          .dashboard-bottom-grid,
          .dashboard-right-column {
            grid-template-columns: 1fr;
          }

          .dashboard-quick-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}

/**
 * Reusable recent activity item.
 * Keeps the right-side activity section clean and consistent.
 */
function ActivityItem({
  image,
  title,
  date,
  status,
}: {
  image: string;
  title: string;
  date: string;
  status?: string;
}) {
  return (
    <div className="dashboard-activity-item">
      <Image
        src={image}
        alt={title}
        width={52}
        height={52}
      />

      <div className="dashboard-activity-info">
        <strong>{title}</strong>
        <span>{date}</span>
      </div>

      {status ? (
        <span
          className={`dashboard-activity-status ${
            status === "সম্পন্ন"
              ? "dashboard-activity-status-completed"
              : ""
          }`}
        >
          {status}
        </span>
      ) : (
        <ChevronRight
          size={17}
          className="dashboard-activity-arrow"
        />
      )}
    </div>
  );
}