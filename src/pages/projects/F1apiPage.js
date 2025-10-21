import React, { useState } from "react";
import { Link } from "react-router-dom";

function F1apiPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const extraImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/F1_API/LandKeuze.png", alt: "Overzicht landkeuze", },
    { src: process.env.PUBLIC_URL + "/images/projects/F1_API/JaarKeuze.png", alt: "Overzicht jaarkeuze", },
    { src: process.env.PUBLIC_URL + "/images/projects/F1_API/Example2023.png", alt: "Overzicht land A", },
    { src: process.env.PUBLIC_URL + "/images/projects/F1_API/Example2024.png", alt: "Overzicht land B", },
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
                Formula 1 Datavisualisatie
              </h1>
              <p>
                Om mijn passie voor Formule 1 en technologie te combineren, heb ik als onderdeel van het schoolvak PED (Programmeren en Dataverwerking) een project ontwikkeld waarin ik gebruikmaak van een bestaande Formule 1 API om racegegevens visueel weer te geven.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-secondary me-2 px-3 py-2">2024</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">React</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">JS</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">API</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Git</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">CSS</span>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/f1_api.png"}
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
                <h2 className="fw-bold accent-before">Ontwerpfase in Figma</h2>
                <p className="text-muted">
                  Designen in Figma
                </p>
              </div>
              <p>
                Als eerste stap in het project ben ik begonnen met het maken van een design in Figma. 
                Dit was een belangrijke fase, omdat ik hiermee de structuur, stijl en gebruikerservaring van de applicatie kon plannen voordat ik daadwerkelijk begon met programmeren. 
                In Figma heb ik verschillende schermen ontworpen, waaronder een overzichtspagina met algemene race-informatie zoals weer, wind en temperatuur.
              </p>

              <p>
                Het gebruik van Figma hielp mij om al vroeg in het proces bewust keuzes te maken op het gebied van gebruikerservaring (UX) en visuele consistentie (UI). 
                Door vooraf goed te ontwerpen, kreeg ik een duidelijk beeld van hoe de uiteindelijke applicatie eruit moest zien, wat het ontwikkelproces een stuk efficiënter maakte.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Technische realisatie</h2>
                <p className="text-muted">
                  Met React en GitHub
                </p>
              </div>
              <p>
                Na het ontwerpproces ben ik gestart met de technische ontwikkeling van de applicatie. 
                Hiervoor heb ik gebruikgemaakt van React, een JavaScript-framework dat zeer geschikt is voor het bouwen van dynamische en interactieve webapplicaties. 
                Met React heb ik verschillende componenten gebouwd die de gegevens van de OpenF1 API ophalen en visueel weergeven. 
                De applicatie haalt de data op via API-calls en toont deze in real-time, zodat gebruikers altijd de meest actuele informatie te zien krijgen.
              </p>

              <p>
                Door de combinatie van React en de 
                <a href="https://openf1.org/" target="_blank" rel="noopener noreferrer"> OpenF1 API </a> 
                kon ik een moderne, interactieve webapplicatie bouwen die niet alleen functioneel is, maar ook gebruiksvriendelijk en visueel aantrekkelijk.
              </p>

              <p>
                De code van dit project heb ik beheerd via GitHub, waardoor ik versiebeheer kon toepassen en overzicht behield over de voortgang
              </p>
            </div>
          </div>

          {/* Extra afbeeldingen (klikbaar) */}
          <div className="project-extra-images row mt-4">
            {extraImages.map((img, index) => (
              <div className="col-lg-6 text-center" key={index}>
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

          <div className="row my-5 align-items-center">
            <div className="col-lg-8 col-md-12 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Conclusie</h2>
                <p className="text-muted">
                  Wat heb ik meegenomen?
                </p>
              </div>
              <p>
                Dit project was een leerzame ervaring waarin ik veel nieuwe kennis heb opgedaan. 
                Het was de eerste keer dat ik werkte met Git voor versiebeheer en met een framework als React om een volledige webapplicatie te bouwen. 
                In het begin was het even wennen aan de structuur en werkwijze van beide tools, maar al snel begon ik de voordelen te zien van werken met componenten, branches en commits. 
                Door deze ervaring heb ik beter leren begrijpen hoe professionele webapplicaties worden ontwikkeld en beheerd.
              </p>
            </div>
            <div className="col-lg-4 col-md-12">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/F1_API/Home.png"}
                alt="SMM2 API"
                className="img-fluid rounded shadow-sm"
              />
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

export default F1apiPage;
