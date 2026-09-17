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
      <div className="hero_fac_bg">
        <div className="lms_overlay"></div>
        <div className="lms_hero_content">
          <h1 className="lms_hero_title admission_hero_title">
            <span className="admission_hero_title_line admission_hero_title_line_red">
              Admissions Open 2026-2027
            </span>
            <span className="admission_hero_title_line admission_hero_title_line_blue">
              <strong>Future Foundation School & College</strong>
            </span>
          </h1>
          <p className="lms_heo_desp admission_hero_desp">
            Play Group to F.Sc. <span className="lms-hero-breadcrumb-icon">&gt;</span>{" "}
            Apply Now for Quality Education!
          </p>
        </div>
        <div className="hero_cloud_img" />
      </div>
    </div>
  );
};
