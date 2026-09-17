import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { MdZoomIn, MdClose, MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

// Import all 26 gallery images
import img01 from "../../../assets/images/gallery/ffs_gallery_01.jpeg";
import img02 from "../../../assets/images/gallery/ffs_gallery_02.jpeg";
import img03 from "../../../assets/images/gallery/ffs_gallery_03.jpeg";
import img04 from "../../../assets/images/gallery/ffs_gallery_04.jpeg";
import img05 from "../../../assets/images/gallery/ffs_gallery_05.jpeg";
import img06 from "../../../assets/images/gallery/ffs_gallery_06.jpeg";
import img07 from "../../../assets/images/gallery/ffs_gallery_07.jpeg";
import img08 from "../../../assets/images/gallery/ffs_gallery_08.jpeg";
import img09 from "../../../assets/images/gallery/ffs_gallery_09.jpeg";
import img10 from "../../../assets/images/gallery/ffs_gallery_10.jpeg";
import img11 from "../../../assets/images/gallery/ffs_gallery_11.jpeg";
import img12 from "../../../assets/images/gallery/ffs_gallery_12.jpeg";
import img13 from "../../../assets/images/gallery/ffs_gallery_13.jpeg";
import img14 from "../../../assets/images/gallery/ffs_gallery_14.jpeg";
import img15 from "../../../assets/images/gallery/ffs_gallery_15.jpeg";
import img16 from "../../../assets/images/gallery/ffs_gallery_16.jpeg";
import img17 from "../../../assets/images/gallery/ffs_gallery_17.jpeg";
import img18 from "../../../assets/images/gallery/ffs_gallery_18.jpeg";
import img19 from "../../../assets/images/gallery/ffs_gallery_19.jpeg";
import img20 from "../../../assets/images/gallery/ffs_gallery_20.jpeg";
import img21 from "../../../assets/images/gallery/ffs_gallery_21.jpeg";
import img22 from "../../../assets/images/gallery/ffs_gallery_22.jpeg";
import img23 from "../../../assets/images/gallery/ffs_gallery_23.jpeg";
import img24 from "../../../assets/images/gallery/ffs_gallery_24.jpeg";
import img25 from "../../../assets/images/gallery/ffs_gallery_25.jpeg";
import img26 from "../../../assets/images/gallery/ffs_gallery_26.jpeg";

const galleryData = [
  {
    id: 1,
    image: img01,
    category: "campus",
    badge: "State-of-the-Art Campus",
    title: "Future Foundation School Main Campus",
    description: "Our purpose-built campus features modern architectural infrastructure, spacious smart classrooms, and world-class educational amenities designed to inspire future leaders."
  },
  {
    id: 2,
    image: img02,
    category: "sports",
    badge: "Sports Gala",
    title: "Vibrant Cheerleading & Athletic Spirit",
    description: "Students demonstrating teamwork, physical agility, and enthusiasm during the annual sports gala on our lush green international-standard turf grounds."
  },
  {
    id: 3,
    image: img03,
    category: "sports",
    badge: "Annual Sports Day",
    title: "Annual Sports Day Celebration",
    description: "Future Foundation School & FD College students and faculty coming together to celebrate energetic sportsmanship, discipline, and healthy athletic competition."
  },
  {
    id: 4,
    image: img04,
    category: "academics",
    badge: "Excellence Awards",
    title: "Recognizing Academic Stars",
    description: "Our visionary leadership and honorable guests honoring exceptional students with prestigious merit trophies and scholarships for outstanding academic performance."
  },
  {
    id: 5,
    image: img05,
    category: "events",
    badge: "Character & Values",
    title: "Soulful Dua & Islamic Values",
    description: "Nurturing spiritual enlightenment and moral values in young minds through soulful prayers, Hamd-o-Naat recitation, and Islamic character-building programs."
  },
  {
    id: 6,
    image: img06,
    category: "sports",
    badge: "Track & Field",
    title: "Junior Champions Track Race",
    description: "Energetic junior students competing in fast-paced track events, fostering resilience, active health habits, and a true winning mindset from an early age."
  },
  {
    id: 7,
    image: img07,
    category: "academics",
    badge: "FBISE Top Positions",
    title: "FBISE Result Declaration Ceremony",
    description: "FFS students standing tall alongside honorable federal dignitaries at the official FBISE ceremony after securing historic board positions."
  },
  {
    id: 8,
    image: img26,
    category: "events",
    badge: "Grand Convention",
    title: "Mega Annual Convention & Prize Distribution",
    description: "Chairman Mr. Rana Sohail Ahmed addressing a colossal audience of parents, students, and guests during the grand mega convention in the main auditorium."
  },
  {
    id: 9,
    image: img09,
    category: "events",
    badge: "Annual Festival",
    title: "Colors of Culture & Creativity",
    description: "Students showcasing their artistic talents, public speaking skills, and theatrical performances at the grand annual cultural festival."
  },
  {
    id: 10,
    image: img10,
    category: "academics",
    badge: "1st Position Worldwide",
    title: "Worldwide 1st Position in Federal Board",
    description: "Celebrating our star student Aqsa Farooq for securing 1st Position Worldwide in the Federal Board (SSC-II Humanities Group) with remarkable distinction."
  },
  {
    id: 11,
    image: img11,
    category: "campus",
    badge: "Interactive Learning",
    title: "Collaborative Learning Environments",
    description: "Engaging classroom environments where dedicated educators guide students through experiential learning, STEM inquiry, and creative exploration."
  },
  {
    id: 12,
    image: img12,
    category: "events",
    badge: "Leadership & Honors",
    title: "Student Council Investiture",
    description: "Badging future leaders and instilling a sense of responsibility, civic duty, integrity, and proactive leadership across student houses."
  },
  {
    id: 13,
    image: img13,
    category: "sports",
    badge: "Sports Gala Medals",
    title: "Trophy & Medal Distribution",
    description: "Proud athletic champions receiving medals and certificates for exemplary performances in football, cricket, sprint races, and gymnastics."
  },
  {
    id: 14,
    image: img14,
    category: "academics",
    badge: "Merit Distinction",
    title: "Academic Honor Roll Awards",
    description: "Honoring high achievers who attained A+ grades across various disciplines with gold medals and certificates of distinction."
  },
  {
    id: 15,
    image: img15,
    category: "events",
    badge: "Stage & Drama",
    title: "Junior Angels Stage Performance",
    description: "Early childhood education students captivating audiences with melodious national songs, patriotic tableaux, and heartfelt stage presentations."
  },
  {
    id: 16,
    image: img16,
    category: "sports",
    badge: "Team Spirit",
    title: "Inter-House Football & Games",
    description: "Fostering camaraderie, tactical coordination, and physical fitness through thrilling inter-house sports leagues and matches."
  },
  {
    id: 17,
    image: img17,
    category: "events",
    badge: "National Days",
    title: "Pakistan Day & Independence Celebrations",
    description: "Instilling deep patriotism and national pride as students present inspiring speeches, national anthems, and colorful flag ceremonies."
  },
  {
    id: 18,
    image: img18,
    category: "academics",
    badge: "Board Position Holders",
    title: "Exemplary Board Results",
    description: "Our dedicated faculty standing proudly with top board achievers who set new benchmarks for educational excellence nationwide."
  },
  {
    id: 19,
    image: img19,
    category: "campus",
    badge: "Science & Robotics",
    title: "Hands-on Science & Innovation Lab",
    description: "Empowering curious minds with modern science laboratories, robotics kits, and digital experiments to pioneer future scientific breakthroughs."
  },
  {
    id: 20,
    image: img20,
    category: "academics",
    badge: "Historic Distinction",
    title: "Grand Felicitation of Top Achievers",
    description: "Chairman Mr. Rana Sohail Ahmed and school leaders presenting special honors to national-level high achievers and their proud families."
  },
  {
    id: 21,
    image: img21,
    category: "sports",
    badge: "Athletic Excellence",
    title: "Annual Sports Champions on the Podium",
    description: "Young champions displaying true sportsmanship and celebration after winning gold, silver, and bronze in rigorous track and field events."
  },
  {
    id: 22,
    image: img22,
    category: "events",
    badge: "Annual Function",
    title: "Grand Annual Function & Musical Tableaux",
    description: "A spectacular celebration of student creativity, drama, educational skits, and traditional performances before a packed audience."
  },
  {
    id: 23,
    image: img23,
    category: "campus",
    badge: "Early Childhood",
    title: "Montessori & Playgroup Learning Zone",
    description: "A joyful, secure, and sensorial learning environment designed to build early cognitive skills, motor coordination, and curiosity."
  },
  {
    id: 24,
    image: img24,
    category: "events",
    badge: "Youth Talent Hunt",
    title: "Talent Hunt & Public Speaking Gala",
    description: "Encouraging students to discover their unique voice, oratory skills, artistic talents, and creative writing through annual competitions."
  },
  {
    id: 25,
    image: img25,
    category: "events",
    badge: "Khidmat-e-Walidain",
    title: "Respect for Parents & Moral Values",
    description: "Inculcating deep Islamic ethics and emotional bonding through our cherished Khidmat-e-Walidain tradition, teaching students humility and reverence for mothers."
  },
  {
    id: 26,
    image: img08,
    category: "academics",
    badge: "Board Position Recognition",
    title: "National Pride & Academic Glories",
    description: "Honoring our exceptional high achievers whose brilliant board results bring immense pride and distinction to Future Foundation School."
  }
];

const categories = [
  { key: "all", label: "All Memories", count: 26 },
  { key: "sports", label: "Sports & Gala", count: 8 },
  { key: "academics", label: "Academic & Awards", count: 6 },
  { key: "events", label: "Events & Conventions", count: 8 },
  { key: "campus", label: "Campus Life", count: 4 }
];

export const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      once: true
    });
  }, []);

  const filteredData = activeFilter === "all"
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  const displayedData = filteredData.slice(0, visibleCount);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % displayedData.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + displayedData.length) % displayedData.length);
  };

  return (
    <section className="gallery_section position-relative">

      <div className="container position-relative gallery_container">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="gallery_badge">CAMPUS LIFE & MEMORIES</span>
          <h2 className="gallery_main_title">Glimpses of Excellence & Vibrant Life at FFS</h2>
          <div className="gallery_title_underline"></div>
          <p className="gallery_main_desc">
            Discover the vibrant journey at Future Foundation School — from record-setting worldwide board positions and high-energy annual sports galas to soul-inspiring character-building events and dynamic stage celebrations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="gallery_filter_wrapper mb-5" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`gallery_filter_btn ${activeFilter === cat.key ? "active" : ""}`}
              onClick={() => {
                setActiveFilter(cat.key);
                setVisibleCount(12);
              }}
            >
              {cat.label}
              <span className="filter_count_tag">{cat.key === "all" ? galleryData.length : galleryData.filter(i => i.category === cat.key).length}</span>
            </button>
          ))}
        </div>

        {/* 4 Columns per Row Responsive Grid */}
        <div className="row g-4 gallery_grid">
          {displayedData.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
            >
              <div className="gallery_card h-100">
                <div className="gallery_img_wrapper" onClick={() => openLightbox(index)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery_img"
                    loading="lazy"
                  />
                  <div className="gallery_img_overlay">
                    <span className="gallery_zoom_btn">
                      <MdZoomIn className="zoom_icon" />
                    </span>
                    <span className="gallery_view_hint">Click to enlarge</span>
                  </div>
                  <span className="gallery_category_badge">{item.badge}</span>
                </div>

                <div className="gallery_card_body">
                  <h3 className="gallery_card_title">{item.title}</h3>
                  <p className="gallery_card_desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show All Button */}
        {visibleCount < filteredData.length && (
          <div className="text-center mt-5" data-aos="fade-up">
            <button
              className="gallery_load_more_btn"
              onClick={() => setVisibleCount(filteredData.length)}
            >
              View All {filteredData.length} Pictures
              <span className="btn_glow_circle"></span>
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImageIndex !== null && displayedData[selectedImageIndex] && (
        <div className="gallery_lightbox_overlay" onClick={closeLightbox}>
          <div className="gallery_lightbox_content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox_close_btn" onClick={closeLightbox} aria-label="Close image">
              <MdClose />
            </button>

            <button
              className="lightbox_nav_btn lightbox_prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <MdNavigateBefore />
            </button>

            <button
              className="lightbox_nav_btn lightbox_next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <MdNavigateNext />
            </button>

            <div className="lightbox_img_box">
              <img
                src={displayedData[selectedImageIndex].image}
                alt={displayedData[selectedImageIndex].title}
                className="lightbox_img"
              />
            </div>

            <div className="lightbox_caption">
              <span className="lightbox_badge">{displayedData[selectedImageIndex].badge}</span>
              <h3 className="lightbox_title">{displayedData[selectedImageIndex].title}</h3>
              <p className="lightbox_desc">{displayedData[selectedImageIndex].description}</p>
              <span className="lightbox_counter">
                {selectedImageIndex + 1} of {displayedData.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
