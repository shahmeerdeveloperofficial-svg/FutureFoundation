import React, { useEffect } from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid p-0 position-relative overflow-hidden">
      <div className="hero_mon_bg">
        <div className="lms_overlay"></div>
        <div className="lms_hero_content" data-aos="fade-up">
          <h1 className="lms_hero_title">Montessori Wing</h1>
          <p className="lms_heo_desp">
            Home <span className="lms-hero-breadcrumb-icon">&#9660;</span> Curriculum
          </p>
        </div>
        <div className="hero_cloud_img" />
      </div>
    </div>
  );
};
