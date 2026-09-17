import React, { useEffect } from "react";
import "./About.css";
import PdLeft from "../../../../assets/images/curiculum/pd_left.jpg";
import PdRight from "../../../../assets/images/curiculum/pd_right.jpg";
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
    <div className="container-fluid py-5 bg-pd-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="pd-img-wrapper">
              <img src={PdLeft} alt="Personality Development - Leadership & Discipline" className="pd-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="pd-about-title">Personality Development</h1>
            <div className="pd-title-line"></div>
            <p className="pd-about-desp">
              As the Holy Prophet Hazrat Muhammad (PBUH) stated, "I guarantee a palace in the highest part of Paradise for those who perfect their Akhlaq (moral character)" (Abu Dawood). True education extends far beyond academic acquisition; at its core, it is about shaping individuals who embody values that uplift society. A truly educated person mirrors a lamp that burns to illuminate the path for others, or a rose that flourishes amidst thorns while spreading its sweet fragrance.
            </p>
            <p className="pd-about-desp">
              At Future Foundation Schools, we are deeply committed to nurturing students into individuals of exemplary moral and ethical character. Our curriculum integrates personality development as a core pillar, intentionally instilling foundational qualities such as respect, honesty, self-discipline, and commitment. We place strong emphasis on personal cleanliness, professional grooming, punctuality, and respect for authority as vital stepping stones toward building well-rounded individuals. Through this holistic approach, we aspire to shape students who not only excel academically but also lead lives grounded in integrity, compassion, and responsibility, ready to leave a lasting, positive impact on the world.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="pd-img-wrapper">
              <img src={PdRight} alt="Personality Development - Akhlaq, Manners & Respect" className="pd-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
