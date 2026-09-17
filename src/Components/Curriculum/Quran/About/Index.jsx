import React, { useEffect } from "react";
import "./About.css";
import QuranLeft from "../../../../assets/images/curiculum/quran_left.svg";
import QuranRight from "../../../../assets/images/curiculum/quran_right.svg";
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
    <div className="container-fluid py-5 bg-qos-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="qos-img-wrapper">
              <img src={QuranLeft} alt="The Holy Qur'an" className="qos-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="qos-about-title">Qur'an and Seerat as Core Syllabus</h1>
            <div className="qos-title-line"></div>
            <p className="qos-about-desp">
              At Future Foundation Schools, we are deeply committed to ensuring our students gain a profound, practical understanding of the Holy Qur'an. We recognize the Qur'an not merely as a book of knowledge, but as an essential guide for life, empowering students to discern right from wrong and steadfastly follow the straight path (Sirat al-Mustaqim). True comprehension of the Divine text is vital for leading a fulfilling life in this world and securing success in the Hereafter. Without this foundational anchoring, our youth risk navigating the complexities of modern life unaware of the key spiritual principles meant to protect and guide them.
            </p>
            <p className="qos-about-desp">
              Complementing this, the Seerat (biography) of the Holy Prophet Muhammad (PBUH) serves as a core pillar of our curriculum. Allah Almighty affirms in the Holy Qur'an that the Prophet (PBUH) is the ultimate role model for humanity. Integrating his life teachings into our daily education is therefore crucial to our mission of cultivating authentic Islamic values within our community.
            </p>
            <p className="qos-about-desp">
              By the grace of Allah, Future Foundation Schools has established the study of both the Qur'an and Seerat as a compulsory daily subject for all grade levels. To maintain the highest academic and spiritual standards, we partner with an internationally recognized research organization that provides specialized curriculum development and rigorous staff training. This collaboration ensures our students receive elite, structured guidance on their spiritual and educational journeys.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="qos-img-wrapper">
              <img src={QuranRight} alt="Seerat-un-Nabi (PBUH)" className="qos-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
