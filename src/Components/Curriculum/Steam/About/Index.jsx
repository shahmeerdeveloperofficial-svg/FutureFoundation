import React, { useEffect } from "react";
import "./About.css";
import SteamLeft from "../../../../assets/images/curiculum/steam_left.svg";
import SteamRight from "../../../../assets/images/curiculum/steam_right.svg";
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
    <div className="container-fluid py-5 bg-steam-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="steam-img-wrapper">
              <img src={SteamLeft} alt="STEAM - Science & Engineering" className="steam-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="steam-about-title">
              STEAM <span className="d-block mt-1">(Science, Technology, Engineering, Arts, &amp; Mathematics)</span>
            </h1>
            <div className="steam-title-line"></div>
            <p className="steam-about-desp">
              STEAM education is a dynamic, interdisciplinary approach that provides immersive, hands-on, and deeply relevant learning experiences for our students. Going far beyond the mere transfer of textbook knowledge, it actively engages students, equipping them with critical thinking, advanced problem-solving, creative expression, and collaborative leadership skills.
            </p>
            <p className="steam-about-desp">
              Furthermore, STEAM creates essential bridges between the classroom, modern workplaces, local communities, and the global economy. This holistic framework empowers students to naturally understand, connect, and apply complex scientific and mathematical concepts, forming an unbreakable foundation for higher education and future career success.
            </p>
            <p className="steam-about-desp">
              At Future Foundation School, our curriculum deeply embeds STEAM education, ensuring our students are uniquely prepared to face the complex challenges of the modern world and proudly represent Pakistan on the global stage in the fields of science, engineering, technology, and the arts.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="steam-img-wrapper">
              <img src={SteamRight} alt="STEAM - Arts & Mathematics" className="steam-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
