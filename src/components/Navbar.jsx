import { useEffect, useState } from "react";
import cvFile from "../assets/Sama-Wahidee-CV.pdf";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          Sama Wahidee
        </a>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            href={cvFile}
            download="Sama-Wahidee-CV.pdf"
            className="mobile-nav-cv"
            onClick={closeMenu}
          >
            Download CV
          </a>
        </nav>

        <a href={cvFile} download="Sama-Wahidee-CV.pdf" className="nav-cv">
          Download CV
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
