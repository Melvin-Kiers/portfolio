import React, { useState } from "react";
import { Link } from "react-router-dom";

function StageConvidentPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const extraImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/Stage_Convident/RedesignGizom.png", alt: "Redesign Gizom website", },
    { src: process.env.PUBLIC_URL + "/images/projects/Stage_Convident/RedesignVDF.png", alt: "Redesign van der Werff pagina", },
    { src: process.env.PUBLIC_URL + "/images/projects/Stage_Convident/No_result_page_1.png", alt: "Geen artikelen gevonden pagina - Shop Buma", },
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
                Stage Convident
              </h1>
              <p>
                Tijdens mijn derde jaar van de opleiding Communication & Multimedia Design liep ik stage bij Convident in Groningen.
                In deze periode kreeg ik de kans om mee te werken aan uiteenlopende webprojecten voor echte klanten.
                Het was een waardevolle ervaring waarin ik mijn kennis van design en development verder kon ontwikkelen.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-secondary me-2 px-3 py-2">2025</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">WordPress ACF</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">PHP</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Figma</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">CSS</span>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/stageConvident.png"}
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
                <h2 className="fw-bold accent-before">Stage Convident</h2>
                <p className="text-muted">
                  Feb 2025 - Juni 2025
                </p>
              </div>
              <p>
                Tijdens mijn stage heb ik verschillende projecten ondersteund binnen het team van Convident.
                Ik leerde werken met WordPress als CMS en kreeg inzicht in hoe websites technisch én visueel worden opgebouwd.
                Samen met ontwikkelaars en designers werkte ik aan gebruiksvriendelijke en moderne websites.
                Hierbij lag de focus op zowel de technische uitvoering als het responsive ontwerp.
                De stageperiode heeft me geholpen om mijn vaardigheden in front-end development en webdesign naar een hoger niveau te tillen.
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">WordPress, ACF & PHP</h2>
                <p className="text-muted">
                  Technieken
                </p>
              </div>
              <p>
                Tijdens mijn stage werkte ik intensief met WordPress, waarbij ik gebruik maakte van Advanced Custom Fields (ACF) om dynamische contentstructuren op te zetten.
                Daarnaast heb ik met PHP custom functionaliteiten ontwikkeld om websites flexibeler en gebruiksvriendelijker te maken.
                Deze combinatie gaf me een goed inzicht in het koppelen van ontwerp en techniek binnen een CMS-omgeving.
                Naast ACF heb ik gewerkt met verschillende WordPress-plugins voor optimalisatie, SEO, formulieren en caching waarbij ik leerde hoe je plugins zorgvuldig inzet om prestaties en stabiliteit te behouden.
              </p>
            </div>
          </div>

          
          {/* Extra afbeeldingen (klikbaar) */}
          <div className="project-extra-images row mt-4">
            {extraImages.map((img, index) => (
              <div className="col-md-4 col-lg-4 text-center" key={index}>
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
            <div className="col-md-8 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">(Responsive) Designs</h2>
                <p className="text-muted">
                  In Figma
                </p>
              </div>
              <p>
                Naast het technische werk heb ik veel aandacht besteed aan het ontwerpen van responsive layouts.
                Hierbij hield ik rekening met gebruikservaring, toegankelijkheid en consistentie in de vormgeving.
                Ik ontwierp en optimaliseerde pagina’s die op elk apparaat goed tot hun recht komen, van desktop tot smartphone.
                Deze ervaring heeft mijn oog voor detail en mijn kennis van front-end design aanzienlijk versterkt.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/Stage_Convident/ResponsiveDesign.png"}
                alt="SMM2 API"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>

          <div className="row my-5">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Samenvatting</h2>
                <p className="text-muted">
                  Wat vond ik er van?
                </p>
              </div>
              <p>
                Deze stageperiode bij Convident was een waardevolle leerervaring waarin ik mijn technische en creatieve vaardigheden verder heb ontwikkeld. 
                Hoewel ik niet alle projecten volledig kan tonen vanwege interne richtlijnen van het bedrijf, geven de voorbeelden in mijn portfolio een goed beeld van mijn bijdrage en werkwijze. 
                Ik kijk met veel trots terug op deze periode en de kennis die ik daar heb opgedaan.
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

export default StageConvidentPage;
