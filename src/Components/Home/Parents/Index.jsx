import React, { useState, useEffect, useRef } from "react";
import "./Parents.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Testimonials } from "../../../Data/pro";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

export const ParentsSection = () => {
  const isStaticRender = typeof window === "undefined";

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 800,
    });
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: false,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container-fluid parents_main p-0">
      <div className="container px-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="news_title">Parents Reviews</p>
          <div className="d-flex align-items-center gap-3">
            <button className="news_prev_controller" onClick={goToPrev} aria-label="Previous review">
              <MdArrowBack />
            </button>
            <button className="news_prev_controller" onClick={goToNext} aria-label="Next review">
              <MdArrowForward />
            </button>
          </div>
        </div>

        {isStaticRender ? (
          <div className="row">
            {Testimonials.slice(0, 3).map((item) => (
              <div key={item.id} className="col-lg-4 ps-2 pe-2 mt-4">
                <div className="parents_main_card parent_card">
                  <div className="mb-2">
                    <img src={item.star} alt="5 stars" />
                  </div>
                  <h4 className="parent_title_color">{item.name}</h4>
                  <p className="parent_title">{item.review}</p>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <img src={item.image} alt={item.name} className="parent_avatar" loading="lazy" decoding="async" />
                    <div className="d-flex gap-1 flex-column">
                      <p className="parent_date">{item.date || "Verified Parent"}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="parents_slider_wrapper mt-3">
            <Slider ref={sliderRef} {...settings}>
              {Testimonials.map((item, index) => (
                <div key={item.id} className="px-2 py-2">
                  <div
                    className={`parents_main_card ${
                      index === activeSlide ? "parents_active" : "parent_card"
                    }`}
                  >
                    <div>
                      <div className="mb-2">
                        <img src={item.star} alt="5 stars" loading="lazy" decoding="async" />
                      </div>
                      <h4 className="parent_title_color">{item.name}</h4>
                      <p className="parent_title">{item.review}</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mt-4">
                      <img src={item.image} alt={item.name} className="parent_avatar" loading="lazy" decoding="async" />
                      <div className="d-flex gap-1 flex-column">
                        <p className="parent_date">{item.date || "Verified Parent"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};
