import { useState, useEffect } from "react";
import logo from "../assets/images/logo.webp";
import Resume from "../assets/Resume/Asif_Nawaz_CV.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import "../assets/css/Header.css";
const NAV_ITEMS = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Services", href: "#services" },
  { id: 4, label: "Portfolio", href: "#portfolio" },
  { id: 5, label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleCloseMenu = () => setIsOpen(false);

  // Smooth scrolling
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // Adjust for fixed navbar height
      const top = target.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(href);
      handleCloseMenu();
    }
  };

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset for navbar
      NAV_ITEMS.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(href);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header_wrapper">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          {/* Logo */}
          <a
            className="navbar-brand"
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
          >
            <img src={logo} className="img-fluid" alt="logo" />
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          {/* Menu */}
          <div
            className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""
              }`}
            id="navbarNav"
          >
            <ul className="navbar-nav menu-navbar-nav">
              {NAV_ITEMS.map(({ id, label, href }) => (
                <li className="nav-item" key={id}>
                  <a
                    href={href}
                    className={`nav-link ${activeSection === href ? "active" : ""
                      }`}
                    onClick={(e) => handleSmoothScroll(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}

              {/* Download CV */}
              <li className="nav-item mt-3 mt-lg-0">
                <a
                  className="main-btn text-capitalize"
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download CV"
                  onClick={handleCloseMenu}
                >
                  Download CV
                  <BsCloudDownload className="ms-1" size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
