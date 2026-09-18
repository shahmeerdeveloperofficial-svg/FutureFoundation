import React, { useEffect } from "react";
import "../../MessagePage/MessagePage.css";
import CoDirectorImg from "../../../assets/images/doc/co-director-cutout.png";
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
            {/* Left Column: Co-Director Portrait & Bio */}
            <div className="col-lg-4 message-profile-col">
              <div className="message-portrait-frame">
                <div className="message-portrait-img-wrap">
                  <img
                    src={CoDirectorImg}
                    alt="Mrs. Noreen Faisal - Co-Director"
                    className="message-portrait-img"
                  />
                </div>
              </div>
              <h3 className="message-profile-name">Mrs. Noreen Faisal</h3>
              <span className="message-designation-badge">Co-Director</span>
              <p className="message-org-tag">Future Foundation School</p>
            </div>

            {/* Right Column: Official Message */}
            <div className="col-lg-8 message-content-col">
              <div className="message-quote-icon">
                <FaQuoteLeft />
              </div>
              <h2 className="message-lead-title">Co-Director&apos;s Message</h2>
              <p className="message-lead-subtitle">
                Leadership Is About Inspiring Others &amp; Fostering Innovation!
              </p>

              <p className="message-body-text">
                As the Co-Director, I believe in fostering a culture of
                excellence, compassion, and innovation. Our primary goal is to provide
                students with the skills, mindset, and confidence they need to excel
                in a rapidly evolving global landscape.
              </p>
              <p className="message-body-text">
                We place a special emphasis on character building, interactive
                learning, and nurturing individual potential. By providing equal
                opportunities and personalized attention, we guide our students to
                discover their inner strengths and grow into empathetic, capable
                citizens.
              </p>
              <p className="message-body-text">
                At Future Foundation School, we are not just educating minds—we are
                building character and inspiring lifelong curiosity that illuminates
                every step of our students&apos; lives.
              </p>

              <div className="message-closing-block">
                <div>
                  <p className="message-sign-note">Warm Regards,</p>
                  <strong style={{ color: "#061D52", fontSize: "16px" }}>
                    Mrs. Noreen Faisal
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

