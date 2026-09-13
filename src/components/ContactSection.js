import React from "react";
import "../css/ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="contact-heading">
              <span className="contact-line contact-line-solid">Heb jij een</span>
              <span className="contact-line contact-line-solid">idee?</span>
              <span className="contact-line contact-line-ghost">Let's</span>
              <span className="contact-line contact-line-accent">Build it.</span>
            </h2>

            <p className="contact-text">
              Wat tof dat je hier bent gekomen! Heb je een idee, vraag of gewoon
              zin om te connecten? Mail me gerust, ik hoor graag van je!
            </p>
          </div>

          <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
            <a href="mailto:melvinkiers2003@gmail.com" className="contact-cta">
              Stuur een mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;