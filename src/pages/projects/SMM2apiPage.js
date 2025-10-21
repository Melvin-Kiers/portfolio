import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/projects/SMM2apiPage.css";

function SMM2apiPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const extraImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/SMM2_API/LeaderBoard.png", alt: "Leaderboard overzicht", },
    { src: process.env.PUBLIC_URL + "/images/projects/SMM2_API/Story.png", alt: "Spelerstatistieken scherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/SMM2_API/Footer.png", alt: "Footer", },
  ];

  const bottomImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/SMM2_API/Data_1.png", alt: "Data overzicht 1" },
    { src: process.env.PUBLIC_URL + "/images/projects/SMM2_API/Data_2.png", alt: "Data overzicht 2" },
    { src: process.env.PUBLIC_URL + "/images/projects/SMM2_API/Data_3.png", alt: "Data overzicht 3" },
    { src: process.env.PUBLIC_URL + "/images/projects/SMM2_API/Data_4.png", alt: "Data overzicht 4" },
  ];

  const combinedStatsImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/SMM2_API/AllStats.png", alt: "Gecombineerde statistieken" },
    { src: process.env.PUBLIC_URL + "/images/projects/SMM2_API/CustomLeaderBoard.png", alt: "Een andere Leaderboard" },
    { src: process.env.PUBLIC_URL + "/images/projects/SMM2_API/IntroCLB.png", alt: "Introstukje ander leaderboard + data visualisatie" }
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
                Super Mario Maker 2 <br /> data visualisatie
              </h1>
              <p>
                Een interactieve data visualisatie van Super Mario Maker 2 EU VS Mode,
                gebouwd met React en gekoppeld aan live data via een API en Google Sheets.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-secondary me-2 px-3 py-2">2025</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">React</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">JS</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">API</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Git</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Bootstrap</span>
                <span className="badge bg-info text-dark px-3 py-2">CSS</span>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/SMM2_API.png"}
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
            <div className="col-lg-6 col-md-12 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Super Mario Maker 2 EU VS Archive</h2>
                <p className="text-muted">
                  Een interactieve data visualisatie gebouwd met React, Bootstrap en live data uit een API en Google Sheets.
                </p>
              </div>
              <p>
                Dit project is een visuele data-analyse van de Europese Versus Mode-statistieken van Super Mario Maker 2.
                Met behulp van React en Bootstrap heb ik een overzichtelijke interface gebouwd waarin spelersdata
                automatisch wordt opgehaald via een API en aangevuld met een eigen Google Sheet. De visualisaties geven
                inzicht in trends, winrates en ranglijsten binnen de community. Het project combineert mijn interesse
                in data, webontwikkeling en gaming, en laat zien hoe ik interactieve dashboards kan bouwen die data
                begrijpelijk én aantrekkelijk presenteren.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img
                src={process.env.PUBLIC_URL + "/images/projects/SMM2_API/Home.png"}
                alt="SMM2 API"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>

          {/* Extra afbeeldingen (klikbaar) */}
          <div className="project-extra-images row mt-4">
            {extraImages.map((img, index) => (
              <div className="col-md-6 col-lg-4 text-center" key={index}>
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
          <div className="col-lg-10 text">
            <p className="custom_padding">
              In dit project kunnen gebruikers op specifieke spelers klikken om diepgaande statistieken te bekijken. 
              Voor elke geselecteerde speler worden overzichtelijke en interactieve visualisaties getoond, zoals pie charts en andere grafieken, die dynamisch worden aangepast op basis van de gegevens van die speler. 
              Zo kun je direct trends, winrates en andere relevante data analyseren. Deze functie laat zien hoe ik data op een visueel aantrekkelijke manier inzichtelijk kan maken en gebruikers interactief kan betrekken bij complexe datasets.</p>
          </div>
          <div className="row mt-4">
            {bottomImages.map((img, index) => (
              <div className="col-sm-6 text-center" key={index}>
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
          <div className="col-lg-10 text">
            <p className="custom_padding">
              Ook biedt het project een overzicht van de totale, gecombineerde gegevens van alle spelers. 
              Hiermee kunnen trends en patronen binnen de hele community worden geanalyseerd. 
              De visualisaties passen zich dynamisch aan op basis van de samengestelde dataset, waardoor zowel individuele prestaties als groepsstatistieken inzichtelijk en interactief worden gepresenteerd.</p>
          </div>
          <div className="row mt-4">
            {combinedStatsImages.map((img, index) => (
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
          <div className="project-conclusion mt-2 text-center">
            <p>
              Wil je het project zelf ervaren? Bekijk de interactieve data visualisatie in de video, of hier:{" "} 
              <a
                href="https://melvin-kiers.github.io/smm2_eu_vs_archive/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Super Mario Maker 2 EU VS Archive
              </a>.
            </p>

            <div className="project-video mt-2 text-center">
              <video
                width="100%"
                height="auto"
                controls
                poster={process.env.PUBLIC_URL + "/images/projects/SMM2_API/Home.png"}
              >
                <source
                  src={process.env.PUBLIC_URL + "/videos/SMM2_Video.mp4"}
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

export default SMM2apiPage;
