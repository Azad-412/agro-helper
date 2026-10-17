"use client";

/**
 * ============================================================
 * AGRO HELPER - HOME PAGE
 * ============================================================
 *
 * Main public landing page of Agro Helper.
 *
 * Sections:
 * - Navigation
 * - Hero
 * - Services
 * - How It Works
 * - Supported Crops
 * - Daily Agricultural Tip
 * - Impact
 * - Footer
 */

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Bot,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  CircleHelp,
  FileText,
  Globe2,
  Headphones,
  Home,
  ImageUp,
  LayoutGrid,
  Leaf,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sprout,
  User,
  Users,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="home-page">
      {/* =====================================================
          NAVBAR
          ===================================================== */}
      <header className="home-topbar">
        <div className="home-topbar-inner">
          {/* Logo */}
          <Link href="/" className="home-logo-link">
            <Image
              src="/images/logo/aglogo.png"
              alt="Agro Helper"
              width={175}
              height={58}
              priority
              className="home-top-logo"
            />
          </Link>

          {/* Navigation */}
          <nav className="home-top-nav">
            <Link
              href="/"
              className="home-top-link home-top-active"
            >
              <Home size={16} />
              হোম
            </Link>

            <Link
              href="/#services"
              className="home-top-link"
            >
              <LayoutGrid size={16} />
              আমাদের সেবা
            </Link>

            <Link
              href="/#crops"
              className="home-top-link"
            >
              <Leaf size={16} />
              ফসলের তালিকা
            </Link>

            <Link
              href="/#experts"
              className="home-top-link"
            >
              <Users size={16} />
              বিশেষজ্ঞদের তালিকা
            </Link>

            <Link
              href="/#how-it-works"
              className="home-top-link"
            >
              <BookOpen size={16} />
              কিভাবে কাজ করে
            </Link>

            <Link
              href="/#contact"
              className="home-top-link"
            >
              <Phone size={16} />
              যোগাযোগ
            </Link>

            <Link
              href="/#about"
              className="home-top-link"
            >
              <CircleHelp size={16} />
              সম্পর্কে
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="home-top-actions">
            <button
              type="button"
              className="home-language-btn"
            >
              <Globe2 size={16} />
              বাংলা
            </button>

            <button
              type="button"
              className="home-login-btn"
            >
              লগইন
            </button>

            <Link
              href="/farmer/register"
              className="home-register-btn"
            >
              নিবন্ধন
            </Link>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO SECTION
          ===================================================== */}
      <section className="hero-section">
        <div className="hero-background-one" />
        <div className="hero-background-two" />

        <div className="hero-container">
          {/* Left Hero Content */}
          <div className="hero-left">
            <div className="hero-small-badge">
              <Sprout size={17} />
              কৃষকের ডিজিটাল সহকারী
            </div>

            <h1>
              কৃষকের সমস্যার
              <span> স্মার্ট সমাধান</span>
            </h1>

            <h2>
              AI প্রযুক্তি ও কৃষি বিশেষজ্ঞের সমন্বয়ে
              নির্ভরযোগ্য কৃষি পরামর্শ
            </h2>

            <p>
              ফসলের সমস্যা ছবি দিয়ে জানান। Agro Helper
              AI-এর প্রাথমিক বিশ্লেষণ এবং অভিজ্ঞ কৃষি
              বিশেষজ্ঞের চূড়ান্ত পরামর্শের মাধ্যমে
              আপনাকে সঠিক সিদ্ধান্ত নিতে সাহায্য করবে।
            </p>

            <div className="hero-buttons">
              <Link
                href="/farmer/register"
                className="hero-primary-button"
              >
                <User size={18} />
                নিবন্ধন করুন
                <ArrowRight size={18} />
              </Link>

              <button
                type="button"
                className="hero-login-button"
              >
                লগইন করুন
              </button>
            </div>

            <button
              type="button"
              className="google-login-button"
            >
              <FcGoogle size={23} />
              Google দিয়ে চালিয়ে যান
            </button>

            <div className="hero-trust-row">
              <div>
                <CheckCircle2 size={17} />
                সহজ ব্যবহার
              </div>

              <div>
                <ShieldCheck size={17} />
                নিরাপদ তথ্য
              </div>

              <div>
                <Users size={17} />
                বিশেষজ্ঞ সহায়তা
              </div>
            </div>
          </div>

          {/* Center Farmer Image */}
          <div className="hero-image-area">
            <div className="hero-image-circle">
              <Image
                src="/images/hero/farmer.jpg"
                alt="Bangladeshi farmer"
                fill
                priority
                sizes="500px"
                className="hero-farmer-image"
              />
            </div>

            <div className="assistant-message-card">
              <div className="assistant-icon">
                <Bot size={23} />
              </div>

              <div>
                <strong>
                  Agro Helper Assistant
                </strong>

                <p>
                  আপনার ফসলের সমস্যা জানাতে ছবি
                  আপলোড করুন।
                </p>
              </div>
            </div>
          </div>

          {/* Right Workflow */}
          <div className="hero-right">
            <div className="hero-right-badge">
              স্মার্ট কৃষি সহায়তা
            </div>

            <h3>
              AI বিশ্লেষণ থেকে
              <br />
              বিশেষজ্ঞের চূড়ান্ত পরামর্শ
            </h3>

            <div className="hero-flow">
              <article className="hero-flow-card">
                <div className="flow-number">
                  1
                </div>

                <div>
                  <strong>
                    সমস্যা জানান
                  </strong>

                  <span>
                    ছবি ও সমস্যার বিস্তারিত দিন
                  </span>
                </div>
              </article>

              <div className="flow-line" />

              <article className="hero-flow-card">
                <div className="flow-number">
                  2
                </div>

                <div>
                  <strong>
                    AI বিশ্লেষণ
                  </strong>

                  <span>
                    প্রাথমিক রোগ শনাক্তকরণ
                  </span>
                </div>
              </article>

              <div className="flow-line" />

              <article className="hero-flow-card">
                <div className="flow-number">
                  3
                </div>

                <div>
                  <strong>
                    বিশেষজ্ঞ যাচাই
                  </strong>

                  <span>
                    কৃষি বিশেষজ্ঞ ফলাফল পর্যালোচনা করবেন
                  </span>
                </div>
              </article>

              <div className="flow-line" />

              <article className="hero-flow-card">
                <div className="flow-number">
                  4
                </div>

                <div>
                  <strong>
                    চূড়ান্ত পরামর্শ
                  </strong>

                  <span>
                    প্রয়োজনীয় করণীয় ও কেয়ার প্ল্যান পান
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
          ===================================================== */}
      <section
        id="services"
        className="services-section"
      >
        <div className="section-heading">
          <span>
            আমাদের সেবা
          </span>

          <h2>
            কৃষকের জন্য প্রয়োজনীয় সব সহায়তা
          </h2>

          <p>
            প্রযুক্তি ও বিশেষজ্ঞ জ্ঞানের সমন্বয়ে
            আপনার কৃষিকাজকে আরও সহজ করুন।
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-icon green-service">
              <ImageUp size={28} />
            </div>

            <h3>
              ছবি দিয়ে সমস্যা জানান
            </h3>

            <p>
              আক্রান্ত ফসলের ছবি ও সমস্যার বিস্তারিত
              তথ্য আপলোড করুন।
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon blue-service">
              <BrainCircuit size={28} />
            </div>

            <h3>
              AI রোগ বিশ্লেষণ
            </h3>

            <p>
              AI প্রযুক্তির মাধ্যমে ফসলের সমস্যার
              প্রাথমিক বিশ্লেষণ পান।
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon orange-service">
              <Users size={28} />
            </div>

            <h3>
              বিশেষজ্ঞ পরামর্শ
            </h3>

            <p>
              অভিজ্ঞ কৃষি বিশেষজ্ঞ আপনার সমস্যা ও AI
              ফলাফল পর্যালোচনা করবেন।
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon red-service">
              <FileText size={28} />
            </div>

            <h3>
              কেয়ার প্ল্যান
            </h3>

            <p>
              ফসলের জন্য ধাপে ধাপে পরিচর্যা ও
              প্রয়োজনীয় করণীয় পান।
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon purple-service">
              <MessageCircle size={28} />
            </div>

            <h3>
              বিশেষজ্ঞের সাথে চ্যাট
            </h3>

            <p>
              প্রয়োজন হলে সরাসরি কৃষি বিশেষজ্ঞের
              সাথে বার্তা বিনিময় করুন।
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon yellow-service">
              <Headphones size={28} />
            </div>

            <h3>
              ভয়েস পরামর্শ
            </h3>

            <p>
              প্রয়োজন অনুযায়ী ভয়েস কলে বিশেষজ্ঞের
              সহায়তা নিন।
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon teal-service">
              <Bot size={28} />
            </div>

            <h3>
              কৃষি চ্যাটবট
            </h3>

            <p>
              সাধারণ কৃষি প্রশ্নের দ্রুত উত্তর পেতে
              স্মার্ট চ্যাটবট ব্যবহার করুন।
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon lime-service">
              <CheckCircle2 size={28} />
            </div>

            <h3>
              ফলো-আপ সেবা
            </h3>

            <p>
              চিকিৎসা বা পরিচর্যার পরে নতুন ছবি দিয়ে
              অগ্রগতি জানান।
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
          ===================================================== */}
      <section
        id="how-it-works"
        className="how-section"
      >
        <div className="section-heading">
          <span>
            কিভাবে কাজ করে
          </span>

          <h2>
            মাত্র কয়েকটি ধাপে কৃষি সহায়তা
          </h2>

          <p>
            সমস্যা জানান থেকে শুরু করে বিশেষজ্ঞের
            চূড়ান্ত পরামর্শ পর্যন্ত সম্পূর্ণ প্রক্রিয়া।
          </p>
        </div>

        <div className="how-grid">
          <article className="how-card">
            <div className="how-number">
              01
            </div>

            <ImageUp size={28} />

            <h3>
              ছবি আপলোড করুন
            </h3>

            <p>
              ফসলের আক্রান্ত অংশের পরিষ্কার ছবি এবং
              সমস্যার বিবরণ দিন।
            </p>
          </article>

          <div className="how-arrow">
            <ArrowRight size={25} />
          </div>

          <article className="how-card">
            <div className="how-number">
              02
            </div>

            <Bot size={28} />

            <h3>
              AI বিশ্লেষণ
            </h3>

            <p>
              AI সম্ভাব্য রোগ বা সমস্যার প্রাথমিক
              বিশ্লেষণ তৈরি করবে।
            </p>
          </article>

          <div className="how-arrow">
            <ArrowRight size={25} />
          </div>

          <article className="how-card">
            <div className="how-number">
              03
            </div>

            <Users size={28} />

            <h3>
              বিশেষজ্ঞ যাচাই
            </h3>

            <p>
              কৃষি বিশেষজ্ঞ AI ফলাফল ও আপনার তথ্য
              যাচাই করবেন।
            </p>
          </article>

          <div className="how-arrow">
            <ArrowRight size={25} />
          </div>

          <article className="how-card">
            <div className="how-number">
              04
            </div>

            <FileText size={28} />

            <h3>
              পরামর্শ গ্রহণ করুন
            </h3>

            <p>
              বিশেষজ্ঞের চূড়ান্ত পরামর্শ এবং কেয়ার
              প্ল্যান সংগ্রহ করুন।
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          CROPS
          ===================================================== */}
      <section
        id="crops"
        className="crops-section"
      >
        <div className="section-heading">
          <span>
            সহায়ক ফসল
          </span>

          <h2>
            যে ফসলগুলোর জন্য সহায়তা পাবেন
          </h2>

          <p>
            Agro Helper-এ ধীরে ধীরে আরও ফসল ও রোগ
            যুক্ত করা হবে।
          </p>
        </div>

        <div className="crop-grid">
          <article className="crop-card">
            <Image
              src="/images/crops/tomato.jpg"
              alt="Tomato"
              width={250}
              height={170}
            />
            <strong>টমেটো</strong>
          </article>

          <article className="crop-card">
            <Image
              src="/images/crops/rice.jpg"
              alt="Rice"
              width={250}
              height={170}
            />
            <strong>ধান</strong>
          </article>

          <article className="crop-card">
            <Image
              src="/images/crops/potato.jpg"
              alt="Potato"
              width={250}
              height={170}
            />
            <strong>আলু</strong>
          </article>

          <article className="crop-card">
            <Image
              src="/images/crops/eggplant.jpg"
              alt="Eggplant"
              width={250}
              height={170}
            />
            <strong>বেগুন</strong>
          </article>

          <article className="crop-card">
            <Image
              src="/images/crops/chili.jpg"
              alt="Chili"
              width={250}
              height={170}
            />
            <strong>মরিচ</strong>
          </article>

          <article className="crop-card">
            <Image
              src="/images/crops/cucumber.jpg"
              alt="Cucumber"
              width={250}
              height={170}
            />
            <strong>শসা</strong>
          </article>

          <article className="crop-card">
            <Image
              src="/images/crops/jute.jpg"
              alt="Jute"
              width={250}
              height={170}
            />
            <strong>পাট</strong>
          </article>

          <article className="crop-card">
            <Image
              src="/images/crops/corn.jpg"
              alt="Corn"
              width={250}
              height={170}
            />
            <strong>ভুট্টা</strong>
          </article>
        </div>
      </section>

      {/* =====================================================
          EXPERT SECTION
          ===================================================== */}
      <section
        id="experts"
        className="expert-section"
      >
        <div className="expert-container">
          <div className="expert-image-wrapper">
            <Image
              src="/images/expert/expert-1.png"
              alt="Agricultural expert"
              width={430}
              height={430}
              className="expert-photo"
            />
          </div>

          <div className="expert-content">
            <span>
              মানব বিশেষজ্ঞের গুরুত্ব
            </span>

            <h2>
              AI সহায়তা করবে,
              <br />
              চূড়ান্ত সিদ্ধান্ত দেবেন বিশেষজ্ঞ
            </h2>

            <p>
              Agro Helper-এ AI শুধুমাত্র প্রাথমিক
              বিশ্লেষণে সহায়তা করবে। কৃষকের তথ্য,
              ফসলের ছবি এবং AI ফলাফল দেখে অভিজ্ঞ
              কৃষি বিশেষজ্ঞ চূড়ান্ত পরামর্শ প্রদান
              করবেন।
            </p>

            <div className="expert-points">
              <div>
                <CheckCircle2 size={18} />
                AI ফলাফল বিশেষজ্ঞ যাচাই করবেন
              </div>

              <div>
                <CheckCircle2 size={18} />
                বাস্তব অভিজ্ঞতা অনুযায়ী পরামর্শ
              </div>

              <div>
                <CheckCircle2 size={18} />
                Follow-up এবং পুনর্মূল্যায়ন
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DAILY TIP
          ===================================================== */}
      <section className="daily-tip-section">
        <div className="daily-tip-container">
          <div className="daily-tip-icon">
            <Leaf size={34} />
          </div>

          <div>
            <span>
              আজকের কৃষি টিপস
            </span>

            <h2>
              রোগ প্রতিরোধে নিয়মিত ফসল পর্যবেক্ষণ করুন
            </h2>

            <p>
              পাতার রং, দাগ, পোকামাকড় এবং গাছের
              বৃদ্ধির পরিবর্তন নিয়মিত লক্ষ্য করুন।
              শুরুতেই সমস্যা শনাক্ত করা গেলে ক্ষতি
              অনেক কমানো সম্ভব।
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPACT SECTION
          ===================================================== */}
      <section className="impact-section">
        <div className="section-heading light-heading">
          <span>
            আমাদের লক্ষ্য
          </span>

          <h2>
            প্রযুক্তিকে কৃষকের কাছে সহজ করে পৌঁছে দেওয়া
          </h2>
        </div>

        <div className="impact-grid">
          <article>
            <strong>AI</strong>
            <span>
              দ্রুত প্রাথমিক বিশ্লেষণ
            </span>
          </article>

          <article>
            <strong>Expert</strong>
            <span>
              মানব বিশেষজ্ঞের যাচাই
            </span>
          </article>

          <article>
            <strong>Bangla</strong>
            <span>
              সহজ বাংলা ইন্টারফেস
            </span>
          </article>

          <article>
            <strong>Follow-up</strong>
            <span>
              সমস্যা সমাধান পর্যন্ত সহায়তা
            </span>
          </article>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}
      <footer
        id="contact"
        className="home-footer"
      >
        <div className="home-footer-inner">
          {/* Brand */}
          <div className="home-footer-brand">
            <Image
              src="/images/logo/aglogo.png"
              alt="Agro Helper"
              width={180}
              height={60}
              className="home-footer-logo"
            />

            <p>
              কৃষকের পাশে, সবসময়
            </p>
          </div>

          {/* Quick Links */}
          <div className="home-footer-links">
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

            <Link href="/#about">
              আমাদের সম্পর্কে
            </Link>
          </div>

          {/* Support */}
          <div className="home-footer-links">
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

            <div className="home-social-icons">
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
          <div className="home-footer-newsletter">
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

      {/* Chatbot Floating Button */}
      <button
        type="button"
        className="floating-chatbot"
        aria-label="Open Agro Helper chatbot"
      >
        <MessageCircle size={24} />
      </button>
    </main>
  );
}