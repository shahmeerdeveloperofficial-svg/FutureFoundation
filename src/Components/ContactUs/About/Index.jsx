import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const ContactSection = () => {
  return (
    <div className="contact-wrapper container-fluid p-0 mt-5">
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-title">Head Office</h3>
          <h2 className="office-name">FFS Schools</h2>
          <p className="office-address">
            Baraf Khana Chowk Misrial Road Rwp
          </p>
        </div>
        <div className="contact-map">
          <iframe
            title="Future Foundation School Head Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.19232627058!2d74.2005!3d32.1694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eead20ac42f1b%3A0x56e96365e6a85ee8!2sRILLS%20SCHOOL!5e0!3m2!1sen!2s!4v1700000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
