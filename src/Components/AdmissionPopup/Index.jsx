import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaTimes } from "react-icons/fa";
import "./AdmissionPopup.css";
import AdmissionPoster from "../../assets/images/admission_popup_poster.jpg";

const STORAGE_KEY = "ffs-admission-popup-dismissed";

export const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const dismissed = window.sessionStorage.getItem(STORAGE_KEY) === "1";
      if (!dismissed) {
        const timer = window.setTimeout(() => setIsOpen(true), 3200);
        return () => window.clearTimeout(timer);
      }
    } catch {
      const timer = window.setTimeout(() => setIsOpen(true), 3200);
      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    try {
      document.body.style.overflow = isOpen ? "hidden" : "";
    } catch {}

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      try {
        document.body.style.overflow = "";
      } catch {}
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleClose = () => {
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(STORAGE_KEY, "1");
      }
    } catch {}
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="admission-popup__overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admission-popup-title"
      aria-describedby="admission-popup-description"
      onClick={handleClose}
    >
      <div className="admission-popup__card" onClick={(event) => event.stopPropagation()}>
        <h2 id="admission-popup-title" className="visually-hidden">
          Admissions Open 2026-2027 - Future Foundation School
        </h2>
        <p id="admission-popup-description" className="visually-hidden">
          Online admissions are open from Montessori to College level. Click to apply online.
        </p>

        <button
          type="button"
          className="admission-popup__close"
          onClick={handleClose}
          aria-label="Close admission popup"
        >
          <FaTimes />
        </button>

        <div className="admission-popup__poster-shell">
          <div className="admission-popup__poster-stage">
            <Link
              to="/admissionnow"
              onClick={handleClose}
              aria-label="Apply online for Future Foundation School Admissions 2026-27"
              title="Click to apply online - Future Foundation School Admissions Open"
            >
              <img
                src={AdmissionPoster}
                alt="Future Foundation School Online Admissions Open 2026-27"
                className="admission-popup__poster-image"
                width="600"
                height="600"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
