import React from "react";
import { Link } from "react-router";
import "./LearningGrid.css";
import { MdArrowForward } from "react-icons/md";
import HeroBg1 from "../../../assets/images/hero_one.png";
import HeroBg2 from "../../../assets/images/hero_two.png";
import HomeworkImg from "../../../assets/images/homework.png";
import GraduationImg from "../../../assets/images/graduation.png";
import HistoryImg from "../../../assets/images/history-book.png";

const learningCards = [
  {
    category: "Early Years",
    title: "Montessori Wing",
    desc: "Vibrant, activity-based learning designed to cultivate sensory development, motor skills, and natural curiosity.",
    link: "/montessori-wing",
    image: HomeworkImg,
  },
  {
    category: "Primary & Middle",
    title: "Elementary & Middle School",
    desc: "Rigorous academic foundations combined with creative exploration, critical inquiry, and character development.",
    link: "/philosophy",
    image: GraduationImg,
  },
  {
    category: "Future Tech",
    title: "AI & Robotics",
    desc: "Hands-on coding, artificial intelligence, robotics workshops, and real-world problem-solving for 21st-century minds.",
    link: "/ai-robotics",
    image: HeroBg2,
  },
  {
    category: "Innovation",
    title: "STEAM Learning",
    desc: "Interdisciplinary discovery in Science, Technology, Engineering, Arts, and Mathematics fostering deep comprehension.",
    link: "/steam",
    image: HeroBg1,
  },
  {
    category: "Academic Mastery",
    title: "Competency-Based Education",
    desc: "Transforming rote learning into true mastery and practical application of knowledge across all subjects.",
    link: "/competency-based-education",
    image: HistoryImg,
  },
  {
    category: "Values & Ethics",
    title: "Qur'an & Seerat Syllabus",
    desc: "Spiritual elevation and ethical grounding deeply integrated into everyday student life and character formation.",
    link: "/quran-o-seerat",
    image: HeroBg1,
  },
];

export const LearningGridSection = () => {
  return (
    <section className="iskl_learning_section" id="learning">
      <div className="container">
        {/* Intro */}
        <div className="iskl_learning_intro">
          <span className="iskl_section_tag">Academic Pathways</span>
          <h2 className="iskl_section_heading">
            Learning at <span>Future Foundation School</span>
          </h2>
          <p className="iskl_section_subtitle">
            Every child learns differently. Our aim is to provide students with the opportunities, experiences, and pathways that best suit their abilities, interests, and aspirations.
          </p>
        </div>

        {/* Card Grid (ISKL Image Card Style) */}
        <div className="iskl_learning_grid">
          {learningCards.map((card, index) => (
            <Link to={card.link} key={index} className="iskl_learning_card">
              <div
                className="iskl_card_bg"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="iskl_card_gradient" />
              <div className="iskl_card_content">
                <span className="iskl_card_category">{card.category}</span>
                <h3 className="iskl_card_title">{card.title}</h3>
                <p className="iskl_card_desc">{card.desc}</p>
                <span className="iskl_card_cta">
                  Explore Wing <MdArrowForward />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

