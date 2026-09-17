import React, { useEffect } from "react";
import "./About.css";
import MonLeft from "../../../../assets/images/curiculum/mon_left.jpg";
import MonRight from "../../../../assets/images/curiculum/mon_right.jpg";
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
    <div className="container-fluid py-5 bg-mon-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="mon-img-wrapper">
              <img src={MonLeft} alt="Montessori Wing - Early Learning" className="mon-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="mon-about-title">Montessori Wing</h1>
            <div className="mon-title-line"></div>
            <p className="mon-about-desp">
              Our specialized early childhood ecosystem emphasizes a fun, healthy, and safe environment, high-quality care and education, physical and cognitive milestones, social and emotional development, seamless transitions, self-esteem and independence, equal opportunities for all, and an authentic partnership with parents.
            </p>
            <h3 className="mon-specs-title">Montessori Wing Specialties</h3>
            <p className="mon-specs-head">
              Writing workshops are a core part of our preschool experience.
            </p>
            <ul className="mon-specs-ul text-start">
              <li className="mon-specs-list">
                Early Literacy &amp; Writing Skills: Children are encouraged to practice writing through creative, structured exercises that focus on correct letter formation and early composition.
              </li>
              <li className="mon-specs-list">
                Handwriting Uniformity: We aim to establish uniform, elegant handwriting practices from the very beginning, ensuring that children develop consistent, highly legible penmanship.
              </li>
              <li className="mon-specs-list">
                Fine Motor Skill Reinforcement: Our specialized writing activities strengthen the hand muscles and grip crucial for physical coordination and long-term academic success.
              </li>
              <li className="mon-specs-list">
                Building Expressive Confidence: By providing a highly supportive and positive atmosphere, we empower children to express their thoughts, stories, and ideas confidently through the written word.
              </li>
              <li className="mon-specs-list">
                A fun, healthy, and safe environment for active early learning.
              </li>
              <li className="mon-specs-list">
                High-quality care and education matched to age-appropriate needs.
              </li>
              <li className="mon-specs-list">
                Physical and cognitive development through structured activities.
              </li>
              <li className="mon-specs-list">
                Social and emotional development through kindness and teamwork.
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="mon-img-wrapper">
              <img src={MonRight} alt="Montessori Wing - Writing Workshop" className="mon-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
