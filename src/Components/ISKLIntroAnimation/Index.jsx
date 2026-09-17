import { useState, useEffect, useRef } from "react";
import "./ISKLIntroAnimation.css";
import Logo from "../../assets/images/logo.png";
import DreamVideo from "../../assets/video/DREAM.mp4";
import HeroImg1 from "../../assets/images/hero_one.png";
import HeroImg2 from "../../assets/images/hero_two.png";
import OutdoorImg from "../../assets/images/doc/outdoor-trips.png";
import { FaPause, FaPlay } from "react-icons/fa";

export const ISKLIntroAnimation = () => {
  const [show, setShow] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const timerRef = useRef(null);

  const finishAnimation = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShow(false);
    }, 650);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        finishAnimation();
      }, 4600);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused((prev) => {
      const next = !prev;
      if (videoRef1.current) {
        if (next) videoRef1.current.pause();
        else videoRef1.current.play();
      }
      if (videoRef2.current) {
        if (next) videoRef2.current.pause();
        else videoRef2.current.play();
      }
      return next;
    });
  };

  if (!show) return null;

  return (
    <div
      className={`iskl_intro_overlay ${isExiting ? "iskl_intro_exiting" : ""}`}
      role="region"
      aria-label="Welcome animation"
    >
      {/* Top Left Pause/Play Toggle */}
      <div className="iskl_intro_top_controls">
        <button
          type="button"
          className="iskl_intro_pause_btn"
          onClick={togglePause}
          aria-label={isPaused ? "Play animation" : "Pause animation"}
        >
          {isPaused ? <FaPlay size={14} /> : <FaPause size={14} />}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="iskl_intro_content">
        {/* Top Centered Logo */}
        <div className="iskl_intro_logo_wrapper">
          <img
            src={Logo}
            alt="Future Foundational School Logo"
            className="iskl_intro_logo"
          />
        </div>

        {/* Typographic Pill Grid (Know, Care, Create, Lead) */}
        <div className="iskl_intro_grid">
          {/* Row 1: Know [Pill 1] Care [Pill 2] */}
          <div className="iskl_intro_row iskl_row_1">
            <span className="iskl_intro_text">Know</span>
            <div className="iskl_intro_pill iskl_pill_1">
              <video
                ref={videoRef1}
                src={DreamVideo}
                autoPlay
                muted
                loop
                playsInline
                className="iskl_pill_video"
              />
            </div>
            <span className="iskl_intro_text">Care</span>
            <div className="iskl_intro_pill iskl_pill_2">
              <img
                src={HeroImg2}
                alt="FFS Students Learning"
                className="iskl_pill_img"
              />
            </div>
          </div>

          {/* Row 2: [Pill 3] Create [Pill 4] */}
          <div className="iskl_intro_row iskl_row_2">
            <div className="iskl_intro_pill iskl_pill_3">
              <img
                src={OutdoorImg}
                alt="FFS Campus Innovation"
                className="iskl_pill_img"
              />
            </div>
            <span className="iskl_intro_text">Create</span>
            <div className="iskl_intro_pill iskl_pill_4">
              <video
                ref={videoRef2}
                src={DreamVideo}
                autoPlay
                muted
                loop
                playsInline
                className="iskl_pill_video"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Skip Animation Button (Identical to ISKL) */}
      <div className="iskl_intro_bottom_left">
        <button
          type="button"
          className="iskl_skip_btn"
          onClick={finishAnimation}
        >
          <span>SKIP ANIMATION</span>
          <div className="iskl_skip_accent_corner" />
        </button>
      </div>
    </div>
  );
};
