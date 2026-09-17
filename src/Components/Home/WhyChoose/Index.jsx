import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import "./WhyChoose.css";
import Logo from "../../../assets/images/logo.png";
import {
  MdArrowForward,
  MdQuestionAnswer,
  MdLocationOn,
  MdCheckCircleOutline,
  MdPause,
  MdPlayArrow,
} from "react-icons/md";
import HomeworkImg from "../../../assets/images/homework.png";
import GraduationImg from "../../../assets/images/graduation.png";
import HistoryBook from "../../../assets/images/history-book.png";
import OwnerImg from "../../../assets/images/owner.png";
import HeroTwo from "../../../assets/images/hero_two.png";
import HeroOne from "../../../assets/images/hero_one.png";

const AUTO_PLAY_DURATION = 5500; // ms per tab

const panelsData = [
  {
    id: "future-ready",
    tabLabel: "Future-Ready Education",
    title: "Future-Ready Education",
    bgClass: "iskl_bg_blue",
    bgColor: "#0B43BD",
    description:
      "Future Foundation School's rigorous curriculum combines academic excellence with holistic development, preparing students for global success through comprehensive internal and worldwide board assessments.",
    badgeText: "SLRs",
    badgeSubtext: "Student Learning Results",
    linkText: "Learn More",
    linkUrl: "/competency-based-education",
    image: GraduationImg,
    imageAlt: "Future Ready Education & Graduation",
  },
  {
    id: "opportunities",
    tabLabel: "A World of Opportunities",
    title: "A World of Opportunities",
    bgClass: "iskl_bg_navy",
    bgColor: "#061D52",
    description:
      "Our co-curricular programs in AI & Robotics, STEAM, public speaking, arts, and athletics empower students to pursue their passions, fostering global awareness and leadership in a culturally rich environment.",
    badgeText: "OPPORTUNITIES",
    badgeSubtext: "STEAM & Co-Curricular",
    linkText: "Explore Programs",
    linkUrl: "/ai-robotics",
    image: HeroTwo,
    imageAlt: "A World of Opportunities",
  },
  {
    id: "inclusion",
    tabLabel: "Inclusion & Values",
    title: "Inclusion & Values",
    bgClass: "iskl_bg_gold",
    bgColor: "#B88E18",
    description:
      "Our holistic support system fosters academic and social-emotional growth through a collaborative, values-based approach rooted in Qur'an, Seerat, and Islamic ethics, ensuring all students fulfill their potential.",
    badgeText: "INCLUSION",
    badgeSubtext: "Holistic Care & Akhlaq",
    linkText: "Learn More",
    linkUrl: "/quran-o-seerat",
    image: HomeworkImg,
    imageAlt: "Inclusion and Character Building",
  },
  {
    id: "community",
    tabLabel: "Dynamic Community",
    title: "Dynamic Community",
    bgClass: "iskl_bg_royal",
    bgColor: "#1254E8",
    description:
      "Joining FFS means becoming part of a vibrant community celebrating student achievements and nurturing leadership, with over 100+ master educators enriching our shared educational journeys.",
    badgeText: "COMMUNITY",
    badgeSubtext: "100+ Master Trainers",
    linkText: "Learn More",
    linkUrl: "/chairman-message",
    image: OwnerImg,
    imageAlt: "Dynamic Community & Leadership",
  },
  {
    id: "campus",
    tabLabel: "State-of-the-Art Campus",
    title: "State-of-the-Art Campus",
    bgClass: "iskl_bg_darknavy",
    bgColor: "#092B6B",
    description:
      "Across our 70+ campuses nationwide, modern digital smart classrooms, STEAM innovation labs, and Montessori wings provide a world-class environment where students discover their passions.",
    badgeText: "70+ CAMPUSES",
    badgeSubtext: "Nationwide Network",
    linkText: "Visit Our Campus",
    linkUrl: "/our-campuses",
    image: HistoryBook,
    imageAlt: "State-of-the-Art Campus Network",
  },
  {
    id: "non-profit",
    tabLabel: "Builder of Nation",
    title: "Builder of Nation - Since 1998",
    bgClass: "iskl_bg_blue",
    bgColor: "#0A369D",
    description:
      "FFS operates with a dedicated mission of educational service where tuition and investments are continually channeled to recruit top educators and elevate learning facilities for our students.",
    badgeText: "SINCE 1998",
    badgeSubtext: "Builder of Nation",
    linkText: "Learn More",
    linkUrl: "/admission-process",
    image: HeroOne,
    imageAlt: "Builder of Nation & Legacy",
  },
];

export const WhyChooseSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);

  const current = panelsData[activeTab];

  // Automatic slide progression with progress indicator
  useEffect(() => {
    if (isPaused || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % panelsData.length);
      setAnimKey((k) => k + 1);
    }, AUTO_PLAY_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeTab, isPaused, isHovered]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setAnimKey((k) => k + 1);
  };

  return (
    <section
      className={`iskl_fixed_tab_section ${current.bgClass}`}
      id="why-choose"
      style={{ backgroundColor: current.bgColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Giant Background Watermark Letters */}
      <div className="iskl_watermark_letters" aria-hidden="true" key={`watermark-${activeTab}`}>
        FFS
      </div>

      {/* Left Vertical "SKIP ↓" Indicator */}
      <a href="#learning-grid" className="iskl_vertical_skip_btn">
        <span>SKIP</span>
        <span className="iskl_skip_arrow">↓</span>
      </a>

      {/* Right Floating Quick Action Buttons */}
      <div className="iskl_floating_side_icons">
        <Link to="/contact-us" className="iskl_side_icon_btn" title="Inquire">
          <MdQuestionAnswer />
        </Link>
        <Link to="/our-campuses" className="iskl_side_icon_btn" title="Campus Locations">
          <MdLocationOn />
        </Link>
        <Link to="/admissionnow" className="iskl_side_icon_btn" title="Apply Now">
          <MdCheckCircleOutline />
        </Link>
      </div>

      <div className="container iskl_tab_section_inner">
        {/* Top Emblem Logo & Auto-Play Pause Toggle */}
        <div className="iskl_panel_top_row d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <img
              src={Logo}
              alt="Future Foundation School Logo"
              className="iskl_panel_emblem_logo"
            />
            <div className="iskl_panel_tagline">
              <span className="iskl_panel_subtag">Why Choose</span>
              <span className="iskl_panel_maintag">Future Foundation School</span>
            </div>
          </div>

          <button
            type="button"
            className="iskl_autoplay_toggle_btn"
            onClick={() => setIsPaused((p) => !p)}
            title={isPaused ? "Play slide animation" : "Pause slide animation"}
            aria-label={isPaused ? "Play slide animation" : "Pause slide animation"}
          >
            {isPaused ? <MdPlayArrow size={20} /> : <MdPause size={20} />}
          </button>
        </div>

        {/* Dynamic Center Row: Left Content + Right Card with Keyed Animation */}
        <div className="row align-items-center g-5 iskl_panel_main_row">
          {/* Left Column: Heading & Description */}
          <div className="col-lg-6 iskl_panel_left_col" key={`left-${animKey}`}>
            <h2 className="iskl_panel_hero_heading">{current.title}</h2>
            <p className="iskl_panel_hero_desc">{current.description}</p>
            <div className="mt-4">
              <Link to={current.linkUrl} className="iskl-btn-gold text-decoration-none">
                {current.linkText} <MdArrowForward />
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Image Card with Badge */}
          <div className="col-lg-6 iskl_panel_right_col" key={`right-${animKey}`}>
            <div className="iskl_feature_card_wrapper">
              <div className="iskl_feature_card">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="iskl_feature_card_img"
                />
                <div className="iskl_feature_card_overlay" />

                {/* Badge (e.g. SLRs / Opportunities / Inclusion) */}
                <div className="iskl_feature_badge_box">
                  <div className="iskl_feature_badge_title">{current.badgeText}</div>
                  <div className="iskl_feature_badge_sub">{current.badgeSubtext}</div>
                </div>

                <Link
                  to={current.linkUrl}
                  className="iskl_feature_card_link"
                  aria-label={current.linkText}
                >
                  <span>{current.linkText}</span>
                  <MdArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Fixed / Floating Bottom Horizontal Tab Bar with Active Progress Fill */}
        <div className="iskl_bottom_tab_bar_wrapper">
          <nav className="iskl_bottom_tab_bar" aria-label="Why Choose Navigation Tabs">
            {panelsData.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`iskl_tab_pill_btn ${isActive ? "iskl_tab_active" : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  {isActive && !isPaused && !isHovered && (
                    <span
                      className="iskl_tab_progress_bar"
                      key={`progress-${animKey}`}
                      style={{ animationDuration: `${AUTO_PLAY_DURATION}ms` }}
                    />
                  )}
                  <span className="iskl_tab_pill_text">{item.tabLabel}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
};
