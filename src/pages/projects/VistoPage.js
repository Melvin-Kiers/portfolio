import React, { useState } from "react";
import { Link } from "react-router-dom";

function VistoPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const extraImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/Opening.png", alt: "Eerste scherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/LoFi-Intro.png", alt: "Introscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/InvulScherm.png", alt: "Invulscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/Login.png", alt: "Loginscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/Overzicht.png", alt: "Overzicht", },
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/FotoMaken.png", alt: "Foto maken schermen", },
  ];

  const hifiImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/IntroSchermHifi.png", alt: "Introscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/AanmeldSchermHifi.png", alt: "Aanmeldschermscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/OpdrachtHifi.png", alt: "Uitleg opdracht", },
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/HomeHifi.png", alt: "Opdracht kiezen op homepagina", },
  ];

  const landingspageImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/LandingsPage.png", alt: "Introscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/LandingsPageIntrov1.png", alt: "Introscherm v1", },
    { src: process.env.PUBLIC_URL + "/images/projects/Visto/LandingsPageIntrov2.png", alt: "Introscherm v2", },
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
                Visto
              </h1>
              <p>
                Visto is een gebruiksvriendelijke tool van Vistolabs waarmee onderzoekers visueel onderzoek kunnen uitvoeren met participanten. 
                Het platform maakt het eenvoudig om foto’s, video’s en andere visuele data te verzamelen en analyseren.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-secondary me-2 px-3 py-2">2024 - 2025</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Tailwind</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Figma</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">After Effects</span>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/visto.png"}
                alt="Visto"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project content */}
      <section className="project-content py-5">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Visto - Photovoice Methode</h2>
                <p className="text-muted">
                  Photovoice
                </p>
              </div>
              <p>
                Voor het project LABS werkte ik samen met een team aan een case genaamd Photovoice, ook wel bekend als Foto Elicitatie. 
                Deze methode wordt erkend als een waardevolle benadering binnen zowel onderzoek als ontwerp. 
                Het stelt onderzoekers en ontwerpers in staat om dieper inzicht te krijgen in de leefwereld van hun doelgroepen.

                Met de Photovoice-methode nodigen we deelnemers uit om foto's of video's te maken die hun dagelijkse ervaringen, perspectieven en prioriteiten weerspiegelen. 
                Vervolgens delen zij hun gedachten en verhalen over deze beelden. 
                Dit proces biedt een krachtige, visuele manier om de behoeften en ideeën van de doelgroep direct te begrijpen, zonder dat deze worden gefilterd door externe interpretaties.

                Tijdens dit project heb ik niet alleen geleerd hoe belangrijk het is om empathie en betrokkenheid te creëren bij doelgroepen, maar ook hoe waardevol visuele tools kunnen zijn om complexe informatie te vertalen naar bruikbare inzichten. 
                Deze methode combineert creativiteit met onderzoek en biedt een inspirerende manier om oplossingen te ontwerpen die echt aansluiten bij de behoeften van mensen.

                Visto laat zien hoe een innovatieve aanpak, zoals Photovoice, kan bijdragen aan meer inclusieve en impactvolle onderzoeks- en ontwerpprocessen.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/videos/Visto_intro.gif"}
                alt="Visto"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Vooronderzoek doen</h2>
                <p className="text-muted">
                  In gesprek gaan
                </p>
              </div>
              <p>
                Tijdens het onderzoek werkte ik samen met verschillende soorten onderzoekers en participanten om inzicht te krijgen in hun werkwijze en behoeften. 
                Door gesprekken, observaties en testmomenten leerde ik hoe uiteenlopend hun verwachtingen zijn van een onderzoeksplatform. 
                Deze samenwerking hielp om knelpunten in de communicatie tussen onderzoeker en participant bloot te leggen. 
                Het was waardevol om te zien hoe kleine verschillen in onderzoeksstijl invloed hebben op het gebruik van de tool. 
                Deze inzichten vormden de basis voor de verdere ontwerpbeslissingen in het project.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Lo-fi/Mid-fi prototypes in Figma</h2>
                <p className="text-muted">
                  App
                </p>
              </div>
              <p>
                Op basis van de onderzoeksinzichten maakte ik eerst low-fidelity wireframes in Figma om de gebruikersstroom te testen. 
                Hierin stond de koppeling tussen de app (voor participanten) en het dashboard (voor onderzoekers) centraal. 
                Participanten ontvangen via de app opdrachten om foto’s te maken van wat de onderzoeker hen via het dashboard heeft gestuurd. 
                De mid-fi prototypes hielpen om de interactie en informatiestroom te verfijnen voordat de visuele stijl werd toegevoegd. 
                Door regelmatig feedback te vragen kon ik snel itereren en verbeteren.
              </p>
            </div>
          </div>

          {/* Extra afbeeldingen (klikbaar) */}
          <div className="project-extra-images row mt-4">
            {extraImages.map((img, index) => (
              <div className="col-md-2 col-sm-4 col-6 text-center" key={index}>
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
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Uitwerken van de Hi-fi in Figma</h2>
                <p className="text-muted">
                  App
                </p>
              </div>
              <p>
                Na de testfase werkte ik het ontwerp uit tot een high-fidelity prototype in Figma. 
                In deze fase kreeg het ontwerp zijn uiteindelijke look & feel, inclusief kleuren, iconografie en typografie die passen bij de visuele identiteit van Visto. 
                De gebruikerservaring werd verder aangescherpt door aandacht te besteden aan micro-interacties en duidelijke navigatie. 
                Het doel was een professioneel en intuïtief ontwerp dat direct toepasbaar is voor ontwikkeling. 
                De hi-fi prototype fungeerde uiteindelijk als visueel referentiepunt voor het eindproduct.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {hifiImages.map((img, index) => (
              <div className="col-md-3 col-6 text-center" key={index}>
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

          <div className="row mt-3">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Landingspage</h2>
                <p className="text-muted">
                  Figma en Tailwind
                </p>
              </div>
              <p>
                Voor Visto ontwierp ik ook de landingspage, die dient als centrale toegang tot het platform. 
                Vanaf deze pagina kunnen gebruikers eenvoudig naar hun persoonlijke dashboard navigeren, maar ook meer informatie vinden over wat Visto is en hoe het werkt. 
                De focus lag op een heldere structuur en visuele hiërarchie, zodat zowel nieuwe als bestaande gebruikers intuïtief hun weg vinden. 
                Ik gebruikte herkenbare visuele elementen uit de app en het dashboard om de merkconsistentie te behouden. 
                Nadat ik de designs had afgerond ben ik aan de slag gegaan om deze uit te werken in code met behulp van Tailwind.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {landingspageImages.map((img, index) => (
              <div className="col-md-4 text-center mb-3" key={index}>
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
          
          <div className="row my-5">
            <div className="col-lg-6 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Banners en visitekaartjes</h2>
                <p className="text-muted">
                  Promotie
                </p>
              </div>
              <p>
                Naast de app en het dashboard ontwierp ik ook promotiemateriaal zoals banners en visitekaartjes. 
                Deze uitingen moesten aansluiten bij de stijl van het digitale platform, zodat er een consistente merkbeleving ontstond. 
                Door gebruik te maken van herkenbare kleuren, iconen en typografie uit de app werd de visuele identiteit versterkt. 
                De ontwerpen zijn zowel online als offline inzetbaar, bijvoorbeeld voor evenementen en presentaties. 
                Zo kreeg het merk Visto een duidelijke en professionele uitstraling.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/Visto/Banners.png"}
                alt="Visto"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>

          <div className="project-conclusion mt-2 text-center">
            <p>
              Na een intensieve periode binnen het Visto-project heb ik besloten mijn rol over te dragen om me volledig te kunnen richten op mijn stage, 
              waar ik de kans kreeg om mijn vaardigheden verder te verdiepen en nieuwe ervaringen op te doen. 
              Twee teamleden hebben het project daarna succesvol voortgezet en verder uitgebouwd. 
              Het is mooi om te zien hoe het concept waar ik aan heb meegewerkt zich verder ontwikkelt tot een volwaardige tool 
              die onderzoekers en participanten helpt om samen betekenisvolle inzichten te creëren.
            </p>
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

export default VistoPage;
