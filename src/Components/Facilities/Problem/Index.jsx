import React, { useEffect } from "react";
import "./Problem.css";
import Rainbow from "../../../assets/images/facilities/rainbow.png";
import Testing from "../../../assets/images/facilities/testing.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const ProblemSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid p-0 mt-5">
      <div className="container position-relative">
        <h1 className="fac-pro-title">Problem Solving</h1>
        <h1 className="fac-about-title">Extra Curricular Activity</h1>
        <div className="d-flex justify-content-center">
          <p className="fac-pro-desp">
            Extra-curricular learning gives students space to think, create, and
            solve problems in practical ways. Through competitions, model
            displays, sports, and talent-based events, students learn how to
            apply knowledge with confidence and teamwork.
          </p>
        </div>
        <img src={Rainbow} alt="" className="fac-pro-raibow-img" />
        <img src={Testing} alt="" className="fac-pro-testing-img" />
        <div className="row">
          <div className="col-lg-4">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
