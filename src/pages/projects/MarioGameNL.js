import React, { useState } from "react";
import { Link } from "react-router-dom";

function MarioGamePage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const extraImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/map1.png", alt: "provincies overtrekken", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/map2.png", alt: "Hoofdsteden plaatsen", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/map3.png", alt: "Rivieren en wegen aanleggen", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/map4.png", alt: "Achtergrond elementen tekenen (1)", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/map5.png", alt: "Achtergrond elementen tekenen (2)", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/map6.png", alt: "Eindresulaat kaart", },
  ];

    const godotImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/WorldMapZoomIn.png", alt: "Kaart ingezoomd", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/WorldMapZoomOut.png", alt: "Kaart uitgezoomd", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/Level1Preview.png", alt: "Eerst level", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/MarioRun.png", alt: "Speler animeren met keyframes", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/Sign.png", alt: "Tekst toevoegen aan bordje", },
    { src: process.env.PUBLIC_URL + "/images/projects/MarioGame/LevelEditor.png", alt: "Level editor", },
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
                Mario Game NL - Lowland Overworld
              </h1>
              <p>
               Tijdens dit project heb ik een speelbaar 2D-gameprototype ontwikkeld in de game engine Godot. Het project stond in het teken van het ontwerpen en bouwen van een game, waarbij ik zowel technische als creatieve vaardigheden heb toegepast. Hier laat ik zien hoe ik het prototype stap voor stap heb ontwikkeld.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-secondary me-2 px-3 py-2">2025</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Godot</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Figma</span>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/mario-game-nl.png"}
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
                <h2 className="fw-bold accent-before">Het gemaakte spel</h2>
                <p className="text-muted">
                  Het gemaakte prototype
                </p>
              </div>
              <p>
                Als eerste stap heb ik het concept van mijn game uitgewerkt. Ik wilde een 2D-platformgame ontwikkelen die geïnspireerd is op de klassieke Mario games, maar met een eigen twist. Daarom heb ik gekozen voor een overworld die gebaseerd is op de kaart van Nederland, waarbij spelers verschillende locaties kunnen bezoeken en levels kunnen spelen.
              </p>

              <p>
                Het prototype is ontwikkeld in Godot en combineert platformgameplay met educatieve elementen. Tijdens het spelen ontdekt de gebruiker verschillende Nederlandse gebieden, waardoor de game niet alleen vermakelijk is, maar ook een herkenbare en leerzame ervaring biedt.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Aanleiding van de opdracht</h2>
                <p className="text-muted">
                  Games en topografie
                </p>
              </div>
              <p>
                Voordat ik begon met de ontwikkeling van de game heb ik onderzocht welke game engine het beste aansloot bij mijn idee. Uiteindelijk heb ik gekozen voor Godot, omdat deze engine geschikt is voor het ontwikkelen van 2D-games en veel vrijheid biedt tijdens het programmeren.
              </p>

              <p>
                De inspiratie voor het concept ontstond nadat ik online voorbeelden zag van kaarten die waren omgezet naar een Super Mario World-stijl. Omdat ik veel interesse heb in zowel topografie als games, besloot ik deze twee onderwerpen te combineren. Zo ontstond het idee om Nederland als interactieve overworld te gebruiken binnen mijn eigen game.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Ontwerpfase in Figma</h2>
                <p className="text-muted">
                  Ontwerpen van de overworld en game-assets
                </p>
              </div>
              <p>
                Voordat ik begon met programmeren, heb ik eerst alle visuele onderdelen van de game ontworpen in Figma. Ik ben gestart met het maken van de overworld, waarbij ik de kaart van Nederland als basis heb gebruikt. De provincies heb ik één voor één overgetrokken en vereenvoudigd naar een pixelachtige 16-bit stijl. Vervolgens heb ik de kaart aangevuld met wegen, wateren, steden en verschillende biomes, zodat een herkenbare en overzichtelijke spelwereld ontstond.
              </p>

              <p>
                Naast de overworld heb ik ook alle benodigde game-assets ontworpen. Denk hierbij aan grondtegels, obstakels, decoratieve objecten en achtergrondelementen. Tijdens het ontwerpen heb ik erop gelet dat alle assets dezelfde stijl en schaal hadden, zodat de game een consistente uitstraling kreeg. Door eerst alle grafische onderdelen uit te werken, had ik een sterke basis voordat ik aan de technische ontwikkeling begon.
              </p>
            </div>
          </div>

           {/* Extra afbeeldingen (klikbaar) */}
          <div className="project-extra-images row mt-4">
            {extraImages.map((img, index) => (
              <div className="col-lg-4 text-center" key={index}>
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

          <div className="col-md-12 mb-5">
            <img
              src={process.env.PUBLIC_URL + "/images/projects/MarioGame/playerMario.png"}
              alt="playerMario"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          
          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Technische realisatie</h2>
                <p className="text-muted">
                  Uitwerken in Godot
                </p>
              </div>
              <p>
                Nadat alle ontwerpen gereed waren, ben ik gestart met de technische uitwerking in Godot. Omdat ik nog niet eerder met deze game engine had gewerkt, heb ik eerst verschillende tutorials gevolgd om de basisprincipes van nodes, scenes en GDScript te leren. Vervolgens heb ik mijn eigen assets geïmporteerd en stap voor stap verwerkt in de game.
              </p>

              <p>
                Binnen Godot heb ik de gameplay opgebouwd door het programmeren van de speler, animaties, hitboxes en levelstructuur. Daarnaast heb ik de overworld gekoppeld aan de verschillende levels, interactieve elementen toegevoegd en de complete interface ontwikkeld. Door de combinatie van mijn eigen ontworpen assets en de technische mogelijkheden van Godot is uiteindelijk een volledig speelbaar prototype ontstaan dat zowel functioneel als visueel aansluit bij het oorspronkelijke ontwerp.
              </p>
            </div>
          </div>

          <div className="project-extra-images row mt-4">
            {godotImages.map((img, index) => (
              <div className="col-lg-4 text-center" key={index}>
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

          <div className="row mt-5 align-items-center">
            <div className="col-lg-8 col-md-12 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Eindresulaat</h2>
                <p className="text-muted">
                  Wat is de uitkomst?
                </p>
              </div>
              <p>
                Ben je nieuwsgierig na het eindresultaat? Kijk dan de video hieronder: 
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.youtube.com/embed/M1q35RYGMXs"
                title="YouTube video"
                width="100%"
                height="600"
                allowFullScreen
              ></iframe>
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

export default MarioGamePage;
