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
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>About me</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className="navbar-right d-flex gap-2">
          <button className="download">
            <p>Download CV</p>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
