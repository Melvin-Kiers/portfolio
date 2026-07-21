import React, { useState } from "react";
import { Link } from "react-router-dom";

function Afstuderen() {
  const [selectedImage, setSelectedImage] = useState(null);

  const extraImages = [
    { src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/startScreen.png", alt: "Startscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/drawScreen.png", alt: "Tekenscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/example.png", alt: "Minigame uitlegscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/animation.png", alt: "Uitlegvideo", },
    { src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/leaderBoard.png", alt: "Leaderboard", },
    { src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/viewScore.png", alt: "Persoonlijke score", },
  ];

  
  const extraImages2 = [
    { src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/Homescreen.png", alt: "Hoofdscherm", },
    { src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/panel.png", alt: "Gamaakte paneel / speelplaat", },
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
                Afstuderen bij European Hyperloop Centrum - Veendam
              </h1>
              <p>
               HyperBRIDGE is een door de EU gefinancierd Interreg-project dat het eerste grensoverschrijdende Hyperloop-netwerk van Europa tussen Nederland en Duitsland aanlegt. Het huidige probleem is dat de meeste mensen nog nooit van zoiets als de Hyperloop hebben gehoord, vooral kinderen niet. Dit zijn immers juist de mensen die er in de toekomst plezier aan zullen beleven.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-secondary me-2 px-3 py-2">2026</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">React</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">JS</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">CSS</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Figma</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">AFter Effects</span>
                <span className="badge bg-info text-dark me-2 px-3 py-2">Makey Makey</span>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/thumbnails/Homescreen.png"}
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
                <h2 className="fw-bold accent-before">Wat is er gedaan?</h2>
                <p className="text-muted">
                  en voor wie?
                </p>
              </div>

              <p>
                Deze afstudeeropdracht is uitgevoerd binnen het Hyperbridge project van Entrance, in samenwerking met Concept7 en het European Hyperloop Center (EHC) in Veendam. Binnen dit project wordt onderzocht hoe de complexe technologie achter de Hyperloop op een toegankelijke manier uitgelegd kan worden aan bezoekers. In overleg met de opdrachtgever is ervoor gekozen om de focus te leggen op kinderen van 8 tot 12 jaar, omdat deze doelgroep regelmatig het EHC bezoekt en baat heeft bij een speelse manier van leren. Het doel van de opdracht was daarom om een interactieve installatie te ontwerpen die de werking en het belang van de Hyperloop op een begrijpelijke, visuele en aantrekkelijke manier uitlegt. Hiermee wordt niet alleen de kennis van jonge bezoekers vergroot, maar ook hun beleving tijdens een bezoek aan het European Hyperloop Center versterkt.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Designchallenge</h2>
                <p className="text-muted">
                  Wat is de opgestelde Designchallenge?
                </p>
              </div>
              <p>
                Ontwerpuitdaging: Ontwerp een interactieve installatie voor de aankomsthal van het European Hyperloop Center (Veendam) die jonge bezoekers (8-12 jaar) op een begrijpelijke, visuele en aantrekkelijke manier kennis laat maken met de werking en het belang van de Hyperloop, en zo de beleving versterkt.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Oplossing en aanpak</h2>
                <p className="text-muted">
                  Hoe is er gewerkt?
                </p>
              </div>
              <p>
                Aan het begin van het jaar (2026) werden tijdens de ideevormingsfase verschillende concepten onderzocht, variërend van fysieke installaties en samenwerkingservaringen tot meeslepende digitale omgevingen. Met behulp van methoden zoals brainstormsessies, conceptschetsen en een 2x2-matrix werden de concepten beoordeeld op basis van impact en haalbaarheid. Het uiteindelijke concept werd gekozen omdat het creativiteit, interactiviteit en educatieve waarde combineerde en tegelijkertijd binnen de projectomvang realistisch bleef.
              </p>

              <p>
                Gedurende het project werden meerdere testsessies gehouden met klasgenoten, deskundigen en uiteindelijk ook basisschoolkinderen. De feedback uit deze sessies had directe invloed op het ontwerp. De navigatie, de visuele hiërarchie, de instructies en de educatieve inhoud werden voortdurend verfijnd om de bruikbaarheid en het begrip te verbeteren.
              </p>

              <p>
                Het prototype zelf werd ontwikkeld met behulp van React en Bootstrap, waardoor snelle iteratie en het testen van nieuwe ideeën mogelijk waren. Er werden aanvullende elementen zoals animaties, illustraties en educatieve video’s gemaakt om de leerervaring te ondersteunen en de betrokkenheid te versterken. Gamificatie-elementen, waaronder scores, ranglijsten en beloningen, werden geïntegreerd om kinderen te motiveren en aan te moedigen om op ontdekkingstocht te gaan.
              </p>

              <p>
                Een van de belangrijkste inzichten tijdens het project was dat kinderen vaak geschreven instructies oversloegen ten gunste van onmiddellijke interactie. Als gevolg daarvan evolueerde het ontwerp naar een grotere nadruk op visuele begeleiding, animaties en vereenvoudigde taal. Deze aanpassing zorgde voor een aanzienlijke verbetering van de duidelijkheid en de gebruiksvriendelijkheid tijdens latere testsessies. 
              </p>
            </div>
          </div>

          {/* Extra afbeeldingen (klikbaar) */}
          <div className="project-extra-images row my-4">
            {extraImages2.map((img, index) => (
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

          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Hoe ziet de ervaring eruit?</h2>
                <p className="text-muted">
                  en hoe werkt het?
                </p>
              </div>
              <p>
                De ervaring begint bij een persoonlijk tekenstation waar bezoekers hun eigen Hyperloop voertuig ontwerpen. Met behulp van een set tekengereedschappen, kleuren en Hyperloop sjablonen kunnen kinderen een Hyperloop ontwerpen en aanpassen die hun eigen ideeën en creativiteit weerspiegelt. Zodra het ontwerp klaar is, wordt het overgebracht naar een groot centraal scherm, waar het onderdeel wordt van de interactieve ervaring.

                Vanaf dit moment stapt de gebruiker vanuit een first person perspectief in een Hyperloop. Animaties en verhalen geven het gevoel dat je deel uitmaakt van de Hyperloop zelf. Kinderen bekijken de technologie niet langer van buitenaf, maar nemen er actief aan deel.
              </p>

              <p>
                Om de installatie te voltooien, moeten de bezoekers drie verschillende minigames spelen met behulp van verschillende knoppen. Deze knoppen zijn aangesloten op een Makey Makey. Elke minigame richt zich op een ander technisch aspect van de Hyperloop, zoals magnetische levitatie, snelheid of stabiliteit. Voorafgaand aan elke minigame leggen korte visuele instructies het doel en de besturing uit. Tijdens het spelen verdienen kinderen punten op basis van hun prestaties, wat herhalingswaarde en betrokkenheid stimuleert. Hoe meer punten je behaalt, hoe sneller je eigen Hyperloop door de tunnel raast!
              </p>

              <p>
                Om de installatie te voltooien, moeten de bezoekers drie verschillende minigames spelen met behulp van verschillende knoppen. Deze knoppen zijn aangesloten op een Makey Makey. Elke minigame richt zich op een ander technisch aspect van de Hyperloop, zoals magnetische levitatie, snelheid of stabiliteit. Voorafgaand aan elke minigame worden het doel en de besturing uitgelegd aan de hand van korte visuele instructies. Tijdens het spelen verdienen kinderen punten op basis van hun prestaties, wat herhalingswaarde en betrokkenheid stimuleert. Hoe meer punten je haalt, hoe sneller je eigen Hyperloop door de tunnel raast!
              </p>

              <p>
                Na het voltooien van een minigame krijgen bezoekers een korte geanimeerde uitleg te zien die de gameplay koppelt aan de echte technologie achter de Hyperloop. Tijdens deze uitleg zijn de woorden en illustraties eenvoudig te volgen en daardoor gemakkelijk te begrijpen. Door interactie direct te koppelen aan educatieve inhoud worden complexe concepten gemakkelijker te begrijpen en te onthouden. Extra quizvragen belonen oplettende spelers met bonuspunten, wat de leerervaring nog verder versterkt.
              </p>

              <p>
                De ervaring wordt afgesloten met een gepersonaliseerd resultatenscherm en een ranglijst, waarop de prestaties van de speler en de voltooide Hyperloop te zien zijn. Door gamificatie, storytelling, creativiteit en educatie te combineren, zet de installatie een complex technologisch onderwerp om in een toegankelijke en boeiende ervaring voor jonge bezoekers.
              </p>
            </div>
          </div>

        {/* Extra afbeeldingen (klikbaar) */}
          <div className="project-extra-images row my-4">
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

          <div className="row">
            <div className="col-lg-10 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Resultaat en impact</h2>
                <p className="text-muted">
                  Conclusie
                </p>
              </div>
              <p>
                Het eindresultaat van dit project is een volledig interactief prototype dat kinderen kennis laat maken met de Hyperloop-technologie door middel van tekenen, gameplay en educatieve verhalen. De ervaring is meerdere keren getest met experts, klasgenoten en basisschoolkinderen in de leeftijd van 8 tot 12 jaar, waardoor het concept voortdurend kon worden verbeterd aan de hand van feedback en iteratie. Uit de testresultaten bleek dat de kinderen gedurende de hele ervaring zeer betrokken waren en vooral veel plezier beleefden aan het ontwerpen van hun eigen Hyperloop en het strijden om een plek op het klassement. Wat nog belangrijker is: de deelnemers konden na afloop van de ervaring de belangrijkste Hyperloop-concepten uitleggen, waaruit bleek dat er tijdens het spelen daadwerkelijk iets was geleerd. Het project heeft met succes aangetoond dat gamificatie en interactief leren een geschikte manier zijn om complexe technologische onderwerpen over te brengen aan een jong publiek. Hoewel het prototype in toekomstige versies nog verder kan worden uitgebreid, vormt het een sterke basis voor een boeiende educatieve installatie binnen het European Hyperloop Center.
              </p>
            </div>
          </div>

          {/* <div className="row mt-5 align-items-center">
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
          </div> */}
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

export default Afstuderen;
