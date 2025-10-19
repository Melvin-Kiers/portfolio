import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar d-flex justify-content-between align-items-center px-4">
      {/* Logo */}
      <div className="navbar-left">
        <a href={process.env.PUBLIC_URL + "/"} className="navbar-logo">
          <img src={process.env.PUBLIC_URL + "/images/mk-logo.png"} alt="Logo" />
        </a>
      </div>

      {/* Hamburger knop */}
      <div className="navbar-toggle d-lg-none" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Menu */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-center list-unstyled mb-0">
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="/" onClick={closeMenu}>Projects</a></li>
          <li><a href="/" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className="navbar-right d-flex gap-2">
          <a href={process.env.PUBLIC_URL + "/"} className="social-circle"><FaFacebookF /></a>
          <a href={process.env.PUBLIC_URL + "/"} className="social-circle"><FaTwitter /></a>
          <a href={process.env.PUBLIC_URL + "/"} className="social-circle"><FaInstagram /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
