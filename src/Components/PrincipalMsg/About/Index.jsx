import React, { useEffect } from "react";
import "../../MessagePage/MessagePage.css";
import DirectorImg from "../../../assets/images/director2.png";
import MessagePlanet from "../../../assets/images/facilities/about.png";
import MessagePencil from "../../../assets/images/facilities/about-one.png";
import MessageAbacus from "../../../assets/images/facilities/about-two.png";
import { FaQuoteLeft } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 900,
    });
  }, []);

  return (
    <div className="container-fluid p-0 message-page">
      <div className="message-decor message-decor--planet">
        <img src={MessagePlanet} alt="" aria-hidden="true" />
      </div>
      <div className="message-decor message-decor--abacus">
        <img src={MessageAbacus} alt="" aria-hidden="true" />
      </div>
      <div className="message-decor message-decor--pencil">
        <img src={MessagePencil} alt="" aria-hidden="true" />
      </div>

      <div className="container message-page__inner px-3 px-sm-4">
        <div className="message-executive-card" data-aos="fade-up">
          <div className="message-card-watermark">FFS</div>
          <div className="row g-4 g-lg-5 align-items-center">
            {/* Left Column: Director Portrait & Bio */}
            <div className="col-lg-4 message-profile-col">
              <div className="message-portrait-frame">
                <div className="message-portrait-img-wrap">
                  <img
                    src={DirectorImg}
                    alt="Mrs. Saima Waqas - Director"
                    className="message-portrait-img"
                  />
                </div>
              </div>
              <h3 className="message-profile-name">Mrs. Saima Waqas</h3>
              <span className="message-designation-badge">Director</span>
              <p className="message-org-tag">Future Foundation School</p>
            </div>

            {/* Right Column: Official Message */}
            <div className="col-lg-8 message-content-col">
              <div className="message-quote-icon">
                <FaQuoteLeft />
              </div>
              <h2 className="message-lead-title">Director&apos;s Message</h2>
              <p className="message-lead-subtitle">
                Empowering Future Leaders &amp; Inspiring Excellence!
              </p>

              <p className="message-body-text">
                As the Director, I am dedicated to ensuring that our students
                receive a holistic education that goes beyond academics, nurturing
                their unique talents and preparing them to lead with integrity,
                empathy, and resilience.
              </p>
              <p className="message-body-text">
                Our educational framework combines modern digital methodologies,
                inquiry-based curriculum design, and strong ethical values. We believe
                in creating a stimulating school atmosphere where every child is
                encouraged to question, experiment, collaborate, and excel.
              </p>
              <p className="message-body-text">
                Together with our passionate team of educators and supportive parent
                community, we are committed to equipping each learner with the
                intellectual depth and moral compass needed to thrive in a globalized
                world.
              </p>

              <div className="message-closing-block">
                <div>
                  <p className="message-sign-note">Warm Regards,</p>
                  <strong style={{ color: "#061D52", fontSize: "16px" }}>
                    Mrs. Saima Waqas
                  </strong>
                </div>
                <span className="message-school-brand">
                  Future Foundation School &amp; College
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

