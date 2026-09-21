import React from "react";
import "./Footer.css";
import Logo from "../assets/images/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const handleContactNavigate = () => {
  window.location.href = "/contact-us";
};

export const Footer = () => {
  return (
    <footer className="footer_root">
      {/* Top Gold & Royal Blue Accent Line */}
      <div className="footer_top_accent" />

      <div className="container footer_container">
        <div className="row g-4 justify-content-between">
          {/* Col 1: Brand Info & Mission */}
          <div className="col-lg-4 col-md-6 footer_brand_col">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img src={Logo} alt="Future Foundation School Logo" className="footer_logo" />
              <div>
                <span className="footer_brand_title">FUTURE FOUNDATION</span>
                <span className="footer_brand_subtitle">SCHOOL &amp; COLLEGE</span>
              </div>
            </div>
            <p className="footer_brand_text">
              Founded in 1998, Future Foundation School inspires critical thinkers and cultivates global leaders across our network of 70+ campuses in Pakistan.
            </p>
            <div className="footer_social_wrap">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="footer_social_btn"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="footer_social_btn"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="footer_social_btn"
                aria-label="X Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://wa.me/92510000007"
                target="_blank"
                rel="noreferrer"
                className="footer_social_btn"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-lg-2 col-6 footer_links_col">
            <h5 className="footer_heading">Quick Links</h5>
            <ul className="footer_links_list">
              <li>
                <a href="/" className="footer_link">Home</a>
              </li>
              <li>
                <a
                  className="footer_link footer_link_btn"
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
                <a href="/our-campuses" className="footer_link">Our Campuses</a>
              </li>
              <li>
                <a href="/admission-process" className="footer_link">Admission Process</a>
              </li>
              <li>
                <a onClick={handleContactNavigate} className="footer_link footer_link_btn">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academics & Network */}
          <div className="col-lg-2 col-6 footer_links_col">
            <h5 className="footer_heading">Academics</h5>
            <ul className="footer_links_list">
              <li>
                <a href="/montessori-wing" className="footer_link">Montessori Wing</a>
              </li>
              <li>
                <a href="/ai-robotics" className="footer_link">AI &amp; Robotics</a>
              </li>
              <li>
                <a href="/steam" className="footer_link">STEAM Learning</a>
              </li>
              <li>
                <a href="/digital-education" className="footer_link">Digital Education</a>
              </li>
              <li>
                <a href="/franchise-model" className="footer_link">Franchise Model</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div className="col-lg-4 col-md-6 footer_contact_col">
            <h5 className="footer_heading">Contact Details</h5>
            <ul className="footer_contact_list">
              <li className="d-flex align-items-start gap-2">
                <IoLocationOutline className="footer_c_icon mt-1" />
                <span className="footer_c_text">Baraf Khana Chowk Misrial Road Rawalpindi</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <MdOutlinePhone className="footer_c_icon" />
                <div className="d-flex gap-2 flex-wrap">
                  <a href="tel:+447405431552" className="footer_phone_link">+44 740 543 1552</a>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
                  <a href="tel:+96878818854" className="footer_phone_link">+968 788 188 54</a>
                </div>
              </li>
              <li className="d-flex align-items-center gap-2">
                <MdOutlineEmail className="footer_c_icon" />
                <a href="mailto:info@fttrack.pk" className="footer_phone_link">info@fttrack.pk</a>
              </li>
            </ul>

            <div className="footer_newsletter_wrap mt-3">
              <span className="footer_newsletter_label">Subscribe for Updates</span>
              <form onSubmit={(e) => e.preventDefault()} className="footer_newsletter_form">
                <input
                  type="email"
                  className="footer_newsletter_input"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="footer_newsletter_btn" aria-label="Subscribe">
                  <IoIosSend />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Divider */}
        <div className="footer_bottom_bar">
          <p className="footer_copyright_text">
            Copyright &copy; 2026 Future Foundation Schools. All Rights Reserved.
          </p>
          <p className="footer_tagline_text">
            Nurturing Tomorrow&apos;s Leaders Today
          </p>
        </div>
      </div>
    </footer>
  );
};
