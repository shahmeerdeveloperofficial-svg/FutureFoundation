import React, { useEffect } from "react";
import "./About.css";
import DgLeft from "../../../../assets/images/curiculum/dgedu_left.jpg";
import DgRight from "../../../../assets/images/curiculum/dgedu_right.jpg";
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
    <div className="container-fluid py-5 bg-dgedu-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="dgedu-img-wrapper">
              <img src={DgLeft} alt="Digital Education - Smart Board" className="dgedu-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="dgedu-about-title">Digital Education</h1>
            <div className="dgedu-title-line"></div>
            <p className="dgedu-about-desp">
              Digital education represents the innovative integration of cutting-edge tools and technologies into the core teaching and learning experience. Often referred to as Technology-Enhanced Learning (TEL) or E-Learning, exploring these digital frontiers allows our educators to design highly engaging, interactive, and personalized learning opportunities. Whether through blended environments or immersive digital platforms, we are deeply motivated to adopt forward-thinking practices that meet and exceed the requirements of modern education.
            </p>
            <p className="dgedu-about-desp">
              As part of our commitment to experiential learning, Future Foundation School has successfully launched state-of-the-art SMART Board Technology in our Montessori and Preschool wings. Moving forward, our vision is to scale this interactive technology across all of our 70+ campuses, embedding it seamlessly at every student level to transform traditional classrooms into dynamic hubs of global discovery.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="dgedu-img-wrapper">
              <img src={DgRight} alt="Digital Education - TEL & E-Learning" className="dgedu-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
