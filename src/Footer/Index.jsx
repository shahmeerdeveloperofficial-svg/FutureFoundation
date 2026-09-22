import React from "react";
import "./Footer.css";
import Logo from "../assets/images/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

export const Footer = () => {
  const handleScrollAbout = (e) => {
    e.preventDefault();
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#about";
    }
  };

  return (
    <footer className="footer_root">
      {/* Top Gold & Royal Blue Accent Line */}
      <div className="footer_top_accent" />

      <div className="container footer_container">
        <div className="row g-4 footer_row">
          {/* Col 1: Brand Info & Mission */}
          <div className="col-lg-4 col-md-12 footer_brand_col">
            <div className="footer_brand_header">
              <img src={Logo} alt="Future Foundation School Logo" className="footer_logo" />
              <div className="footer_brand_titles">
                <span className="footer_brand_title">FUTURE FOUNDATION</span>
                <span className="footer_brand_subtitle">SCHOOL &amp; COLLEGE</span>
              </div>
            </div>
            <p className="footer_brand_text">
              Founded in 1998, Future Foundation School inspires critical thinkers and cultivates global leaders across 70+ campuses nationwide.
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
                href="https://wa.me/923707503109"
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
                <a href="#about" onClick={handleScrollAbout} className="footer_link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/our-campuses" className="footer_link">Our Campuses</a>
              </li>
              <li>
                <a href="/admission-process" className="footer_link">Admissions</a>
              </li>
              <li>
                <a href="/contact-us" className="footer_link">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academics */}
          <div className="col-lg-2 col-6 footer_links_col">
            <h5 className="footer_heading">Academics</h5>
            <ul className="footer_links_list">
              <li>
                <a href="/montessori-wing" className="footer_link">Montessori</a>
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
          <div className="col-lg-4 col-md-12 footer_contact_col">
            <h5 className="footer_heading">Contact Details</h5>
            <ul className="footer_contact_list">
              <li className="footer_contact_item">
                <IoLocationOutline className="footer_c_icon" />
                <span className="footer_c_text">Baraf Khana Chowk Misrial Road Rawalpindi</span>
              </li>
              <li className="footer_contact_item">
                <MdOutlinePhone className="footer_c_icon" />
                <div className="footer_phones_wrap">
                  <a href="tel:+447405431552" className="footer_phone_link">+44 740 543 1552</a>
                  <span className="footer_sep">|</span>
                  <a href="tel:+96878818854" className="footer_phone_link">+968 788 188 54</a>
                </div>
              </li>
              <li className="footer_contact_item">
                <MdOutlineEmail className="footer_c_icon" />
                <a href="mailto:info@fttrack.pk" className="footer_phone_link">info@fttrack.pk</a>
              </li>
            </ul>

            <div className="footer_newsletter_wrap">
              <span className="footer_newsletter_label">Stay Connected</span>
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

        {/* Bottom Copyright Bar */}
        <div className="footer_bottom_bar">
          <p className="footer_copyright_text">
            &copy; 2026 Future Foundation Schools. All Rights Reserved.
          </p>
          <p className="footer_tagline_text">
            Nurturing Tomorrow&apos;s Leaders Today
          </p>
        </div>
      </div>
    </footer>
  );
};
