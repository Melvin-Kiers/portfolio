import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar d-flex justify-content-between align-items-center px-4">
      {/* Links: Logo */}
      <div className="navbar-left">
        <a href="/" className="navbar-logo">Link</a>
      </div>

      {/* Midden: Navigatie */}
      <ul className="navbar-center list-unstyled d-flex 2 mb-0">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Rechts: Social Icons */}
      <div className="navbar-right d-flex gap-2">
        <a href="/" className="social-circle"><FaFacebookF /></a>
        <a href="/" className="social-circle"><FaTwitter /></a>
        <a href="/" className="social-circle"><FaInstagram /></a>
      </div>
    </nav>
  );
}

export default Navbar;
