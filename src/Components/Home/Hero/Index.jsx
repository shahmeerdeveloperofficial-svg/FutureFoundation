import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import Dream from "../../../assets/video/DREAM.mp4";
import Hero from "../../../assets/images/hero_one.png";
import Hero_one from "../../../assets/images/hero_two.png";
import Hero_two from "../../../assets/images/hero.png";
import Hero_line from "../../../assets/images/hero_line.png";
import Hero_rocket from "../../../assets/images/hero_rocket.png";
import Hero_Img_one from "../../../assets/images/hero_img_one.png";
import hero_img from "../../../assets/images/hero_img.png";
import Hero_ellipse from "../../../assets/images/hero_ellipse.png";
import { MdArrowForward } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

export const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []); // Run this effect only once when the component mounts

  const [modalOpen, setModalOpen] = useState(false);

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1200,
  };

  const modalStyle = {
    background: "#061D52",
    color: "#ffffff",
    padding: "clamp(1rem, 4vw, 1.75rem)",
    borderRadius: "16px",
    width: "min(92%, 640px)",
    maxHeight: "85vh",
    overflowY: "auto",
    boxShadow: "0 8px 32px rgba(11,67,189,0.35)",
    border: "2px solid #D4AF37",
    position: "relative",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#0B43BD",
    border: "2px solid #D4AF37",
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
    lineHeight: 1,
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="container-fluid p-0 position-relative hero_main_div">
      <div className="video_container position-relative">
        <video
          controls
          width="100%"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={Hero}
          id="customVideo"
        >
          <source src={Dream} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero_top_wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="hero_curve_svg">
          <path d="M0,40 C360,110 1080,0 1440,65 L1440,120 L0,120 Z" fill="#061D52" />
        </svg>
      </div>
      <div className="container position-relative hero_div ">
        <img src={Hero_line} alt="" className="hero_line_img " />
        <img src={Hero_rocket} alt="" className="hero_rocket_img " />
        <div className="row">
          <div className="col-lg-6 ps-4 pe-4 ps-sm-0 pe-sm-0" data-aos="fade-left">
            <p className="hero_title">About Us</p>
            <p className="hero_sub_title">A Leading School Chain in Pakistan</p>
            <p className="hero_desp">
              In 1998, Future Foundation School began its journey to fulfill the visionary goals set by the leadership of Mr & Mrs Rana Sohail Ahmed. Since then, by the grace of Allah Almighty, the institution has grown continuously.
            </p>
            <p className="hero_desp pt-4">
              Over the years, the school has consistently achieved its educational and societal milestones. We remain deeply committed to promoting National and Islamic values while uplifting educational standards across the country.
            </p>
            <button
              className="hero_btn"
              aria-label="Explore now"
              type="button"
              onClick={() => setModalOpen(true)}
            >
              Explore Now
              <div className="hero_circle">
                <MdArrowForward className="hero_circle_icon" />
              </div>
            </button>
          </div>
          <div
            className="col-lg-6 d-flex justify-content-center position-relative mt-4 mt-sm-4 mt-md-4 mt-lg-0"
            data-aos="fade-right"
          >
            <img src={Hero_Img_one} alt="" className="hero_second_img" />
            <img src={hero_img} alt="" className="hero_main_img" />
            <img src={Hero_ellipse} alt="" className="hero_ellipse" />
            <img src={Hero_ellipse} alt="" className="hero_ellipse_one" />
          </div>
        </div>
      </div>
      <div className="hero_bottom_wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "70px", display: "block", marginBottom: "-1px" }}>
          <path d="M0,40 C360,110 1080,0 1440,65 L1440,120 L0,120 Z" fill="#e7f0fb" />
        </svg>
      </div>

      {modalOpen && (
        <div
          style={overlayStyle}
          role="dialog"
          aria-modal="true"
          aria-label="Information modal"
        >
          <div style={modalStyle}>
            <button
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
              className="buttonStyle"
            >
              &times;
            </button>

            <h3 className="modal-head" >About Future Foundation</h3>
            <p className="modal-desp" style={{ fontFamily:"Montserrat", marginBottom: "0.5rem", lineHeight: 1.6 }}>
              The inspiration behind establishing Future Foundation School stemmed from the visionary leadership of Rana Sohail Ahmed, whose lifelong ambition has been to reform the community through quality education. Throughout his distinguished career, he has made significant contributions to upgrading educational standards across society.
            </p>
            <p className="modal-desp" style={{ fontFamily:"Montserrat", marginBottom: "0.5rem", lineHeight: 1.6 }}>
              In 1998, Future Foundation School embarked on its journey to fulfill the vision set forth by Rana Sohail Ahmed and Mrs. Rana Sohail Ahmed. Since its inception, and by the grace of Allah Almighty, the institution has experienced continuous growth. Over the years, the school has achieved numerous educational and societal milestones, remaining steadfast in its commitment to promoting national and Islamic values.
            </p>
            <p className="modal-desp" style={{ fontFamily:"Montserrat", marginBottom: "0.5rem", lineHeight: 1.6 }}>
              Setting a benchmark of unparalleled academic excellence, Future Foundation School proudly secured the 1st Position Worldwide in the Federal Board examinations a remarkable feat achieved twice, first in 2019 and again in 2024.
            </p>
           
          </div>
        </div>
      )}
    </div>
  );
};
