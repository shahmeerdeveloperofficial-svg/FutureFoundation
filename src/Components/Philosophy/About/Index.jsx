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
    <div className="container-fluid p-0 message-page message-page--co-director">
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
          <h1 className="message-title">Leadership Is About Inspiring Others!</h1>
          <p className="message-text">
            As the Co-Director, I believe in fostering a culture of
            excellence, compassion, and innovation. Our goal is to provide
            students with the skills and mindset they need to excel in a
            rapidly changing world.
          </p>
          <p className="message-name">Mrs. Noreen Faisal</p>
          <p className="message-role">Co-Director</p>
        </div>
      </div>
    </div>
  );
};
