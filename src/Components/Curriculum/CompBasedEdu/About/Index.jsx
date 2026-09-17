import React, { useEffect } from "react";
import "./About.css";
import CbeLeft from "../../../../assets/images/curiculum/cbe_left.svg";
import CbeRight from "../../../../assets/images/curiculum/cbe_right.svg";
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
    <div className="container-fluid py-5 bg-cbe-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="cbe-img-wrapper">
              <img src={CbeLeft} alt="Competency-Based Education - Mastery" className="cbe-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="cbe-about-title">Competency-Based Education</h1>
            <div className="cbe-title-line"></div>
            <p className="cbe-about-desp">
              Competency-based learning, often referred to as proficiency- or mastery-based education, is a system where students advance through their lessons only after demonstrating true mastery of the material. To ensure every student progresses at a meaningful pace, schools and educators provide tailored, differentiated instruction and targeted support.
            </p>
            <p className="cbe-about-desp">
              At Future Foundation Schools, we actively discourage rote memorization. Instead, we emphasize converting theoretical knowledge into practical skills through our dynamic, activity-based teaching approach. By connecting classroom learning directly to real-world applications, our students build greater confidence and successfully bridge the gap between education and daily life.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="cbe-img-wrapper">
              <img src={CbeRight} alt="Competency-Based Education - Practical Skills" className="cbe-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
