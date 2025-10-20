import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar d-flex justify-content-between align-items-center px-4">
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
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className="navbar-right d-flex gap-2">
          <a
            href="https://linkedin.com/in/..."
            target="_blank"
            rel="noopener noreferrer"
            className="social-circle"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/..."
            target="_blank"
            rel="noopener noreferrer"
            className="social-circle"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/..."
            target="_blank"
            rel="noopener noreferrer"
            className="social-circle"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
