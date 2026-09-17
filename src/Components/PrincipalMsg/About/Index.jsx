import React, { useEffect } from "react";
import "../../MessagePage/MessagePage.css";
import MessagePlanet from "../../../assets/images/facilities/about.png";
import MessagePencil from "../../../assets/images/facilities/about-one.png";
import MessageAbacus from "../../../assets/images/facilities/about-two.png";

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
    <div className="container-fluid p-0 message-page message-page--director">
      <div className="message-decor message-decor--planet">
        <img src={MessagePlanet} alt="" aria-hidden="true" />
      </div>
      <div className="message-decor message-decor--abacus">
        <img src={MessageAbacus} alt="" aria-hidden="true" />
      </div>
      <div className="message-decor message-decor--pencil">
        <img src={MessagePencil} alt="" aria-hidden="true" />
      </div>

      <div className="container message-page__inner">
        <div className="message-copy" data-aos="fade-up">
          <h1 className="message-title">Director&apos;s Message</h1>
          <h2 className="message-subtitle">Empowering Future Leaders!</h2>
          <p className="message-text">
            As the Director, I am dedicated to ensuring that our students
            receive a holistic education that goes beyond academics, nurturing
            their talents and preparing them to lead with integrity.
          </p>
          <p className="message-name">Mrs. Saima Waqas</p>
          <p className="message-role">Director</p>
        </div>
      </div>
    </div>
  );
};
