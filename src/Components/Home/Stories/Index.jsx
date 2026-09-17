import React from "react";
import { Link } from "react-router";
import "./Stories.css";
import TeacherLeftDoc from "../../../assets/images/doc/teacher-left.png";
import TeacherRightDoc from "../../../assets/images/doc/teacher-right.png";
import Pro2 from "../../../assets/images/pro 2.png";
import Test_Person from "../../../assets/images/parents_person.png";
import Test_Person2 from "../../../assets/images/parent_person2.png";
import Test_Person3 from "../../../assets/images/parent_person3.png";

const stories = [
  {
    badge: "Student Distinction",
    title: "1st Position Worldwide in Federal Board Examinations",
    snippet:
      "Future Foundation School's top scorers set an international standard twice (2019 & 2024), demonstrating exceptional academic rigor, discipline, and conceptual depth.",
    name: "Worldwide FBISE High Achiever",
    role: "Class of 2024",
    image: Test_Person3,
    link: "/chairman-message",
  },
  {
    badge: "Master Faculty",
    title: "M.A English (NUML), B.Ed - Inspiring Linguistic Mastery",
    snippet:
      "Guiding students through active communication, creative expression, and public speaking confidence to prepare them for global opportunities.",
    name: "Miss Najma Batool",
    role: "Senior English Educator",
    image: Pro2,
    link: "/facilities",
  },
  {
    badge: "Leadership & Strategy",
    title: "MSc in Project Management (UK), MCom - Nurturing Strategy",
    snippet:
      "Instilling analytical thinking, organizational discipline, and project-based problem-solving across secondary and higher secondary levels.",
    name: "Abdul Qayyum",
    role: "Faculty & Trainer",
    image: TeacherRightDoc,
    link: "/facilities",
  },
  {
    badge: "Business & Innovation",
    title: "BBA Specialist - Mentoring Young Entrepreneurs",
    snippet:
      "Cultivating leadership, ethical entrepreneurship, and digital citizenship early in student development.",
    name: "Abdul Haeey",
    role: "Educator & Mentor",
    image: TeacherLeftDoc,
    link: "/facilities",
  },
  {
    badge: "Parent Community",
    title: "A Community of Belonging, Islamic Values & Academic Growth",
    snippet:
      "Our parent community values the seamless integration of moral education, modern robotics, and individualized student care across all campuses.",
    name: "Proud FFS Parent",
    role: "Parent Association",
    image: Test_Person2,
    link: "/contact-us",
  },
  {
    badge: "Montessori Foundation",
    title: "Sensory & EPL Mastery for Early Childhood Growth",
    snippet:
      "Empowering young minds with essential real-world life skills, coordination, independence, and foundational literacy in vibrant activity centers.",
    name: "Early Childhood Specialist",
    role: "Montessori Wing Lead",
    image: Test_Person,
    link: "/montessori-wing",
  },
];

export const StoriesSection = () => {
  return (
    <section className="iskl_stories_section" id="stories">
      <div className="container">
        <div className="iskl_stories_header">
          <span className="iskl_section_tag">Community & Achievers</span>
          <h2 className="iskl_section_heading">
            Voices of <span>Future Foundation School</span>
          </h2>
          <p className="iskl_section_subtitle">
            Discover the inspiring real-life stories, achievements, and passions of our students, educators, and community members.
          </p>
        </div>

        <div className="iskl_stories_grid">
          {stories.map((story, index) => (
            <div key={index} className="iskl_story_card">
              <div className="iskl_story_img_wrap">
                <img src={story.image} alt={story.name} className="iskl_story_img" />
                <span className="iskl_story_badge">{story.badge}</span>
              </div>
              <div className="iskl_story_body">
                <h3 className="iskl_story_title">{story.title}</h3>
                <p className="iskl_story_text">{story.snippet}</p>
                <div className="iskl_story_author">
                  <div>
                    <div className="iskl_author_name">{story.name}</div>
                    <div className="iskl_author_role">{story.role}</div>
                  </div>
                  <Link to={story.link} className="iskl-btn-navy py-1 px-3" style={{ fontSize: "0.8rem" }}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

