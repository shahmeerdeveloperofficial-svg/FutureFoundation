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
      <div className="hero_principal_bg">
        <div className="lms_overlay"></div>
        <div className="lms_hero_content">
          <h1 className="lms_hero_title">Director&apos;s Message</h1>
          <h4 className="lms_heo_desp">Explore &gt; Director Message</h4>
        </div>
        <div className="hero_cloud_img" />
      </div>
    </div>
  );
};
