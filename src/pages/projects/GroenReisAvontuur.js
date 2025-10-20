import React, { useState } from "react";
import { Link } from "react-router-dom";

function GroenReisAvontuurPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const schetsImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/Schetsen_1.jpg", alt: "Schetsen", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/Schetsen_2.jpg", alt: "Schetsen", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/Schetsen_3.jpg", alt: "Schetsen", },
  ];

  const bottomImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/Startscherm.png", alt: "Startscherm Mid-fi", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/Home.png", alt: "Homescherm Mid-fi", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/Map.png", alt: "Kaart Mid-fi", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/Leaderboard.png", alt: "Leaderboard Mid-fi", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/Videos.png", alt: "Video scherm Mid-fi", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/Les.png", alt: "Les overzicht Mid-fi", },
  ];

  const moreImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/StartschermHifi.png", alt: "Startscherm Hi-fi", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/HomeHifi.png", alt: "Homescherm Hi-fi", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/MapHifi.png", alt: "Kaart Hi-fi", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/LeaderboardHifi.png", alt: "Leaderboard Hi-fi", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/VideosHifi.png", alt: "Video scherm Hi-fi", },
    { src: process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/LesHifi.png", alt: "Les overzicht Hi-fi", },
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
                Groenreis Avontuur
              </h1>
              <p>
                In mijn portfolio presenteer ik GroenReis Avontuur, een prototype app die ik heb ontworpen met als doel mensen te stimuleren om over te stappen van brandstofauto’s naar voertuigen die rijden op groene energie. 
                Deze app combineert interactieve functies en een gebruiksvriendelijke interface om gebruikers te informeren, inspireren en begeleiden in hun reis naar duurzame mobiliteit.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-secondary me-2 px-3 py-2">2024 - 2025</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Tailwind</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Figma</span>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/groenreisAvontuur.png"}
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
          <div className="row mb-5">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Het doel van de app</h2>
                <p className="text-muted">
                  App
                </p>
              </div>
              <p>
                Het doel van de app is om gebruikers bewust te laten maken van het feit dat elektrische auto's beter zijn dan auto's die rijden op brandstoffen.
                Dit heb ik gedaan door de app zo makkelijk mogelijk te laten overkomen en het simpel te maken zodat de gebruiker zijn aandacht er bij laat blijven.
                Verder geeft de app een beter beeld over hoe makkelijk een elektrische auto daadwerkelijk is, om zo sneller de gebruikers te overtuigen om over te stappen op een betere (groene) auto.
              </p>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Het maken van schetsen</h2>
                <p className="text-muted">
                  op papier
                </p>
              </div>
              <p>
                Voordat ik bezig ben gegaan met hett uiwerken van het prototype in Figma ben ik eerst bezig gegaan om de bedache ideeën te gaan schetsen.
              </p>
            </div>
          </div>

          {/* Extra afbeeldingen (klikbaar) */}
          <div className="project-extra-images row mt-4">
            {schetsImages.map((img, index) => (
              <div className="col-sm-4 text-center" key={index}>
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
                <h2 className="fw-bold accent-before">Uitwerken van de Mid-fi's</h2>
                <p className="text-muted">
                  In Figma
                </p>
              </div>
              <p>
                Nadat ik mijn schtsen klaar had ben ik aan de slag gegaan om de Mid-fi's ui te werken in Figma.
                Op deze manier kreeg ik een beter beeld over hoe een eindproduct inelkaar zit.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {bottomImages.map((img, index) => (
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
                <h2 className="fw-bold accent-before">Uitwerken van de Hi-fi's</h2>
                <p className="text-muted">
                  In Figma
                </p>
              </div>
              <p>
                Nadat ik mijn schtsen klaar had ben ik aan de slag gegaan om de Mid-fi's ui te werken in Figma.
                Op deze manier kreeg ik een beter beeld over hoe een eindproduct inelkaar zit.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {moreImages.map((img, index) => (
              <div className="col-md-2 col-sm-4 col-6 text-center mb-3" key={index}>
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
            <div className="col-lg-6 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Mini 3D omgeving</h2>
                <p className="text-muted">
                  Extra
                </p>
              </div>
              <p>
                Naast de app GroenReis Avontuur heb ik ook een interactieve 3D-omgeving ontworpen. 
                Dit artefact biedt gebruikers een meeslepende ervaring van hoe het is om in een voertuig te zitten dat rijdt op groene energie. 
                Het doel van deze omgeving is om de voordelen en het comfort van duurzame mobiliteit tastbaar te maken voor potentiële overstappers.
                Deze 3D-omgeving is niet alleen ontworpen als een educatief hulpmiddel, maar ook om emotioneel engagement te creëren.
              </p>
            </div>
            <div className="col-md-6 mb-5">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/GroenReis_Avontuur/3Domgeving.png"}
                alt="SMM2 API"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>

          <div className="project-conclusion mt-2 text-center">
            <p>
              Samen met de app en de andere artefacten vormt deze 3D-omgeving een cruciaal onderdeel van de customer journey. 
              Elk onderdeel draagt op zijn eigen manier bij aan het overtuigen, informeren en inspireren van gebruikers om de overstap naar duurzame mobiliteit te maken. 
              Waar de app GroenReis Avontuur de gebruiker begeleidt in het keuzeproces, maakt de 3D-ervaring de voordelen van groene energie voelbaar en tastbaar.
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

export default GroenReisAvontuurPage;
