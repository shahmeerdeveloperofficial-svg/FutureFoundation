import React from "react";
import { Link } from "react-router";
import "./JoinCta.css";
import { MdArrowForward, MdQuestionAnswer, MdLocationOn, MdSchool } from "react-icons/md";

export const JoinCtaSection = () => {
  return (
    <section className="iskl_join_cta_section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="iskl_section_tag" style={{ color: "var(--secondary-color)" }}>Your Journey Starts Here</span>
          <h2 className="iskl_section_heading text-white">
            Join Us at <span style={{ color: "var(--secondary-color)" }}>Future Foundation School</span>
          </h2>
          <p className="iskl_section_subtitle" style={{ color: "rgba(255,255,255,0.85)" }}>
            Take the first step toward world-class schooling, modern tech education, and holistic character building.
          </p>
        </div>

        <div className="row g-4">
          {/* Tile 1: Inquire */}
          <div className="col-md-4">
            <div className="iskl_join_tile">
              <div>
                <MdQuestionAnswer className="iskl_join_icon" />
                <h4 className="text-white fw-bold mb-2">Inquire Online</h4>
                <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.95rem" }}>
                  Have questions regarding our academic curriculum, age criteria, or fee structure? Our admissions counseling team is ready to guide you.
                </p>
              </div>
              <Link to="/contact-us" className="iskl-btn-outline text-center justify-content-center mt-3 text-decoration-none">
                Submit Inquiry <MdArrowForward />
              </Link>
            </div>
          </div>

          {/* Tile 2: Visit Campus */}
          <div className="col-md-4">
            <div className="iskl_join_tile">
              <div>
                <MdLocationOn className="iskl_join_icon" />
                <h4 className="text-white fw-bold mb-2">Visit Our Campuses</h4>
                <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.95rem" }}>
                  Explore state-of-the-art Montessori wings, science & robotics labs, and smart classrooms at any of our 70+ campuses across Pakistan.
                </p>
              </div>
              <Link to="/our-campuses" className="iskl-btn-outline text-center justify-content-center mt-3 text-decoration-none">
                Campus Directory <MdArrowForward />
              </Link>
            </div>
          </div>

          {/* Tile 3: Apply Now */}
          <div className="col-md-4">
            <div className="iskl_join_tile iskl_join_tile_featured">
              <div>
                <MdSchool className="iskl_join_icon" />
                <h4 className="text-white fw-bold mb-2">Apply for Admission</h4>
                <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.95rem" }}>
                  Admissions for the 2026-27 academic session are currently open from Montessori to Grade 10. Complete your online registration today.
                </p>
              </div>
              <Link to="/admissionnow" className="iskl-btn-gold text-center justify-content-center mt-3 text-decoration-none">
                Apply Online Now <MdArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

