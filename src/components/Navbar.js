import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => (e) => {
  e.preventDefault();
  closeMenu();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <nav className={`navbar d-flex justify-content-between align-items-center px-4 ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-left">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={process.env.PUBLIC_URL + "/images/mk-logo.png"} alt="Logo" />
        </Link>
      </div>

      {/* Hamburger knop */}
      <div className="navbar-toggle d-lg-none" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Menu */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-center list-unstyled mb-0">
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link></li>
          <li>
            <a href="#projects" onClick={scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a href="#intro" onClick={scrollToSection("intro")}>About me</a>
          </li>
          <li>
            <a href="#contact" onClick={scrollToSection("contact")}>Contact</a>
          </li>
        </ul>

        <div className="navbar-right d-flex gap-2">
          <button className="download btn-d">
            <p>Download CV</p>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
