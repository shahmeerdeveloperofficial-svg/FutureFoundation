import React, { useEffect } from "react";
import "./About.css";
import SilentFeaturesLeft from "../../../../assets/images/curiculum/silent_features_left.svg";
import SilentFeaturesRight from "../../../../assets/images/curiculum/silent_features_right.svg";
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
    <div className="container-fluid py-5 bg-admissionpro-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="silentfeat-img-wrapper">
              <img src={SilentFeaturesLeft} alt="Language & Calligraphy Mastery" className="silentfeat-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="silentfeat-about-title">Silent Features of FFS</h1>
            <div className="silentfeat-title-line"></div>
            <p className="silentfeat-about-desp">
              Future Foundation School's silent features include a Spoken English Program, Cursive Writing Mastery, Khat-e-Nastaleeq, Professional Development of Staff, Staff Recreational Trips, and Educational & Recreational Student Trips.
            </p>
            <div className="silentfeat-specs text-start">
              <p><strong>Spoken English Program:</strong> Active communication, correct pronunciation, and public speaking confidence to prepare students for global opportunities.</p>
              <p><strong>Cursive Writing Mastery:</strong> Structured training in elegant English cursive penmanship to develop beautiful handwriting and fine motor skills.</p>
              <p><strong>Khat-e-Nastaleeq:</strong> Classical Urdu calligraphy training to improve everyday Urdu handwriting and foster artistic appreciation.</p>
              <p><strong>Professional Development of Staff:</strong> Regular workshops, modern pedagogical training, and leadership seminars to keep our educators aligned with international standards.</p>
              <p><strong>Staff Recreational Trips:</strong> Exclusive, school-sponsored excursions for our faculty to promote well-being, relaxation, and a positive workplace culture.</p>
              <p><strong>Educational & Recreational Student Trips:</strong> Balanced field trips and excursions that combine academic exploration with pure enjoyment to spark curiosity and build social skills.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="silentfeat-img-wrapper">
              <img src={SilentFeaturesRight} alt="Faculty Development & Leadership" className="silentfeat-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
