import React from "react";
import "../css/Intro.css";

function Intro() {
  return (
    <section className="intro py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Tekstgedeelte */}
          <div className="col-md-8 about-me mb-4 mb-md-0">
            <header className="mb-3">
              <h3 className="section-subtitle">About</h3>
              <h2 className="section-title accent-before">Get to know me better</h2>
            </header>
            <p className="intro-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia,
              purus a lacinia tincidunt, neque sem dignissim odio, quis egestas turpis
              tortor non nibh. Nulla eleifend condimentum eros, vitae pretium massa
              consectetur at. Aliquam venenatis, tellus et eleifend consectetur, neque
              turpis faucibus augue, vitae bibendum nisi arcu id justo.
            </p>

            <button className="intro-btn">Lees meer</button>
          </div>

          {/* Afbeelding / visueel gedeelte */}
          <div className="col-md-4 text-center">
            <img
              src={process.env.PUBLIC_URL + "/images/Melvin.jpg"}
              alt="Over mij"
              className="intro-image-me img-fluid rounded-3 shadow-sm"
            />
          </div>
          <div className="col-md-10 offset-md-1 mt-5 text-center">
            <p className="intro-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia,
              purus a lacinia tincidunt, neque sem dignissim odio, quis egestas turpis
              tortor non nibh. Nulla eleifend condimentum eros, vitae pretium massa
              consectetur at. Aliquam venenatis, tellus et eleifend consectetur, neque
              turpis faucibus augue, vitae bibendum nisi arcu id justo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
