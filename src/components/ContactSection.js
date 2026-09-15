import React, { useEffect } from "react";
import "../css/ContactSection.css";
import lineBg from "./line-bg.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactSection() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="contact" className="contact"  style={{
        "--line-bg": `url(${lineBg})`,
      }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="contact-heading">
              <span className="contact-line contact-line-solid" data-aos="fade-left">Heb jij een</span>
              <span className="contact-line contact-line-solid" data-aos="fade-left">idee?</span>
              <span className="contact-line contact-line-ghost" data-aos="fade-left">Let's</span>
              <span className="contact-line contact-line-accent" data-aos="fade-left">Build it.</span>
            </h2>

            <p className="contact-text">
              Wat tof dat je hier bent gekomen! Heb je een idee, vraag of gewoon
              zin om te connecten? Mail me gerust, ik hoor graag van je!
            </p>
          </div>

          <div className="col-lg-6 text-lg-end mt-4 mt-lg-0" data-aos="fade-right">
            <div className="cta-arrow-wrapper">
              <div className="cta-arrow-link-wrapper">
                <a href="mailto:melvinkiers2003@gmail.com" className="cta-arrow-link">
                  Stuur een mail
                </a>
                <div className="cta-arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;