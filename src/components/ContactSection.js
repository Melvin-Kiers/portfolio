import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="contact intro py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10 mb-4">
            <header className="mb-3">
              <h3 className="section-subtitle">Meer weten?</h3>
              <h2 className="section-title accent-before">Contact</h2>
            </header>
            <p className="intro-text">
              Wat tof dat je hier bent gekomen! Heb je een idee, vraag of gewoon zin om te connecten? Mail me gerust op 
              <a href="mailto:melvinkiers2003@gmail.com"> melvinkiers2003@gmail.com</a>, ik hoor graag van je!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
