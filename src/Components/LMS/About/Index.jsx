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
    <div className="container-fluid p-0">
      <div className="container mt-4">
        <div className="row align-items-start">
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="fac-about-main">Digital Education & Technology-Enhanced Learning (TEL)</h2>
            <h1 className="fac-about-title">Embracing Innovation for Modern Classrooms</h1>
            <p className="fac-about-desp">
              Digital education represents the innovative integration of cutting-edge tools and technologies into the core teaching and learning experience. Often referred to as Technology-Enhanced Learning (TEL) or E-Learning, exploring these digital frontiers allows our educators to design highly engaging, interactive, and personalized learning opportunities. Whether through blended environments or immersive digital platforms, we are deeply motivated to adopt forward-thinking practices that meet and exceed the requirements of modern education.
            </p>
            <p className="fac-about-desp">
              As part of our commitment to experiential learning, Future Foundation School has successfully launched state-of-the-art SMART Board Technology in our Montessori and Preschool wings. Moving forward, our vision is to scale this interactive technology across all of our 70+ campuses, embedding it seamlessly at every student level to transform traditional classrooms into dynamic hubs of global discovery.
            </p>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="fac-about-title">Our Smart Board Initiative</div>
            <p className="fac-about-desp">
              As part of our commitment to experiential learning, Future Foundation School has successfully launched state-of-the-art SMART Board Technology in our Montessori and Preschool wings. Moving forward, our vision is to scale this interactive technology across all of our 70+ campuses, embedding it seamlessly at every student level to transform traditional classrooms into dynamic hubs of global discovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
