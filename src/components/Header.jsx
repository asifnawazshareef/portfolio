import { useState } from "react";
import logo from "../assets/images/logo.webp";
import Resume from "../assets/Resume/Asif_Nawaz_CV.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { id: 1, label: "Home", href: "#home", active: true },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Services", href: "#services" },
  { id: 4, label: "Portfolio", href: "#portfolio" },
  { id: 5, label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="header_wrapper">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            {/* Logo */}
            <a className="navbar-brand" href="#home" onClick={handleCloseMenu}>
              <img src={logo} className="img-fluid" alt="logo" />
            </a>

            {/* Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
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
                {NAV_ITEMS.map(({ id, label, href, active }) => (
                  <li className="nav-item" key={id}>
                    <a
                      className={`nav-link ${active ? "active" : ""}`}
                      href={href}
                      onClick={handleCloseMenu}
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
    </>
  );
};

export default Header;
