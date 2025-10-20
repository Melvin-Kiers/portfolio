import React, { useState } from "react";
import { Link } from "react-router-dom";

function WarmteStadPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const productImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/Warmtestad/Startscherm.png", alt: "Startscherm" },
    { src: process.env.PUBLIC_URL + "/images/projects/Warmtestad/Introscherm.png", alt: "Introscherm" },
    { src: process.env.PUBLIC_URL + "/images/projects/Warmtestad/Vergelijking.png", alt: "Vergelijkings scherm" },
    { src: process.env.PUBLIC_URL + "/images/projects/Warmtestad/Overzicht.png", alt: "Overzichtscherm" },
  ];

  return (
    <>
      {/* Intro sectie */}
      <section className="intro-single-project project-page d-flex align-items-center">
        <div className="container text-white">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <Link to="/" className="btn btn-outline-light mb-3">
                &larr; Terug naar portfolio
              </Link>
              <h1 className="project-title mb-4">
                Warmtestad
              </h1>
              <p>
                Voor Warmtestad, een publieke warmtebedrijf dat samen met de gemeente Groningen werkt aan een CO₂-neutrale toekomst, hebben we als team een interactieve bakfiets ontworpen. 
                Deze bakfiets maakt op een speelse manier inzichtelijk hoe duurzame warmte bijdraagt aan een schonere stad.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-secondary me-2 px-3 py-2">2024 - 2025</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Tailwind</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Figma</span>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/warmteStad.png"}
                alt="Warmtestad"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project content */}
      <section className="project-content py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 col-md-12 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Projectbeschrijving</h2>
                <p className="text-muted">
                  Wat is er gemaakt?
                </p>
              </div>
              <p>
                Warmtestad ontwikkelt en levert duurzame warmte via warmtenetwerken in de stad Groningen. 
                Om inwoners bewust te maken van de voordelen en het proces achter deze transitie, hebben wij een interactieve bakfiets ontworpen. 
                Dit prototype, gemaakt van wit geschilderd hout passend bij de huisstijl van Warmtestad, bevat drie verschillende touchpoints die elk een onderdeel van hun missie belichten.
                De bakfiets is bedoeld als een informatieve en toegankelijke manier om bewoners te betrekken bij de duurzame plannen van Warmtestad. 
                Elk onderdeel laat zien hoe de organisatie werkt aan minder CO₂-uitstoot en duurzamere energie in het dagelijks leven.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/Warmtestad/Bakfiets.jpg"}
                alt="SMM2 API"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Mijn bijdrage – De kookplaten</h2>
                <p className="text-muted">
                  Gas vs Inductie
                </p>
              </div>
              <p>
                Mijn focus binnen het project lag op het tweede touchpoint: de kookeilanden. 
                Dit onderdeel laat gebruikers op interactieve wijze ervaren wat het verschil is tussen koken op gas en inductie.
                Door een pan op de plaat te plaatsen, start een simulatie waarin te zien is hoeveel energie wordt verbruikt, wat dit kost en hoeveel CO₂ hierbij vrijkomt. 
                Terwijl de scores oplopen, verschijnen er vergelijkende feiten, bijvoorbeeld hoeveel gevlogen kilometers of plastic tassen overeenkomen met de uitstoot.
                Na afloop krijgt de gebruiker een overzicht van de jaarlijkse verschillen tussen gas en inductie, wat inzicht geeft in de voordelen van duurzaam koken.
                Dit interactieve systeem is ontwikkeld met HTML, CSS en JavaScript.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {productImages.map((img, index) => (
              <div className="col-md-6 text-center mb-3" key={index}>
                <div className="image-wrapper">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="img-fluid rounded shadow-sm clickable-img"
                    onClick={() => setSelectedImage(img.src)}
                  />
                  <p className="image-caption mt-2">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="project-conclusion mt-2 text-center">
            <p> Dankzij deze technieken is een leerzame, visuele en gebruiksvriendelijke ervaring gecreëerd die laat zien hoe kleine keuzes bijdragen aan een duurzamere toekomst.</p>
          </div>
        </div>
      </section>

      {/* Lightbox met terugknop */}
      {selectedImage && (
        <div className="simple-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn btn btn-light"
              onClick={() => setSelectedImage(null)}
            >
              &larr; Terug
            </button>
            <img
              src={selectedImage}
              alt="Vergrote weergave"
              className="simple-lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default WarmteStadPage;
