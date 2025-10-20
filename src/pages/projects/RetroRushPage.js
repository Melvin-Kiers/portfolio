import React, { useState } from "react";
import { Link } from "react-router-dom";

function RetroRushPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const RRImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/Retro_Rush/Startscherm.png", alt: "Startscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Retro_Rush/Introscherm.png", alt: "Introscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Retro_Rush/Overzichtscherm.png", alt: "Overzichtscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Retro_Rush/Minigame.png", alt: "Minigamescherm", },
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
                Retro Rush
              </h1>
              <p>
                Retro Rush is een interactief HTML/CSS-spel waarin nostalgie en competitie samenkomen. 
                Het spel brengt de sfeer van klassieke arcadegames tot leven in een modern jasje en nodigt spelers uit om het tegen elkaar op te nemen in een één-op-één strijd vol snelheid, tactiek en plezier.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-secondary me-2 px-3 py-2">2023</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">HTML/CSS/JS</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Micro:Bit</span>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/retro_rush.png"}
                alt="Retro Rush"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project content */}
      <section className="project-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Retro Rush</h2>
                <p className="text-muted">
                  Hoe werkt het?
                </p>
              </div>
              <p>
                Voor mijn portfolio heb ik gewerkt aan een uniek project genaamd Retro Rush, een sociaal en competitief spel dat oude videogame-elementen combineert met moderne technologie. 
                Het spel wordt gespeeld op een tablet die in het midden van een fysiek speelbord is ingebouwd. 
                Twee spelers nemen om de beurt plaats aan het bord en spelen korte minigames tegen elkaar, geïnspireerd op old-school arcadeklassiekers.
                Naast de digitale gameplay maakt Retro Rush ook gebruik van Micro:bit-technologie. 
                Deze microcontrollers zijn verwerkt in het fysieke speelbord en zorgen voor extra interactieve elementen, zoals lichtsignalen, scoreweergave of sensoren die reageren op spelersacties.
              </p>
            </div>
          </div>

          {/* Extra afbeeldingen (klikbaar) */}
          <div className="project-extra-images row mt-4">
            {RRImages.map((img, index) => (
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

          <div className="row mt-5">
            <div className="col-lg-8 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Extra gemaakte dingen</h2>
                <p className="text-muted">
                  Boxart en speeldoos
                </p>
              </div>
              <p>
                Om het spel goed te presenteren en te promoten, heb ik daarnaast gewerkt aan verschillende visuele en fysieke ontwerpelementen. 
                Zo heb ik mock-ups gemaakt om het uiteindelijke ontwerp van het spel en de gebruikersinterface duidelijk te visualiseren. 
                Deze mock-ups hielpen bij het bepalen van de lay-out, de stijl en de algemene uitstraling van Retro Rush.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/Retro_Rush/Speeldoos.png"}
                alt="Retro Rush"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/Retro_Rush/RetroRushGame.jpg"}
                alt="Retro Rush"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-lg-8 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold">Conclusie</h2>
                <p className="text-muted">
                  Wat heb ik geleerd
                </p>
              </div>
              <p>
                Ook heb ik fliers en promotiemateriaal ontworpen om het spel op een aantrekkelijke manier onder de aandacht te brengen. 
                Deze fliers sluiten visueel aan bij de retrostijl van het spel en benadrukken het competitieve, gezellige karakter ervan. 
                Daarnaast heb ik een speeldoos ontworpen waarin het bord, de tablet en de accessoires netjes kunnen worden opgeborgen en gepresenteerd. 
                De doos is vormgegeven in dezelfde retrolook als het spel zelf, zodat het geheel een professioneel en samenhangend uiterlijk heeft.
                Met Retro Rush heb ik niet alleen mijn technische vaardigheden in HTML, CSS en hardware-integratie verder ontwikkeld, maar ook mijn oog voor vormgeving, presentatie en branding versterkt. 
                Het project toont aan hoe digitale technologie, fysiek design en creatieve promotie samen kunnen komen in één compleet en speels eindproduct.
              </p>
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

export default RetroRushPage;
