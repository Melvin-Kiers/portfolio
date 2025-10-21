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
              <h3 className="section-subtitle">Over mij</h3>
              <h2 className="section-title accent-before">Wie ben ik?</h2>
            </header>
            <p className="intro-text">
              Mijn naam is Melvin Kiers en ik studeer momenteel Communication & Multimedia Design (CMD) in Groningen. 
              Ik heb een grote interesse in front-end development en vind het leuk om ideeën tot leven te brengen met code en design. 
              Tijdens mijn studie richt ik me vooral op het ontwerpen en bouwen van gebruiksvriendelijke en visueel aantrekkelijke websites. 
              Ik werk graag aan projecten waarin ik mijn creativiteit kan combineren met technische vaardigheden. 
              Onderzoek doe ik minder, maar ik haal veel plezier uit het daadwerkelijk maken en verbeteren van digitale producten. 
              In mijn portfolio laat ik o.a. zien hoe ik mijn passie voor front-end inzet om mooie en functionele interfaces te creëren.
            </p>

            {/* <button className="intro-btn">Bekijk mijn werk</button> */}
          </div>

          {/* Afbeelding / visueel gedeelte */}
          <div className="col-md-4 text-center">
            <img
              src={process.env.PUBLIC_URL + "/images/Melvin.jpg"}
              alt="Over mij"
              className="intro-image-me img-fluid rounded-3 shadow-sm"
            />
          </div>
          {/* <div className="col-md-10 offset-md-1 mt-5 text-center">
            <p className="intro-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia,
              purus a lacinia tincidunt, neque sem dignissim odio, quis egestas turpis
              tortor non nibh. Nulla eleifend condimentum eros, vitae pretium massa
              consectetur at. Aliquam venenatis, tellus et eleifend consectetur, neque
              turpis faucibus augue, vitae bibendum nisi arcu id justo.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Intro;
