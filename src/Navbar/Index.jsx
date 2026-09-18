import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdArrowForward,
} from "react-icons/md";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";
import navbarlinks from "../Data/navbar";
import { AnnouncementBanner } from "../Components/AnnouncementBanner/Index";

export const CustomNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", mobileOpen);
    return () => document.body.classList.remove("mobile-nav-open");
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const reloadWebsite = (event) => {
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <>
      <AnnouncementBanner />
      <header className="container-fluid navbar_bg">
        <div className="container-fluid px-3 px-xl-5 position-relative">
          <div className="d-flex justify-content-between align-items-center navbar-inner-row">
            <a href="/" onClick={reloadWebsite} className="navbar-brand-link">
              <img src={Logo} alt="Future Foundation School Logo" className="navbar-logo" />
              <div className="navbar-brand-text">
                <span className="navbar-brand-title">FUTURE FOUNDATION</span>
                <span className="navbar-brand-subtitle">SCHOOL &amp; COLLEGE</span>
              </div>
            </a>
            <div className="d-none d-lg-block">
              <nav className="d-flex gap-lg-2 gap-xl-3 align-items-center" aria-label="Main Navigation">
                {navbarlinks.map((link, index) => (
                  <div
                    key={index}
                    className="position-relative"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="navbar_link">
                      {link.menuItems ? (
                        <>
                          <span>{link.label}</span>
                          {openDropdown === index ? (
                            <MdKeyboardArrowUp className="navbar_icon" />
                          ) : (
                            <MdKeyboardArrowDown className="navbar_icon" />
                          )}
                        </>
                      ) : (
                        <Link className="lms_page" to={link.link}>
                          {link.label}
                        </Link>
                      )}
                    </div>

                    {/* Dropdown Menu */}
                    {openDropdown === index && link.menuItems && (
                      <div className="dropdown_menu">
                        {link.menuItems.map((item, i) => (
                          <Link
                            to={item.link}
                            className="dropdown_item"
                            key={i}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="d-none d-lg-block">
                <Link to="/admissionnow" style={{ textDecoration: "none", color: "inherit" }}>
                  <button className="navbar_btn" type="button">
                    Admission Now
                    <div className="navbar_circle">
                      <MdArrowForward className="navbar_circle_icon" />
                    </div>
                  </button>
                </Link>
              </div>
              <div className="navbar_toggle d-lg-none">
                <button
                  className="navbar_toggle_btn"
                  type="button"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen((isOpen) => !isOpen)}
                >
                  {mobileOpen ? <IoClose /> : <IoReorderThreeOutline />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {mobileOpen && <button className="mobile_nav_backdrop" type="button" aria-label="Close menu" onClick={closeMobileMenu} />}
      <nav className={`mobile_nav_panel ${mobileOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
        <div className="mobile_nav_header">
          <a href="/" className="navbar-brand-link mobile-brand-link" onClick={(event) => {
            closeMobileMenu();
            reloadWebsite(event);
          }}>
            <img src={Logo} alt="Future Foundation School Logo" className="mobile_nav_logo" />
            <div className="navbar-brand-text">
              <span className="navbar-brand-title">FUTURE FOUNDATION</span>
              <span className="navbar-brand-subtitle">SCHOOL &amp; COLLEGE</span>
            </div>
          </a>
          <button className="mobile_nav_close" type="button" aria-label="Close menu" onClick={closeMobileMenu}>
            <IoClose />
          </button>
        </div>
        <div className="mobile_nav_links">
          {navbarlinks.map((link, index) => (
            <div className="mobile_nav_group" key={index}>
              {link.menuItems ? (
                <>
                  <button
                    className="mobile_nav_parent"
                    type="button"
                    aria-expanded={mobileDropdown === index}
                    onClick={() => setMobileDropdown((current) => (current === index ? null : index))}
                  >
                    <span>{link.label}</span>
                    {mobileDropdown === index ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                  </button>
                  <div className={`mobile_submenu ${mobileDropdown === index ? "is-open" : ""}`}>
                    {link.menuItems.map((item, i) => (
                      <Link to={item.link} className="mobile_submenu_item" key={i} onClick={closeMobileMenu}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link className="mobile_nav_parent mobile_nav_link" to={link.link} onClick={closeMobileMenu}>
                  <span>{link.label}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
        <Link to="/admissionnow" className="mobile_admission_link" onClick={closeMobileMenu}>
          Admission Now
          <MdArrowForward />
        </Link>
      </nav>
    </>
  );
};

