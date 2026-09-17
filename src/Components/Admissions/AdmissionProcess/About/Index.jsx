import React, { useEffect } from "react";
import "./About.css";
import AdmProcessLeft from "../../../../assets/images/admission/adm_process_left.svg";
import AdmProcessRight from "../../../../assets/images/admission/adm_process_right.svg";
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
    <div className="container-fluid py-5 bg-admissionpro-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="admissionpro-img-wrapper">
              <img src={AdmProcessLeft} alt="Admission Process & Enrollment" className="admissionpro-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="admissionpro-about-title">Admission Process</h1>
            <div className="admissionpro-title-line"></div>
            <p className="admissionpro-about-desp">
              The admission process at Future Foundation Schools is designed to be simple, transparent, and welcoming. We believe that personal interaction between parents or authorized guardians, the prospective student, and our school representatives carries far greater value than any conventional entrance exam.
            </p>
            <p className="admissionpro-about-desp">
              This process is designed to provide insight into the educational approach and environment you desire for your child, while giving us a glimpse of the child's unique strengths, learning needs, and potential. It also offers you, as parents, a firsthand opportunity to experience how our students and faculty engage, explore our comprehensive curricula, and understand our core educational philosophy.
            </p>
            <p className="admissionpro-about-desp">
              <strong>Admissions Timeline:</strong> The admission cycle at Future Foundation Schools opens on December 15th and closes on January 15th annually. Admissions are granted on a first-come, first-served basis subject to seat availability.
            </p>
            <h3 className="admissionpro-about-desp-head">
              Steps to Apply
            </h3>
            <div className="admissionpro-specs text-start">
              <p>
                <span>Step 1</span> - Inquiry & Orientation: Visit the Future Foundation Schools admission office to receive an orientation and a school prospectus detailing our philosophy, academic approach, and offerings. For specialized queries, you may request a personal appointment with the School Principal.
              </p>
              <p>
                <span>Step 2</span> - Application & Documentation: Complete the formal Application Form and all required secondary forms. Please submit them to the admission office along with the following mandatory documents:
              </p>
              <ul className="admission-specs-list">
                <li>One (1) recent passport-sized photograph of the child</li>
                <li>A copy of the child's Birth Certificate or B-Form</li>
                <li>Academic records or transcripts for the last three years (if applicable)</li>
                <li>Certificates of achievement or extra-curricular records (if any)</li>
                <li>Official School Leaving/Transfer Certificate from the previous institution</li>
                <li>Completed Student Health Form (if applicable)</li>
              </ul>
              <p>
                <span>Step 3</span> - Interaction & Readiness Assessment: Playgroup to Grade 7. Once your application is reviewed, the school will schedule an interactive meeting or a diagnostic placement assessment with a designated section head or evaluating teacher. This step helps us evaluate your child's grade readiness. Final admission offers are issued based on the evaluation and decision of the Admissions Committee.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="admissionpro-img-wrapper">
              <img src={AdmProcessRight} alt="Student Assessment & Readiness" className="admissionpro-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
