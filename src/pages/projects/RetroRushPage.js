import React from "react";
import { Link } from "react-router-dom";
import "../../css/projects/RetroRushPage.css";

function RetroRushPage() {
  return (
    <>
      {/* Intro sectie met blauw vlak */}
      <section className="intro-single-project project-page d-flex align-items-center">
        <div className="container text-white">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <Link to="/" className="btn btn-outline-light mb-3">
                &larr; Terug naar portfolio
              </Link>
              <h1 className="project-title mb-4">Retro Rush</h1>
              <p>Retro Rush is een arcade-platformspel ontwikkeld met React en CSS.
                Het doel van het project was om een interactieve en visueel aantrekkelijke
                ervaring te creëren voor spelers van alle leeftijden.</p>
                <div className="project-details my-4">
                  <span className="badge bg-secondary me-2 px-3 py-2">2025</span>
                  <span className="badge bg-info text-dark me-2 px-3 py-2">React</span>
                  <span className="badge bg-info text-dark me-2 px-3 py-2">CSS</span>
                  <span className="badge bg-info text-dark px-3 py-2">Bootstrap</span>
                </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/retro_rush.png"}
                alt="Retro Rush"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest van de content */}
      <section className="project-content py-5">
        <div className="container">
          <div className="project-description mb-4">
            <p>
              Retro Rush is een arcade-platformspel ontwikkeld met React en CSS.
              Het doel van het project was om een interactieve en visueel aantrekkelijke
              ervaring te creëren voor spelers van alle leeftijden.
            </p>
            <p>
              Tijdens dit project heb ik gewerkt aan animaties, level-design,
              responsive layouts en het optimaliseren van de prestaties voor verschillende schermformaten.
            </p>
          </div>

          <div className="project-extra-images row g-3">
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/retro_rush_1.png"}
                alt="Retro Rush screenshot 1"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/retro_rush_2.png"}
                alt="Retro Rush screenshot 2"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RetroRushPage;
