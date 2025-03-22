import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "./../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    setMenuOpen(false);

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  // ✅ Scroll to Top when Logo is Clicked
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.brand} onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <img src={logo} alt="Gaurav's Logo" className={styles.logo} />
      </div>

      {/* Hamburger Menu */}
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Menu */}
      <nav className={`${styles.navList} ${menuOpen ? styles.show : ""}`}>
        <a href="#about" className={styles.navLink} onClick={(e) => handleNavClick(e, "#about")}>
          About
        </a>
        <a href="#skills" className={styles.navLink} onClick={(e) => handleNavClick(e, "#skills")}>
          Skills
        </a>
        <a href="#internship" className={styles.navLink} onClick={(e) => handleNavClick(e, "#internship")}>
          Internship
        </a>
        <a href="#projects" className={styles.navLink} onClick={(e) => handleNavClick(e, "#projects")}>
          Projects
        </a>
        <a href="#certificates" className={styles.navLink} onClick={(e) => handleNavClick(e, "#certificates")}>
          Certificates
        </a>
        <a href="#contact" className={styles.navLink} onClick={(e) => handleNavClick(e, "#contact")}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
