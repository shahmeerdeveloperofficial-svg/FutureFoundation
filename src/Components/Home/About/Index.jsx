import React, { useEffect } from "react";
import "./About.css";
import Homework from "../../../assets/images/homework.png";
import History_line from "../../../assets/images/history_line.png";
import History_rocket from "../../../assets/images/history_rocket.png";
import History_Img from "../../../assets/images/history_school.jpg";
import Cur_line from "../../../assets/images/cur_line.png";
import Cur_video from "../../../assets/images/cur_video.png";
import Cur_brain from "../../../assets/images/cur_brain.png";
import Cur_book from "../../../assets/images/cur_book.png";
import Cur_world from "../../../assets/images/cur_world.png";
import About_line from "../../../assets/images/about_line.png";
import About_rocket from "../../../assets/images/about_rocket.png";
import { Curdata } from "../../../Data/pro";
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
    <div className="container-fluid p-0 about_div" id="about">
      <div className="container-fluid p-0 position-relative overflow-hidden history_bg">
        <div className="container position-relative history_div">
          <img src={History_line} alt="" className="history_line" />
          <img src={History_rocket} alt="" className="history_rocket_img" />
          <div className="row align-items-center">
            <div
              className="col-md-5 col-lg-5 d-flex justify-content-center justify-content-sm-center justify-content-lg-start"
              data-aos="fade-left"
            >
              <img src={History_Img} alt="History of Our School" className="history_img" />
            </div>
            <div className="col-md-7 col-lg-7 mt-3 mt-sm-3 mt-md-0" data-aos="fade-right">
              <p className="history_title">History of Our School</p>
              <p className="history_desp">
                Founded in 1998, Future Foundation School was established with a singular, profound mission: to inspire critical thinkers and challenge students to view the world with curiosity and wonder. We began our journey with a commitment to providing more than just standard schooling, seeking to create an environment where pupils are genuinely fascinated by the process of learning.
              </p>
              <p className="history_desp">
                What started as a single, visionary branch has now proudly expanded into a prestigious network of 70+ branches across Pakistan.
              </p>
              <p className="history_desp">
                Throughout this incredible journey of growth, the cornerstone of our success has remained unchanged: the quality of our mentorship. Over the decades, we have meticulously built a highly experienced, skillful, and dedicated faculty. By working collaboratively, our teaching and support staff have consistently provided the care, guidance, and academic flexibility required to meet the individual needs of every child. Today, our rich history stands as a legacy of academic excellence deeply rooted in national and Islamic values, and dedicated to shaping the global leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid currculum_bg p-0 position-relative overflow-hidden">
        <img src={About_line} alt="" className="history_line_img" data-aos="fade-up" />
        <img src={About_rocket} alt="" className="cur_rocket_img" data-aos="fade-up" />
          <div className="container cur_div">
            <p className="about_desp" data-aos="fade-up">
              Our Curriculum
            </p>
            <p className="history_desp_one text-center" data-aos="fade-up">
            At Future Foundation School, our academic curriculum is meticulously designed to match the cognitive, affective, and psychomotor developmental milestones of our students. We believe in providing a progressive learning environment that balances robust modern education with deep-rooted values.
          </p>
          <p className="history_desp_one text-center" data-aos="fade-up">
            Our curriculum is built upon the following core pillars: Montessori Wing, Global Skills, Digital Education, AI & Robotics, STEAM Learning, and Competency-Based Education.
          </p>
          <div className="row cur_row_div pt-1">
            {Curdata.slice(0, 6).map((item) => (
              <div key={item.id} className="mt-3 col-lg-6" data-aos="fade-up">
                <div className="cur_body_data">
                  <div className="cur_thumb">
                    <img src={item.image} alt="" className="cur_img" />
                    <img src={item.imageone} alt="" className="cur_imageone" />
                  </div>
                  <div>
                    <p className="cur_item">{item.name}</p>
                    <p className="cur_desp">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={Homework} alt="" className="cur_homwork" data-aos="fade-left" />
        <img src={Cur_video} alt="" className="cur_video" data-aos="fade-right" />
        <img src={Cur_book} alt="" className="cur_book" data-aos="fade-left" />
        <img src={Cur_brain} alt="" className="cur_brain" data-aos="fade-right" />
        <img src={Cur_world} alt="" className="cur_world" data-aos="fade-left" />
        <img src={Cur_line} alt="" className="cur_line" />
      </div>
    </div>
  );
};
