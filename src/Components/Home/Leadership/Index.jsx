import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "./Leadership.css";
import ChairmanImg from "../../../assets/images/owner.png";
import DirectorImg from "../../../assets/images/director2.png";
import CoDirectorImg from "../../../assets/images/doc/co-director-cutout.png";
import { FaQuoteLeft, FaCrown } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const leadershipData = {
  chairman: {
    tabLabel: "Chairman's Message",
    name: "Rana Sohail Ahmed",
    designation: "Founder & Chairman",
    image: ChairmanImg,
    imageClass: "",
    quoteTitle: "Truly A Great Place To Think, Discover & Grow!",
    message:
      "We aim to inspire critical thinkers and encourage our students to perceive the world with curiosity and wonder. A key factor in your child's educational journey is the mentors they interact with. At Future Foundation School, our experienced, skillful, and dedicated faculty work collaboratively to meet the unique needs of every single pupil. When you entrust your child to us, you are joining a vibrant community that values their individuality, nurtures their talents, and partners with you to build a bright, purposeful future.",
    linkUrl: "/chairman-message",
  },
  director: {
    tabLabel: "Director's Message",
    name: "Mrs. Saima Waqas",
    designation: "Director",
    image: DirectorImg,
    imageClass: "",
    quoteTitle: "Empowering Future Leaders & Inspiring Excellence!",
    message:
      "As the Director, I am dedicated to ensuring that our students receive a holistic education that goes beyond academics, nurturing their unique talents and preparing them to lead with integrity, empathy, and resilience. Our educational framework combines modern digital methodologies with strong ethical values, creating a stimulating environment where every child is encouraged to question, experiment, collaborate, and excel.",
    linkUrl: "/principal-message",
  },
  codirector: {
    tabLabel: "Co-Director's Message",
    name: "Mrs. Noreen Faisal",
    designation: "Co-Director",
    image: CoDirectorImg,
    imageClass: "leadership_portrait_img--codirector",
    quoteTitle: "Leadership Is About Inspiring Others & Fostering Innovation!",
    message:
      "As the Co-Director, I believe in fostering a culture of excellence, compassion, and innovation. Our primary goal is to provide students with the skills, mindset, and confidence they need to excel in a rapidly evolving global landscape. We place special emphasis on character building, interactive learning, and personalized attention to help every young learner discover their inner strengths and grow into empathetic, capable citizens.",
    linkUrl: "/philosophy",
  },
};

export const LeadershipSection = () => {
  const [activeKey, setActiveKey] = useState("chairman");

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 800,
    });
  }, []);

  const activeLeader = leadershipData[activeKey];

  return (
    <section className="container-fluid leadership_section p-0" id="leadership">
      <div className="container px-3 px-sm-4">
        {/* Section Header */}
        <div className="text-center" data-aos="fade-up">
          <div className="leadership_kicker">
            <FaCrown className="leadership_kicker_icon" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="leadership_main_title">Our Leadership Messages</h2>
          <p className="leadership_subtitle">
            Visionary guidance and enduring commitment from the leadership of Future Foundation School &amp; College
          </p>
        </div>

        {/* 3 Interactive Switcher Buttons */}
        <div className="leadership_tabs_wrap" data-aos="fade-up">
          {Object.keys(leadershipData).map((key) => {
            const leader = leadershipData[key];
            const isActive = activeKey === key;
            return (
              <button
                key={key}
                type="button"
                className={`leadership_tab_btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveKey(key)}
                aria-pressed={isActive}
              >
                {isActive && <span className="leadership_tab_badge" />}
                <span>{leader.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Executive Showcase Card */}
        <div className="leadership_card" data-aos="fade-up" key={activeKey}>
          <div className="leadership_card_top_accent" />
          <div className="leadership_card_watermark">FFS</div>

          <div className="row g-4 g-lg-5 align-items-center">
            {/* Left Column: Portrait & Details */}
            <div className="col-lg-4 leadership_portrait_col">
              <div className="leadership_portrait_frame">
                <div className="leadership_portrait_inner">
                  <img
                    src={activeLeader.image}
                    alt={activeLeader.name}
                    className={`leadership_portrait_img ${activeLeader.imageClass}`}
                  />
                </div>
              </div>
              <h3 className="leadership_name">{activeLeader.name}</h3>
              <span className="leadership_designation_pill">
                {activeLeader.designation}
              </span>
              <p className="leadership_org_text">Future Foundation School</p>
            </div>

            {/* Right Column: Quote & Message Content */}
            <div className="col-lg-8 leadership_content_col">
              <div className="leadership_quote_badge">
                <FaQuoteLeft />
              </div>
              <h3 className="leadership_quote_title">{activeLeader.quoteTitle}</h3>
              <p className="leadership_text">{activeLeader.message}</p>

              <div className="leadership_card_footer">
                <Link
                  to={activeLeader.linkUrl}
                  className="leadership_readmore_btn"
                >
                  <span>Read Full Message</span>
                  <MdArrowForward size={18} />
                </Link>
                <span className="leadership_footer_brand">
                  Future Foundation School &amp; College
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
