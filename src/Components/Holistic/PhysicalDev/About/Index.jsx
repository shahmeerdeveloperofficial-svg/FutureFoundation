import React, { useEffect } from "react";
import "./About.css";
import PhysicalDevLeft from "../../../../assets/images/holistic/physical_dev_left.svg";
import PhysicalDevRight from "../../../../assets/images/holistic/physical_dev_right.svg";
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
    <div className="container-fluid py-5 bg-phydev-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="phydev-img-wrapper">
              <img src={PhysicalDevLeft} alt="Sports & Athletics Education" className="phydev-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="phydev-about-title">Physical Development</h1>
            <div className="phydev-title-line"></div>
            <p className="phydev-about-desp">
              Future Foundation Schools firmly operates on the ethos that "a healthy body fosters a healthy mind." We believe that academic excellence and sports education are complementary pillars, both essential to the holistic development of children and youth. Physical education plays a fundamental role in early childhood development, contributing not only to physical growth but also to the acquisition of vital life skills. Through active participation in sports, students learn invaluable lessons in teamwork, honesty, fair play, self-respect, mutual respect, and discipline.
            </p>
            <p className="phydev-about-desp">
              At Future Foundation Schools, we provide a robust platform for students to engage in sports, teaching them how to navigate competitive environments and gracefully handle both victory and defeat. These experiences emphasize the profound impact that physical education has on a child's social, emotional, and moral development, alongside building their physical strength and motor skills.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="phydev-img-wrapper">
              <img src={PhysicalDevRight} alt="Fitness, Health & Championship" className="phydev-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
