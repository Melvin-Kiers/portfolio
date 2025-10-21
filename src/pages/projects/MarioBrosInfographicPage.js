import React, { useState } from "react";
import { Link } from "react-router-dom";

function MarioBrosInfographicPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const extraImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/MarioBros_Infographic/SMB1.png", alt: "Gemaakte SMB1 assets", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioBros_Infographic/SMB1_Castle.png", alt: "Gemaakte SMB1 kaseel assets", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioBros_Infographic/SMB2.png", alt: "Gemaakte SMB2 assets", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioBros_Infographic/SMW.png", alt: "Gemaakte SMW assets", },
  ];

  return (
    <>
      {/* Intro sectie */}
      <section className="intro-single-project project-page d-flex align-items-center">
        <div className="container text-white">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <Link to="/projects" className="btn btn-outline-light mb-3">
                &larr; Terug naar portfolio
              </Link>
              <h1 className="project-title mb-4">
                Mario Bros. Infographic
              </h1>
              <p>
                Voor dit (school)project heb ik een interactieve scrollytelling-website gemaakt die de geschiedenis van de 2D Super Mario Bros.-games vertelt. 
                Terwijl je naar beneden scrolt, ontdek je per spel wat het uniek maakte, 
                ondersteund door animaties, visuals en interactieve elementen. Het project combineert webdesign, storytelling en nostalgie tot één dynamische beleving.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-secondary me-2 px-3 py-2">2023 - 2024</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">HTML/CSS/JS</span>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/marioBrosinfographic.png"}
                alt="SMM2 API"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project content */}
      <section className="project-content py-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Scrollytelling-website</h2>
                <p className="text-muted">
                  Wat houdt het in?
                </p>
              </div>
              <p>
                De kern van dit project is een interactieve scrollytelling-ervaring waarin de gebruiker door de geschiedenis van de 2D Super Mario Bros.-games beweegt.
                Elke sectie vertegenwoordigt een ander tijdperk binnen de Mario-serie, met een eigen visuele stijl en sfeer. 
                Terwijl de gebruiker scrolt, verschijnen de verschillende onderdelen van het verhaal geleidelijk in beeld — denk aan tekstblokken, afbeeldingen, geanimeerde achtergronden en geluidseffecten die samen een vloeiende en meeslepende ervaring vormen.
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Interactieve animaties</h2>
                <p className="text-muted">
                  Maakt het leuker!
                </p>
              </div>
              <p>
                Om de scrollytelling tot leven te brengen, heb ik gebruikgemaakt van geanimeerde elementen die reageren op de scrollpositie van de gebruiker.
                Zo gaat Mario soms van buis naar buis terwijl je door de tijdlijn scrolt, verschijnen power-ups in beeld als je op elementen klikt, en veranderen de achtergronden geleidelijk om de overgang tussen generaties te laten zien.
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Hoe ben ik te werk gegaan?</h2>
                <p className="text-muted">
                  Starten met de assets
                </p>
              </div>
              <p> 
                Voordat ik aan de website begon, heb ik eerst onderzocht welke teksten en informatie ik wilde opnemen en hoe ik het verhaal het best kon opbouwen. 
                Vervolgens heb ik bestaande assets uit de <i>Super Mario Bros.</i>-franchise als referentie gebruikt en deze nagemaakt in Adobe Illustrator. 
                Alle illustraties heb ik zorgvuldig geëxporteerd als PNG- en SVG-bestanden voor gebruik op de website. 
                In Figma heb ik daarna verschillende composities en lay-outopties uitgeprobeerd om de juiste balans tussen beeld en tekst te vinden. 
                Toen het ontwerp was uitgewerkt, ben ik gestart met het opzetten van de HTML-structuur. 
                Tot slot heb ik geluidseffecten toegevoegd aan specifieke elementen en animaties geïmplementeerd om de website een levendige en interactieve uitstraling te geven.
              </p>
            </div>
          </div>

          {/* Extra afbeeldingen (klikbaar) */}
          <div className="project-extra-images row mt-4">
            {extraImages.map((img, index) => (
              <div className="col-sm-6 col-lg-3 text-center" key={index}>
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

          <div className="row my-3">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Eindresultaat</h2>
                <p className="text-muted">
                  Wat is er uitgekomen?
                </p>
              </div>
              <p> 
                In onderstaande video geef ik een korte demonstratie van de interactieve *scrollytelling*-website. 
                Hierin is te zien hoe de gebruiker door de geschiedenis van de 2D <i>Super Mario Bros.</i>-games scrolt, waarbij tekst, beeld en animatie samenkomen tot één vloeiende ervaring. 
                De video toont zowel de visuele opbouw als de interactieve elementen die het project tot leven brengen.
              </p>
            </div>
          </div>
          
          <div className="project-conclusion mt-2 text-center">
            <div className="project-video mt-2 text-center">
              <video
                width="100%"
                height="auto"
                controls
                poster={process.env.PUBLIC_URL + "/images/projects/MarioBros_Infographic/ThumbnailVideo.png"}
              >
                <source
                  src={process.env.PUBLIC_URL + "/videos/InfographicVideo.mp4"}
                  type="video/mp4"
                />
                Je browser ondersteunt deze video niet.
              </video>
            </div>
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

export default MarioBrosInfographicPage;
