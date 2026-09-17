import React, { useEffect } from "react";
import "./About.css";
import CharLeft from "../../../../assets/images/curiculum/char_left.jpg";
import CharRight from "../../../../assets/images/curiculum/char_right.jpg";
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
    <div className="container-fluid py-5 bg-charb-color">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-md-4 d-none d-md-flex justify-content-center" data-aos="fade-right">
            <div className="charb-img-wrapper">
              <img src={CharLeft} alt="Character Building - Moral Values" className="charb-side-img img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center text-center px-lg-4" data-aos="fade-up">
            <h1 className="charb-about-title">Character Building</h1>
            <div className="charb-title-line"></div>
            <p className="charb-about-desp">
              The Holy Prophet Muhammad (PBUH) stated, "Allah does not look at your appearance or your wealth, but He looks at your hearts and your deeds" (Sahih Muslim). The true essence of education extends beyond imparting academic knowledge; it lies in purifying the hearts and minds of individuals, guiding them to lead lives aligned with the will of Allah Almighty. Without sincere intentions (Niyyah), no action holds weight in the sight of the Almighty. While living solely to please oneself or society ultimately leads to failure, true success is found in embracing what pleases Allah and forsaking what He dislikes.
            </p>
            <p className="charb-about-desp">
              At Future Foundation Schools, we are dedicated to nurturing students who embody these divine values and strive to live in accordance with Islamic principles. Our character-building program is purposefully designed to instill a profound sense of moral responsibility and spiritual integrity. We aim to cultivate sound beliefs, sincere devotion in worship, and flawless ethics in human dealings (Muamalat).
            </p>
            <p className="charb-about-desp">
              Students are taught to uphold purity in their intentions, modesty (Haya) in their conduct, and unwavering justice in their interactions. We place a strong emphasis on cultivating Taqwa (consciousness of Allah), Sabr (patience), a careful balance of duties and rights, and a spirit of gratitude (Shukr) in all circumstances. By anchoring our educational framework in these core values, we seek to raise righteous individuals who excel academically while beautifully reflecting the timeless teachings of Islam.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 d-none d-lg-flex justify-content-center" data-aos="fade-left">
            <div className="charb-img-wrapper">
              <img src={CharRight} alt="Character Building - Wisdom & Deeds" className="charb-side-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
