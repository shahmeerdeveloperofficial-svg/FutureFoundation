import React, { useEffect } from "react";
import "./About.css";
import OutdoorTripsLeft from "../../../../assets/images/holistic/outdoor_trips_left.svg";
import OutdoorTripsRight from "../../../../assets/images/holistic/outdoor_trips_right.svg";
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
    <div className="container-fluid py-5 bg-oet-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="oet-img-wrapper">
              <img src={OutdoorTripsLeft} alt="Outdoor Expeditions & Wilderness Learning" className="oet-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="oet-about-title">Outdoor Educational Trips</h1>
            <div className="oet-title-line"></div>
            <p className="oet-about-desp">
              Future Foundation Schools provides students with dynamic opportunities to engage in outdoor education, shifting the learning paradigm into natural environments. Our outdoor education programs feature residential and wilderness-based experiences where students participate in an array of adventurous challenges, including hiking, climbing, canoeing, ropes courses, and collaborative team-building games. Rooted in the principles of environmental and experiential learning, these activities turn the great outdoors into a living classroom.
            </p>
            <p className="oet-about-desp">
              Through these immersive outdoor experiences, students are empowered to overcome adversity, foster personal and social growth, and connect with nature.
            </p>
            <p className="oet-about-desp">
              At Future Foundation Schools, we meticulously organize outdoor educational visits and field trips to promote physical vitality, mental well-being, and self-confidence. Designed to be both engaging and balanced, these excursions provide hands-on activities that inspire students, helping them grow into healthier, happier, and more courageous individuals.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="oet-img-wrapper">
              <img src={OutdoorTripsRight} alt="Experiential Learning & Team Building" className="oet-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
