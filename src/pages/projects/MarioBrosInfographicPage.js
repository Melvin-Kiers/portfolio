import React, { useState } from "react";
import { Link } from "react-router-dom";

function MarioBrosInfographicPage() {
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
              <Link to="/" className="btn btn-outline-light mb-3">
                &larr; Terug naar portfolio
              </Link>
              <h1 className="project-title mb-4">
                Mario Bros. Infographic
              </h1>
              <p>
                Mario Bros. Infographic
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
          <div className="row mb-5">
            <div className="col-lg-6 col-md-12 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Mario Bros. Infographic</h2>
                <p className="text-muted">
                  Ondertitel.
                </p>
              </div>
              <p>
                Tekst
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
              Tekst.</p>
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
              Tekst.</p>
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

export default MarioBrosInfographicPage;
