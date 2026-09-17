import React, { useState, useEffect, useCallback } from "react";
import { FaLink, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./CampusGallery.css";

// Project Asset Images
import aiRoboticsImg from "../../../assets/images/doc/ai-robotics.png";
import outdoorTripsImg from "../../../assets/images/doc/outdoor-trips.png";
import personalityDocImg from "../../../assets/images/doc/personality-docx.png";
import admissionOneImg from "../../../assets/images/admission/1.png";
import admissionTwoImg from "../../../assets/images/admission/2.png";
import curOneImg from "../../../assets/images/curiculum/1.png";
import curTwoImg from "../../../assets/images/curiculum/2.png";
import curFourImg from "../../../assets/images/curiculum/4.png";
import curFiveImg from "../../../assets/images/curiculum/5.png";
import curSixImg from "../../../assets/images/curiculum/6.png";
import curSevenImg from "../../../assets/images/curiculum/7.png";
import curEightImg from "../../../assets/images/curiculum/8.png";
import graduationImg from "../../../assets/images/graduation.png";
import homeworkImg from "../../../assets/images/homework.png";
import heroOneImg from "../../../assets/images/hero_one.png";
import lmsCardOne from "../../../assets/images/Lms/card-one.jpg";
import lmsCardTwo from "../../../assets/images/Lms/card-two.jpg";
import lmsCardThree from "../../../assets/images/Lms/card-three.jpg";
import lmsCardImg from "../../../assets/images/Lms/card.jpg";
import supportGuideImg from "../../../assets/images/doc/support-guides.png";

// Exact PIS Categories as shown in user screenshot
const CATEGORIES = [
  { id: "CAMPUS", label: "CAMPUS" },
  { id: "AUDITORIUM", label: "AUDITORIUM" },
  { id: "COMPUTER LAB", label: "COMPUTER LAB" },
  { id: "LIBRARY", label: "LIBRARY" },
  { id: "SWIMMING POOL", label: "SWIMMING POOL" },
  { id: "CLASSES", label: "CLASSES" },
  { id: "ALL", label: "ALL" },
];

const GALLERY_DATA = [
  // CAMPUS (8 Photos)
  {
    id: 1,
    category: "CAMPUS",
    title: "Main Reception & Information Desk",
    image: lmsCardOne,
    caption: "Modern reception and parent facilitation lounge."
  },
  {
    id: 2,
    category: "CAMPUS",
    title: "Central Assembly Atrium",
    image: curSevenImg,
    caption: "Spacious central atrium for morning assemblies and gatherings."
  },
  {
    id: 3,
    category: "CAMPUS",
    title: "Administration & Counseling Wing",
    image: lmsCardTwo,
    caption: "Dedicated student services and career counseling offices."
  },
  {
    id: 4,
    category: "CAMPUS",
    title: "Main Campus Academic Building",
    image: admissionTwoImg,
    caption: "State-of-the-art multi-storey academic campus building."
  },
  {
    id: 5,
    category: "CAMPUS",
    title: "Academic Corridor & Student Notice Boards",
    image: supportGuideImg,
    caption: "Vibrant learning corridors with educational displays."
  },
  {
    id: 6,
    category: "CAMPUS",
    title: "Central Courtyard & Activity Hub",
    image: curFourImg,
    caption: "Multi-purpose courtyard for extracurricular student activities."
  },
  {
    id: 7,
    category: "CAMPUS",
    title: "Parent Facilitation Lounge",
    image: lmsCardThree,
    caption: "Comfortable lounge for parent-teacher interactions."
  },
  {
    id: 8,
    category: "CAMPUS",
    title: "Executive Boardroom",
    image: lmsCardImg,
    caption: "Executive boardroom for academic planning and leadership."
  },

  // AUDITORIUM (8 Photos)
  {
    id: 9,
    category: "AUDITORIUM",
    title: "Grand Auditorium Stage",
    image: graduationImg,
    caption: "Central event hall for convocation and annual award galas."
  },
  {
    id: 10,
    category: "AUDITORIUM",
    title: "National Day Celebrations Arena",
    image: curSevenImg,
    caption: "Student assemblies and national heritage celebrations."
  },
  {
    id: 11,
    category: "AUDITORIUM",
    title: "Islamic Seminars & Seerah Hall",
    image: personalityDocImg,
    caption: "Character building seminars and ethical discourses."
  },
  {
    id: 12,
    category: "AUDITORIUM",
    title: "Annual Drama & Debating Stage",
    image: curFourImg,
    caption: "Platform for public speaking, debates, and performing arts."
  },
  {
    id: 13,
    category: "AUDITORIUM",
    title: "Youth Leadership Conference",
    image: heroOneImg,
    caption: "Student council sessions and motivational workshops."
  },
  {
    id: 14,
    category: "AUDITORIUM",
    title: "Parent Orientation Theater",
    image: admissionOneImg,
    caption: "Annual orientation and academic milestone conferences."
  },
  {
    id: 15,
    category: "AUDITORIUM",
    title: "Prize Distribution Stage",
    image: homeworkImg,
    caption: "Honoring academic distinctions and top board positions."
  },
  {
    id: 16,
    category: "AUDITORIUM",
    title: "Multi-Media Lecture Hall",
    image: curTwoImg,
    caption: "Acoustically treated multi-media presentation hall."
  },

  // COMPUTER LAB (8 Photos)
  {
    id: 17,
    category: "COMPUTER LAB",
    title: "Next-Gen AI & Robotics Lab",
    image: aiRoboticsImg,
    caption: "Modern computing and robotics innovation workstations."
  },
  {
    id: 18,
    category: "COMPUTER LAB",
    title: "Smart E-Learning Computer Center",
    image: curTwoImg,
    caption: "High-speed workstations for programming and digital literacy."
  },
  {
    id: 19,
    category: "COMPUTER LAB",
    title: "Coding & Algorithm Workstation",
    image: curSixImg,
    caption: "Python and block-coding labs for junior and senior school."
  },
  {
    id: 20,
    category: "COMPUTER LAB",
    title: "Digital Examination Lab",
    image: lmsCardOne,
    caption: "Secure network infrastructure for online assessments."
  },
  {
    id: 21,
    category: "COMPUTER LAB",
    title: "Robotics Build & Test Arena",
    image: curEightImg,
    caption: "Hands-on robotics hardware and sensor testing bays."
  },
  {
    id: 22,
    category: "COMPUTER LAB",
    title: "Junior IT & Computing Suite",
    image: curOneImg,
    caption: "Foundational computer skills for primary school learners."
  },
  {
    id: 23,
    category: "COMPUTER LAB",
    title: "Graphic Design & Digital Media Bay",
    image: curFourImg,
    caption: "Creative media editing and graphic design systems."
  },
  {
    id: 24,
    category: "COMPUTER LAB",
    title: "STEAM Innovation Suite",
    image: aiRoboticsImg,
    caption: "Collaborative project stations for science and technology."
  },

  // LIBRARY (8 Photos)
  {
    id: 25,
    category: "LIBRARY",
    title: "Central Reference Library",
    image: curEightImg,
    caption: "Extensive collection of academic books, journals, and encyclopedias."
  },
  {
    id: 26,
    category: "LIBRARY",
    title: "Quiet Reading & Study Bays",
    image: homeworkImg,
    caption: "Comfortable private reading corners for focused research."
  },
  {
    id: 27,
    category: "LIBRARY",
    title: "Digital E-Library Section",
    image: curTwoImg,
    caption: "Online access to global scientific journals and publications."
  },
  {
    id: 28,
    category: "LIBRARY",
    title: "Junior Readers Book Nook",
    image: curOneImg,
    caption: "Engaging pictorial books and storytelling zone for early years."
  },
  {
    id: 29,
    category: "LIBRARY",
    title: "Group Review & Collaborative Table",
    image: admissionOneImg,
    caption: "Collaborative research and study circles."
  },
  {
    id: 30,
    category: "LIBRARY",
    title: "Cambridge Reference Archives",
    image: lmsCardTwo,
    caption: "Past papers and Cambridge syllabus revision materials."
  },
  {
    id: 31,
    category: "LIBRARY",
    title: "Science & Tech Periodicals Section",
    image: curSixImg,
    caption: "Updated science periodicals and technology magazines."
  },
  {
    id: 32,
    category: "LIBRARY",
    title: "Literature & Language Resource Corner",
    image: supportGuideImg,
    caption: "Urdu, English, and Arabic literary classics collection."
  },

  // SWIMMING POOL / SPORTS (8 Photos)
  {
    id: 33,
    category: "SWIMMING POOL",
    title: "Olympic Standard Swimming Facility",
    image: outdoorTripsImg,
    caption: "Heated swimming pool with certified lifeguard supervision."
  },
  {
    id: 34,
    category: "SWIMMING POOL",
    title: "Aquatic Fitness & Training Drills",
    image: curFiveImg,
    caption: "Structured swimming coaching from beginner to champion level."
  },
  {
    id: 35,
    category: "SWIMMING POOL",
    title: "Annual Inter-House Swimming Gala",
    image: outdoorTripsImg,
    caption: "Competitive aquatic sports and relay championships."
  },
  {
    id: 36,
    category: "SWIMMING POOL",
    title: "Indoor Sports Complex & Pool Arena",
    image: admissionTwoImg,
    caption: "All-weather indoor aquatic and physical wellness complex."
  },
  {
    id: 37,
    category: "SWIMMING POOL",
    title: "Junior Splash & Water Safety Zone",
    image: curFourImg,
    caption: "Safe shallow water activities for primary students."
  },
  {
    id: 38,
    category: "SWIMMING POOL",
    title: "Athletic Pavilion & Sports Grounds",
    image: curSevenImg,
    caption: "Expansive green outdoor sports fields and track."
  },
  {
    id: 39,
    category: "SWIMMING POOL",
    title: "Gymnastics & Physical Fitness Arena",
    image: admissionOneImg,
    caption: "Equipped gymnasium for fitness and stamina training."
  },
  {
    id: 40,
    category: "SWIMMING POOL",
    title: "Outdoor Adventure Expeditions",
    image: curFiveImg,
    caption: "Nature exploration and outdoor stamina building."
  },

  // CLASSES (8 Photos)
  {
    id: 41,
    category: "CLASSES",
    title: "Montessori Early Learning Classroom",
    image: curOneImg,
    caption: "Montessori environment with sensory apparatus and toys."
  },
  {
    id: 42,
    category: "CLASSES",
    title: "Interactive STEAM Science Room",
    image: curSixImg,
    caption: "Hands-on science experiments and practical demonstrations."
  },
  {
    id: 43,
    category: "CLASSES",
    title: "Creative Visual Arts Studio",
    image: curFourImg,
    caption: "Painting, sketching, and sculpture work stations."
  },
  {
    id: 44,
    category: "CLASSES",
    title: "Primary Wing Smart Classroom",
    image: admissionOneImg,
    caption: "Audio-visual enabled interactive smart whiteboard classroom."
  },
  {
    id: 45,
    category: "CLASSES",
    title: "Cambridge O/A Level Classroom",
    image: curTwoImg,
    caption: "Focused seminar-style secondary school classrooms."
  },
  {
    id: 46,
    category: "CLASSES",
    title: "Experiential Learning Hall",
    image: curFiveImg,
    caption: "Group discussions and project-based learning modules."
  },
  {
    id: 47,
    category: "CLASSES",
    title: "Mathematics & Logic Studio",
    image: curEightImg,
    caption: "Abacus, geometry, and mental math practice stations."
  },
  {
    id: 48,
    category: "CLASSES",
    title: "Tarbiyah & Character Building Class",
    image: personalityDocImg,
    caption: "Ethics, Quran Tajweed, and character education sessions."
  }
];

export const CampusGallerySection = () => {
  const [activeTab, setActiveTab] = useState("CAMPUS");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items based on active tab
  const filteredList = activeTab === "ALL"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeTab);

  // Open & Close Lightbox Modal
  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  };

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => 
      prev === 0 ? filteredList.length - 1 : prev - 1
    );
  }, [filteredList.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => 
      prev === filteredList.length - 1 ? 0 : prev + 1
    );
  }, [filteredList.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showPrev, showNext]);

  return (
    <section className="pis-gallery-section" id="campus-gallery">
      <div className="pis-gallery-container">
        
        {/* PIS Rectangular Tab Navigation Bar */}
        <div className="pis-tabs-wrapper">
          <div className="pis-tabs-nav">
            {CATEGORIES.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`pis-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4x2 Grid Gallery Layout (Exact PIS Structure) */}
        <div className="pis-gallery-grid">
          {filteredList.map((item, index) => (
            <div 
              key={item.id} 
              className="pis-gallery-item"
              onClick={() => openLightbox(index)}
            >
              <div className="pis-img-box">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy" 
                  className="pis-gallery-img"
                />
                
                {/* Yellow / Golden Hover Overlay with Dark Circle Link Button */}
                <div className="pis-hover-overlay">
                  <div className="pis-circle-btn" title="View Full Photo">
                    <FaLink className="pis-link-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredList[lightboxIndex] && (
        <div className="pis-lightbox-modal" onClick={closeLightbox}>
          <div className="pis-lightbox-backdrop"></div>
          
          <div className="pis-lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="pis-lightbox-header">
              <span className="pis-lightbox-title">
                {filteredList[lightboxIndex].category} &bull; {filteredList[lightboxIndex].title}
              </span>
              <button 
                type="button"
                className="pis-lightbox-close" 
                onClick={closeLightbox}
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            <div className="pis-lightbox-body">
              <button 
                type="button"
                className="pis-lightbox-arrow prev" 
                onClick={showPrev}
                aria-label="Previous"
              >
                <FaChevronLeft />
              </button>

              <div className="pis-lightbox-media">
                <img 
                  src={filteredList[lightboxIndex].image} 
                  alt={filteredList[lightboxIndex].title} 
                  className="pis-lightbox-img"
                />
              </div>

              <button 
                type="button"
                className="pis-lightbox-arrow next" 
                onClick={showNext}
                aria-label="Next"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="pis-lightbox-footer">
              <p className="pis-lightbox-caption">
                {filteredList[lightboxIndex].caption}
              </p>
              <span className="pis-lightbox-count">
                {lightboxIndex + 1} / {filteredList.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
