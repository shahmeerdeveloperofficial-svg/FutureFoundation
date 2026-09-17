import React from "react";
import "./Footer.css";
import Logo from "../assets/images/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Cloud from "../assets/images/facilities/cloud.png";
import Sun from "../assets/images/facilities/sun.png";
import Person from "../assets/images/facilities/per.png";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const handleContactNavigate = () => {
  window.location.href = "/contact-us";
};

export const Footer = () => {
  return (
    <footer className="container-fluid footer_bg p-0 mt-4">
      <div className="container footer_main position-relative">
        <img src={Person} alt="" className="footer-person" />
        <img src={Cloud} alt="" className="footer-cloud" />
        <img src={Cloud} alt="" className="footer-cloud-one" />
        <img src={Sun} alt="" className="footer-sun" />
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={Logo} alt="" className="footer_logo" />
          <p className="footer_desp">
            Founded in 1998, Future Foundation School was established with a singular, profound mission: to inspire critical thinkers and challenge students to view the world with curiosity and wonder.
          </p>
        </div>
        <div className="row mt-4">
          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="link_item">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <a
                  href="/"
                  className="text-decoration-none text-white footer_link"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white footer_link bg-transparent border-0 link"
                  onClick={() => {
                    const element = document.querySelector("#about");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="/admission-process" className="text-decoration-none text-white footer_link">
                  Admission Process
                </a>
              </li>
              <li>
                <a
                  onClick={handleContactNavigate}
                  className="text-decoration-none text-white footer_link link"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Others */}
          <div className="col-md-3">
            <h5 className="link_item">Others</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <a href="/franchise-offer" className="text-decoration-none text-white footer_link">
                  Silent Features
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-decoration-none text-white footer_link">Feedback</a>
              </li>
              <li>
                <a href="/contact-us" className="text-decoration-none footer_link">Complain</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-md-3">
            <h5 className="link_item">Contact Details</h5>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3">
                <IoLocationOutline className="footer_icon" />
                <p className="footer_loc">
                  Baraf Khana Chowk Misrial Road Rawalpindi
                </p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <MdOutlinePhone className="footer_icon" />
                <div className="d-flex flex-column gap-1">
                  <a href="tel:+447405431552" className="footer_loc footer_phone_link">
                    +44 740 543 1552
                  </a>
                  <a href="tel:+96878818854" className="footer_loc footer_phone_link">
                    +968 788 188 54
                  </a>
                  <a href="tel:+966590331742" className="footer_loc footer_phone_link">
                    +966 590 331 742
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <MdOutlineEmail className="footer_icon" />
                <p className="footer_loc">info@fttrack.pk</p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-md-3">
            <h5 className="link_item">Subscribe our Newsletter</h5>
            <div className="footer_input">
              <input
                type="email"
                className="footer_input_body"
                placeholder="Email"
              />
              <button className="footer_btn">
                <IoIosSend />
              </button>
            </div>
            <div className="d-flex align-items-center gap-3 mt-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebookF className="footer_icon" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram className="footer_icon" />
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer">
                <FaXTwitter className="footer_icon" />
              </a>
            </div>
          </div>
        </div>
        <p className="footer_copyright">
          Copyright © 2024 Future Foundation Schools. All Right Reserved.
        </p>
        <div className="d-flex justify-content-center">
          <div className="footer_line" />
        </div>
      </div>
    </footer>
  );
};
