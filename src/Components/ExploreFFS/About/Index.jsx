import React, { useEffect } from "react";
import "../../MessagePage/MessagePage.css";
import "./About.css";
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
    <div className="container-fluid p-0 message-page message-page--chairman">
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
          <h1 className="message-title">Chairman&apos;s Message</h1>
          <p className="message-text">
            It gives me great pleasure to welcome you and your child to the
            Future Foundation School family, a vibrant community where
            wonderful learning opportunities and transformative experiences
            await them. It truly is a remarkable place to think, discover, and
            grow.
          </p>
          <p className="message-text">
            To help our children perceive the world through a broader lens, we
            integrate philosophical inquiry into the heart of our curriculum.
            This encourages our students to develop open, inquisitive minds,
            value sound reasoning, build enduring self-confidence, and remain
            profoundly respectful of diverse opinions. We aim to inspire every
            child to think creatively and embrace academic challenges,
            nurturing their individual abilities so they may achieve their
            absolute best.
          </p>
          <p className="message-text">
            Our school is about far more than just acquiring knowledge and
            technical skills; it is about inspiring children to become critical
            thinkers who are genuinely fascinated by their lessons and
            subjects. A cornerstone of your child&apos;s educational journey is
            the quality of mentorship they receive. To that end, we have built
            a highly experienced, skillful, and dedicated team of teaching and
            support staff. Together, they work collaboratively to provide the
            care, guidance, and academic flexibility required to meet the
            unique needs of every single pupil.
          </p>
          <p className="message-text">
            I wish the very best of luck to all the parents, staff, and
            students who form the golden foundation of our school community. I
            pray that Almighty Allah blesses our collective efforts, helping
            our students realize their dreams of a successful life in this
            world and the world hereafter.
          </p>
        </div>
      </div>
    </div>
  );
};
