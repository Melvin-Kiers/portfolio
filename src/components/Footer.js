import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            {/* Navigation */}
            <div className="col-sm-6 col-md-3 item">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Credits */}
            <div className="col-sm-6 col-md-3 item">
              <h3>Credits</h3>
              <ul>
                <li>
                  <span>Built with React</span>
                </li>
                <li>
                  <a
                    href="https://bootsnipp.com/snippets/bxDBA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Footer design credits
                  </a>
                </li>
              </ul>
            </div>

            {/* About text */}
            <div className="col-md-6 item text">
              <h3>Mijn portfolio</h3>
              <p>
                Dit portfolio is bedoeld om mijn werk, projecten en
                vaardigheden te laten zien aan potentiële opdrachtgevers,
                werkgevers en andere geïnteresseerden. Hier vind je een
                selectie van wat ik heb gemaakt, met aandacht voor kwaliteit,
                creativiteit en groei.
              </p>
            </div>

            {/* Social media */}
            <div className="col item social mt-5">
              <a
                href="https://linkedin.com/in/jouwprofiel"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/jouwprofiel"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/jouwprofiel"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="copyright">
            © {new Date().getFullYear()} My portfolio – All rights reserved
          </p>
          <p className="copyright">Made by Melvin Kiers</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;