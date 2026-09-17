import React, { useEffect } from "react";
import "./About.css";
import About from "../../../assets/images/facilities/about.png";
import About_one from "../../../assets/images/facilities/about-one.png";
import About_two from "../../../assets/images/facilities/about-two.png";
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
    <div className="container-fluid p-0 mt-4 bg-fac-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h2 className="fac-about-main">Our Curriculum</h2>
            <h1 className="fac-about-title">A Holistic Approach to Modern Education</h1>
            <p className="fac-about-desp">
              At Future Foundation School, our academic curriculum is meticulously designed to match the cognitive, affective, and psychomotor developmental milestones of our students. We believe in providing a progressive learning environment that balances robust modern education with deep-rooted values.
            </p>
            <p className="fac-about-desp">
              Our curriculum is built upon the following core pillars: Montessori Wing, Global Skills, Digital Education, AI & Robotics, STEAM Learning, Competency-Based Education, Qur'an & Seerat as Syllabus, and Character Building & Personality Development.
            </p>
          </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
