import React, { useEffect } from "react";
import "./About.css";
import TalentHuntLeft from "../../../../assets/images/holistic/talent_hunt_left.svg";
import TalentHuntRight from "../../../../assets/images/holistic/talent_hunt_right.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid py-5 bg-talenthunt-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="talenthunt-img-wrapper">
              <img src={TalentHuntLeft} alt="Multiple Intelligences Framework" className="talenthunt-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="talenthunt-about-title">Intellectual Development: The Talent Hunt</h1>
            <div className="talenthunt-title-line"></div>
            <blockquote className="talenthunt-quote">
              "The purpose of school should be to develop intelligences and to help people reach vocational and personal goals appropriate to their particular spectrum of intelligence. People who are helped to do so, I believe, feel more engaged and competent and therefore more inclined to serve society in a constructive way."
              <footer className="talenthunt-author">— Dr. Howard Gardner</footer>
            </blockquote>
            <h3 className="talenthunt-about-desp-head">Program Objectives</h3>
            <ul className="talenthunt-specs text-start">
              <li><strong>Explore & Enhance:</strong> Enable children to discover and cultivate each of their multiple intelligences.</li>
              <li><strong>Identify & Develop:</strong> Recognize every child's unique strengths, interests, and latent talents, transforming potential into excellence.</li>
            </ul>
            <h3 className="talenthunt-about-title-secondary">
              The Talent Development Program at Future Foundation School
            </h3>
            <p className="talenthunt-about-desp">
              To put this philosophy into practice, Future Foundation Schools has designed a specialized Talent Development Program dedicated to identifying and nurturing our students' unique gifts. This program extends beyond traditional age or grade-level expectations, providing advanced challenges that align directly with each learner's individual interests and academic readiness. By doing so, we ensure that every student is continuously engaged, motivated, and empowered to excel.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="talenthunt-img-wrapper">
              <img src={TalentHuntRight} alt="Talent Development & Excellence" className="talenthunt-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
