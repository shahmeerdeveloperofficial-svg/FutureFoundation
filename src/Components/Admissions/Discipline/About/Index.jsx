import React, { useEffect } from "react";
import "./About.css";
import DressCodeLeft from "../../../../assets/images/admission/dress_code_left.svg";
import DressCodeRight from "../../../../assets/images/admission/dress_code_right.svg";
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
    <div className="container-fluid py-5 bg-discipline-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="discipline-img-wrapper">
              <img src={DressCodeLeft} alt="School Uniform Guidelines" className="discipline-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="discipline-about-title">Dress Code & Grooming Regulations</h1>
            <div className="discipline-title-line"></div>
            <p className="discipline-about-desp">
              The discipline, conduct, and dress code regulations at Future Foundation Schools are designed to help students maintain a high standard of personal appearance that aligns with our institutional values. Every student is expected to demonstrate pride in their appearance, as it reflects on both the individual and our school community as a whole. An essential part of character building and career preparation is learning to dress appropriately for different environments and occasions.
            </p>
            <p className="discipline-about-desp">
              Future Foundation Schools strives to cultivate a learning environment where dress and grooming standards minimize distractions, promote school pride, and foster professionalism. By establishing a standardized dress code, we aim to eliminate negative peer pressures associated with fashion trends, support a safe campus environment, and contribute to a productive, positive, and focused academic atmosphere.
            </p>
            <h3 className="discipline-about-title2">
              Approved School Uniform Guidelines
            </h3>
            <div className="discipline-specs-container text-start">
              <p className="fw-semibold">All students must wear the prescribed uniform in the correct size and fit. Clothing that is oversized, altered to be excessively tight, torn, or modified from its original design is strictly prohibited.</p>
              
              <h5 className="uniform-subhead">1. Pre-School Girls (Montessori Junior, Senior, & Advanced)</h5>
              <ul className="discipline-specs-list">
                <li>
                  <strong>Frock:</strong> Blue and white striped frock featuring a white baby collar and white cuffs. The hemline must be finished with three navy blue ribbons.
                </li>
                <li><strong>Tights:</strong> Plain white tights of the appropriate size.</li>
              </ul>

              <h5 className="uniform-subhead">2. Girls Uniform (Grades 1 to 10)</h5>
              <ul className="discipline-specs-list">
                <li><strong>Qameez / Shirt:</strong> Blue and white striped shirt featuring a white coat collar and white cuffs.</li>
                <li><strong>Shalwar:</strong> Plain white, standard-fit shalwar. Tight-fitting variants or decorative borders on the shalwar are strictly prohibited.</li>
                <li><strong>Scarves/Hijab:</strong> White visor-style headscarf featuring a navy blue strip.</li>
              </ul>

              <h5 className="uniform-subhead">3. Boys Uniform (Montessori Junior to Grade 10)</h5>
              <ul className="discipline-specs-list">
                <li><strong>Pants:</strong> Tailored navy blue trousers. Sweatpants, jeans, spandex, or lounge/sleepwear are not permitted. Pants must fit properly at the waist, hips, and length.</li>
                <li><strong>Shirt:</strong> Blue and white checkered dress shirt with plain white cuffs and collars. All shirts must have long sleeves and must be kept neatly tucked in at all times.</li>
              </ul>

              <h5 className="uniform-subhead">Footwear Requirements (All Grades)</h5>
              <p className="mb-2">To maintain safety and uniformity across the campus, the footwear policy is strictly enforced for all students:</p>
            </div>
            
            <div className="uniform-table-wrap">
              <table className="uniform-table">
                <thead>
                  <tr>
                    <th>Approved Footwear</th>
                    <th>Prohibited Footwear</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>Clean Black Shoes/Boots</li>
                        <li>Plain Black Socks</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Combat boots or steel-toed work boots</li>
                        <li>Backless sandals, flip-flops, or slippers</li>
                        <li>High heels exceeding one (1) inch</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="discipline-img-wrapper">
              <img src={DressCodeRight} alt="Discipline & Campus Standards" className="discipline-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
