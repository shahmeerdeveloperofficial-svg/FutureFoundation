import React, { useEffect } from "react";
import "./About.css";
import AirLeft from "../../../../assets/images/curiculum/air_left.jpg";
import AirRight from "../../../../assets/images/curiculum/air_right.svg";
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
    <div className="container-fluid py-5 bg-air-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="air-img-wrapper">
              <img src={AirLeft} alt="AI in Education" className="air-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="air-about-title">AI and Robotics</h1>
            <div className="air-title-line"></div>
            <p className="air-about-desp">
              At Future Foundation Schools, we encourage students to explore AI tools and technologies, while simultaneously fostering their creativity and problem-solving skills. As we plan to incorporate AI and Robotics into our curriculum in the near future, our aim is to provide students with hands-on experiences that enhance both their technical and creative abilities. This balanced approach ensures students develop critical skills in coding, innovation, and engineering, while also nurturing their imagination and independent thinking. By embracing these advancements, we prepare our students to lead in a future shaped by technology and creativity.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="air-img-wrapper">
              <img src={AirRight} alt="Robotics & Innovation" className="air-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
