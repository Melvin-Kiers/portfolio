
import React, { useState } from "react";
import { Link } from "react-router-dom";

function TTV() {
  const [selectedImage, setSelectedImage] = useState(null);

  const publicPath = process.env.PUBLIC_URL;

  const projectImages = [
    {
      src: `${publicPath}/images/projects/TTV/FigmaDesign.png`,
      alt: "Het websiteontwerp in Figma",
      caption: "Het ontwerp in Figma",
    },
  ];

  const mainImages = [
    {
      src: `${publicPath}/images/projects/TTV/ttvvries.nl.png`,
      alt: "Homepage huidige website TTV Vries",
      caption: "Homepage huidige website TTV Vries",
    },
  ];

  const compImages = [
    {
        src: `${publicPath}/images/projects/TTV/Menu.png`,
        alt: "Menu voor TTV Vries",
        caption: "Menu component met autogrid",
    },
    {
        src: `${publicPath}/images/projects/TTV/BottomSection.png`,
        alt: "CTA en contact blok voor TTV Vries",
        caption: "CTA en contact blok component",
    },
        {
        src: `${publicPath}/images/projects/TTV/Footer.png`,
        alt: "Footer voor TTV Vries",
        caption: "Footer component",
    },
   ];

     const acfImages = [
    {
        src: `${publicPath}/images/projects/TTV/ACF.png`,
        alt: "ACF veld op de achterkant",
        caption: "Stap 1: ACF veld op de achterkant maken/opbouwen",
    },
    {
        src: `${publicPath}/images/projects/TTV/ACFcode.png`,
        alt: "ACF Code",
        caption: "Stap 2: ACF Code plaatsen in het gemaakte thema en stylen met CSS",
    },
    {
        src: `${publicPath}/images/projects/TTV/ACF2.png`,
        alt: "ACF veld invullen",
        caption: "Stap 3: ACF veld invullen (uitkomst van stap 1 en 2)",
    },
    {
        src: `${publicPath}/images/projects/TTV/Users.png`,
        alt: "Uitkomst op de website",
        caption: "Stap 4: Uitkomst van het blok op de website",
    },
   ];

  return (
    <>
      {/* Introductie */}
      <section className="intro-single-project project-page d-flex align-items-center">
        <div className="container text-white">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <Link to="/" className="btn btn-outline-light mb-3">
                &larr; Terug naar portfolio
              </Link>

              <h1 className="project-title mb-4">
                TTV Vries
              </h1>

              <p>
                Voor TTV Vries heb ik gewerkt aan een nieuwe website, van het Figma design tot de vertaling naar WordPress. Hierbij heb ik me gericht op het design en het omzetten van herbruikbare componenten naar flexibele ACF blokken.
              </p>

              <div className="project-details my-4">
                <span className="badge bg-tag me-2 px-3 py-2">
                  2026
                </span>
                <span className="badge tag me-2 px-3 py-2">
                  WordPress
                </span>
                <span className="badge tag me-2 px-3 py-2">
                  JS
                </span>
                <span className="badge tag me-2 px-3 py-2">
                  Figma
                </span>
                <span className="badge tag me-2 px-3 py-2">
                  PHP
                </span>
                <span className="badge tag me-2 px-3 py-2">
                  ACF
                </span>
              </div>
            </div>

            <div className="col-md-6">
              <img
                src={`${publicPath}/images/thumbnails/TTV_homescreen.png`}
                alt="Websiteconcept van TTV Vries"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projectinhoud */}
      <section className="project-content py-5">
        <div className="container">

          {/* Wat is er gedaan? */}
          <div className="row mb-5 align-items-center">

            {/* Tekst links */}
            <div className="col-lg-6 project-description mb-4 mb-lg-0">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">
                  Wat is er gedaan?
                </h2>
                <p className="sub-text">
                  En voor wie?
                </p>
              </div>

              <p>
                Voor TTV Vries heb ik samen met mijn compagnon gewerkt aan een nieuw websiteconcept, met als doel de website een modernere uitstraling te geven. De bestaande website vormde hierbij het uitgangspunt. Ik wilde de visuele stijl beter laten aansluiten bij de herkenbare uitstraling van de vereniging, waarin groen en zwart een belangrijke rol spelen.
              </p>

              <p>
                Binnen het project lag mijn focus voornamelijk op het ontwerpen in Figma en het vertalen van de ontworpen componenten naar herbruikbare ACF blokken in WordPress. Zo heb ik bijgedragen aan een vernieuwde vormgeving die niet alleen beter aansluit bij de vereniging, maar ook flexibel opgebouwd en beheerd kan worden.
              </p>
            </div>

            {/* Afbeelding rechts */}
            <div className="col-lg-6">
              {mainImages.slice(0, 1).map((img, index) => (
                <div className="image-wrapper" key={index}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="img-fluid rounded shadow-sm clickable-img main-image"
                    onClick={() => setSelectedImage(img.src)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedImage(img.src);
                      }
                    }}
                  />

                  <p className="image-caption mt-2 text-center">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Design in Figma */}
          <div className="row mb-4">
            <div className="col-lg-12 project-description">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">
                  Het ontwerp in Figma
                </h2>
                <p className="sub-text">
                  Van componenten naar een consistent design
                </p>
              </div>

              <p>
                Voor het redesign heb ik in Figma gewerkt met herbruikbare componenten, grids en vaste ontwerpwaarden. De oude website maakte weinig gebruik van kleur, terwijl groen en zwart juist duidelijk terugkwamen in de shirts en flyers van TTV Vries. Om de website beter aan te laten sluiten bij de bestaande uitstraling van de vereniging, heb ik deze kleuren daarom nadrukkelijker in het nieuwe ontwerp verwerkt. Naast het kleurgebruik heb ik gewerkt met herbruikbare componenten en een consistente visuele stijl. Hierdoor kunnen dezelfde ontwerpelementen op verschillende pagina’s worden toegepast. Dit zorgt voor meer samenhang binnen de website en vormde tegelijkertijd de basis voor de technische uitwerking in WordPress.
              </p>
            </div>
          </div>

          {/* Afbeeldingen */}
            <div className="project-extra-images row mt-4">
            {compImages.map((img, index) => (
                <div className="col-md-4 col-sm-6" key={index}>
                <div className="image-wrapper">
                    <img
                    src={img.src}
                    alt={img.alt}
                    className="img-fluid rounded shadow-sm clickable-img comp-image"
                    onClick={() => setSelectedImage(img.src)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedImage(img.src);
                        }
                    }}
                    />

                    <p className="image-caption mt-2 text-center">
                    {img.caption}
                    </p>
                </div>
                </div>
            ))}
            </div>

          {/* Afbeeldingen */}
          <div className="project-extra-images row mt-4">
            {projectImages.map((img, index) => (
              <div
                className="col-md-12 mb-4 text-center"
                key={index}
              >
                <div className="image-wrapper">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="img-fluid rounded shadow-sm clickable-img"
                    onClick={() => setSelectedImage(img.src)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedImage(img.src);
                      }
                    }}
                  />

                  <p className="image-caption mt-2">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technische uitwerking */}
          <div className="row mt-4 mb-2">
            <div className="col-lg-10 project-description">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">
                  Van Figma naar WordPress
                </h2>
                <p className="sub-text">
                  De technische uitwerking
                </p>
              </div>

              <p>
                Het ontwerp is vertaald naar een werkende WordPress website met een eigen thema en Advanced Custom Fields (ACF). Mijn focus lag op het design en de technische vertaling van de ontworpen componenten naar herbruikbare ACF blokken. Hierbij heb ik ook gewerkt aan de styling die nodig was om de onderdelen goed op het ontwerp aan te laten sluiten. Om de styling consistent en beheersbaar te houden, heb ik centrale ontwerpwaarden vastgelegd in de code, zoals kleuren, lettergroottes en afgeronde hoeken (border-radius). Door deze waarden op één centrale plek te beheren, kunnen aanpassingen eenvoudig worden doorgevoerd en blijft de vormgeving van de verschillende componenten consistent.
              </p>

              <p>
                Om deze blokken flexibel te kunnen gebruiken, heb ik de verschillende stappen van het proces doorlopen: van het aanmaken van ACF velden en het verwerken daarvan in de code tot het invullen van content in de WordPress-omgeving. Hierdoor kunnen pagina’s eenvoudig worden opgebouwd uit verschillende onderdelen, zonder dat voor iedere pagina een nieuw ontwerp of een aparte oplossing nodig is.
              </p>

              <p>
                Hieronder laat ik kort zien aan de hand van vier stappen (foto's) hoe een ACF blok tot stand komt en uiteindelijk zichtbaar wordt op de website:
              </p>
            </div>
          </div>

          
          {/* Afbeeldingen */}
          <div className="project-extra-images row mt-4">
            {acfImages.map((img, index) => (
              <div
                className="col-md-6 col-sm-6 mb-2 text-center"
                key={index}
              >
                <div className="image-wrapper">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="img-fluid rounded shadow-sm clickable-img acf-image"
                    onClick={() => setSelectedImage(img.src)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedImage(img.src);
                      }
                    }}
                  />

                  <p className="image-caption mt-2">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Resultaat */}
          <div className="row mt-5">
            <div className="col-lg-10 project-description">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">
                  Resultaat
                </h2>
                <p className="sub-text">
                  Van concept naar realisatie
                </p>
              </div>

              <p>
                Het resultaat is een vernieuwd website dat beter aansluit bij de uitstraling van TTV Vries. Door de kleuren groen en zwart prominenter te gebruiken en te werken met herbruikbare componenten, is een consistente visuele stijl ontstaan die ook praktisch toepasbaar is in WordPress.
              </p>

              <p>
                Het ontwerp is positief ontvangen door TTV Vries en vervolgens voorgelegd aan de rest van de commissie. Voor mij was dit project een waardevolle ervaring waarin ik mijn vaardigheden op het gebied van UI-design en WordPress verder heb ontwikkeld.
              </p>

              <p>
                De laatste punten van de website worden nu afgerond voordat deze binnenkort live staat.
              </p>

            <p>
                De nieuwe website is nu te vinden op:{" "}
                <a href="https://ttvvries.basveenhoven.nl/" target="_blank" rel="noopener noreferrer">
                    TTV Vries
                </a>
            </p>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="simple-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close-btn btn btn-light"
              onClick={() => setSelectedImage(null)}
              aria-label="Afbeelding sluiten"
            >
              &larr; Terug
            </button>

            <img
              src={selectedImage}
              alt="Vergrote weergave van het TTV Vries-project"
              className="simple-lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default TTV;
