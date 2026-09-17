import React from "react";
import { FaAward, FaCertificate, FaGlobe, FaShieldAlt, FaBookOpen } from "react-icons/fa";

const recognitions = [
  {
    icon: <FaAward size={36} color="#f2cd00" />,
    title: "1st Position Worldwide",
    subtitle: "Federal Board (FBISE) Examinations (2019 & 2024)",
  },
  {
    icon: <FaCertificate size={36} color="#00a396" />,
    title: "STEAM & AI Accredited",
    subtitle: "21st-Century Digital Curriculum Framework",
  },
  {
    icon: <FaBookOpen size={36} color="#3475ba" />,
    title: "Montessori Certified",
    subtitle: "Early Childhood Practical Life & Sensory Learning",
  },
  {
    icon: <FaGlobe size={36} color="#f2cd00" />,
    title: "70+ Nationwide Campuses",
    subtitle: "Pakistan’s Leading Network of School Excellence",
  },
  {
    icon: <FaShieldAlt size={36} color="#00a396" />,
    title: "Qur'an & Values Integrated",
    subtitle: "Character Formation & Ethical Mentorship",
  },
];

export const AccreditationsSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
      <div className="container text-center">
        <span className="iskl_section_tag">Recognition & Standards</span>
        <h3 className="iskl_section_heading mb-4" style={{ fontSize: "1.8rem" }}>
          Affiliations, Recognitions & <span>Excellence Awards</span>
        </h3>

        <div className="row g-4 justify-content-center mt-2">
          {recognitions.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="p-4 bg-white rounded-3 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center text-center border" style={{ transition: "transform 0.25s ease" }}>
                <div className="mb-3">{item.icon}</div>
                <h5 style={{ fontWeight: 700, color: "var(--primary-color)", fontSize: "1.1rem" }}>{item.title}</h5>
                <p className="m-0 text-muted" style={{ fontSize: "0.88rem" }}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

