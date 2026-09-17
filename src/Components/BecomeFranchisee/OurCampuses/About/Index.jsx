import React, { useEffect } from "react";
import "./About.css";
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
    <div className="container-fluid franchise-models-container">
      <div className="intro-section container" data-aos="fade-up">
        <p className="intro-text">
          What started as a single, visionary branch has now proudly expanded into a prestigious network of 70+ branches across Pakistan.
        </p>

        <h2 className="section-heading types-of-schools-heading">Our School Network</h2>
        <ul className="types-of-schools-list">
          <li data-aos="fade-right" data-aos-delay="100">
            Throughout this incredible journey of growth, the cornerstone of our success has remained unchanged: the quality of our mentorship.
          </li>
          <li data-aos="fade-right" data-aos-delay="200">
            Over the decades, we have meticulously built a highly experienced, skillful, and dedicated faculty.
          </li>
          <li data-aos="fade-right" data-aos-delay="300">
            By working collaboratively, our teaching and support staff have consistently provided the care, guidance, and academic flexibility required to meet the individual needs of every child.
          </li>
        </ul>
      </div>
      <div className="models-header-bg">
        <h1 className="franchise-models-heading" data-aos="zoom-in">
          Academic Excellence Across the Network
        </h1>
      </div>
      <div className="models-grid-container container">
        <div className="model-circle primary" data-aos="flip-left" data-aos-delay="100">
          <p className="circle-text">70+ Branches</p>
        </div>
        <div className="model-circle primary" data-aos="flip-left" data-aos-delay="200">
          <p className="circle-text">1st Positions Worldwide</p>
        </div>
        <div className="model-circle secondary" data-aos="flip-left" data-aos-delay="300">
          <p className="circle-text">Dedicated Mentorship</p>
        </div>
        <div className="model-circle secondary" data-aos="flip-left" data-aos-delay="400">
          <p className="circle-text">National & Islamic Values</p>
        </div>
        <div className="model-circle primary" data-aos="flip-left" data-aos-delay="500">
          <p className="circle-text">Modern Learning</p>
        </div>
        <div className="model-circle secondary" data-aos="flip-left" data-aos-delay="600">
          <p className="circle-text">Student Growth</p>
        </div>
      </div>
    </div>
  );
};
