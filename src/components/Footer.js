import React from "react";
import "../css/Footer.css";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

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
                <li><a href={process.env.PUBLIC_URL + "/"}>Home</a></li>
                <li><a href={process.env.PUBLIC_URL + "/"}>Projects</a></li>
                <li><a href={process.env.PUBLIC_URL + "/"}>Contact</a></li>
              </ul>
            </div>

            <div className="col-sm-6 col-md-3 item">
              <h3>Credits</h3>
              <ul>
                <li><span>Built with React</span></li>
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
                Dit portfolio is bedoeld om mijn werk, projecten en vaardigheden te laten zien aan potentiële opdrachtgevers, werkgevers en andere geïnteresseerden.
                Hier vind je een selectie van wat ik heb gemaakt, met aandacht voor kwaliteit, creativiteit en groei.
              </p>
            </div>

            {/* Social media */}
            <div className="col item social mt-5">
              <a href={process.env.PUBLIC_URL + "/"} className="social-circle"><FaLinkedin /></a>
              <a href={process.env.PUBLIC_URL + "/"} className="social-circle"><FaGithub /></a>
              <a href={process.env.PUBLIC_URL + "/"} className="social-circle"><FaInstagram /></a>
            </div>
          </div>

          {/* Copyright */}
          <p className="copyright">
            © {new Date().getFullYear()} My portfolio – All rights reserved
          </p>
          <p className="copyright">
            Made by Melvin Kiers
          </p>
        </div>
      </footer>
    </div>
    
  );
}

export default Footer;
