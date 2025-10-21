import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../css/ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-page d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="contact-card p-5 shadow rounded">
              <header className="text-center mb-4">
                <h3 className="section-subtitle">Meer weten?</h3>
                <h2 className="section-title accent-before">Contact</h2>
              </header>
              <p className="intro-text fs-5 text-center">
                Wat tof dat je hier bent gekomen! Heb je een idee, vraag of gewoon zin om te connecten? 
                Mail me gerust op <a href="mailto:melvinkiers2003@gmail.com">melvinkiers2003@gmail.com</a>, 
                ik hoor graag van je!
              </p>

              {/* Social icons */}
              <div className="social-icons d-flex justify-content-center gap-3 mt-4">
                <a
                  href="https://www.linkedin.com/in/melvin-kiers-3647242b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/Melvin-Kiers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://instagram.com/melvin.kiers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
