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

  const researchImages = [
    {
      src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/Persona.png",
      alt: "Persona van de doelgroep",
      caption: "Persona",
    },
    {
      src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/empathyMap.png",
      alt: "Empathy map van de doelgroep",
      caption: "Empathy map",
    },
    {
      src: process.env.PUBLIC_URL + "/images/projects/Afstuderen/customerJourney.png",
      alt: "Customer journey van de interactieve ervaring",
      caption: "Customer journey",
    },
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
                Afstuderen bij European Hyperloop Centrum - Veendam
              </h1>
              <p>
               HyperBRIDGE is een door de EU gefinancierd Interreg-project dat het eerste grensoverschrijdende Hyperloop-netwerk van Europa tussen Nederland en Duitsland aanlegt. Het huidige probleem is dat de meeste mensen nog nooit van zoiets als de Hyperloop hebben gehoord, vooral kinderen niet. Dit zijn immers juist de mensen die er in de toekomst plezier aan zullen beleven.
              </p>
              <div className="project-details my-4">
                <span className="badge bg-tag me-2 px-3 py-2">2026</span>
                <span className="badge tag me-2 px-3 py-2">React</span>
                <span className="badge tag me-2 px-3 py-2">JS</span>
                <span className="badge tag me-2 px-3 py-2">CSS</span>
                <span className="badge tag me-2 px-3 py-2">Figma</span>
                <span className="badge tag me-2 px-3 py-2">AFter Effects</span>
                <span className="badge tag me-2 px-3 py-2">Makey Makey</span>
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
                <p className="sub-text">
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
                <p className="sub-text">
                  Wat is de opgestelde Designchallenge?
                </p>
              </div>
              <p>
                Ontwerpuitdaging: Ontwerp een interactieve installatie voor de aankomsthal van het European Hyperloop Center (Veendam) die jonge bezoekers (8-12 jaar) op een begrijpelijke, visuele en aantrekkelijke manier kennis laat maken met de werking en het belang van de Hyperloop, en zo de beleving versterkt.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Oplossing en aanpak</h2>
                <p className="sub-text">
                  Hoe is er gewerkt?
                </p>
              </div>
             <p>
              Tijdens de ideevormingsfase aan het begin van 2026 heb ik verschillende concepten onderzocht, variërend van fysieke installaties en samenwerkingservaringen tot digitale omgevingen. Met behulp van brainstormsessies, conceptschetsen en een 2x2-matrix heb ik de mogelijkheden beoordeeld op impact en haalbaarheid. Uiteindelijk is gekozen voor een concept dat creativiteit, interactiviteit en educatieve waarde combineert en tegelijkertijd binnen de projectomvang haalbaar bleef.
            </p>

            <p>
              Om de interactieve installatie goed te laten aansluiten bij kinderen van 8 tot 12 jaar, heb ik de doelgroep verder in kaart gebracht. Hiervoor heb ik onder andere een persona, empathy map en customer journeys uitgewerkt. Deze hulpmiddelen gaven inzicht in de behoeften, motivaties en verwachtingen van de doelgroep. De inzichten vormden een basis voor ontwerpkeuzes op het gebied van interactie, visuele begeleiding en de manier waarop de werking van de Hyperloop wordt uitgelegd.
            </p>

            {/* Doelgroeponderzoek */}
            <div className="project-extra-images row my-4">
              {researchImages.map((img, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="image-wrapper">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="img-fluid rounded shadow-sm clickable-img desk-image"
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

            <p>
              Gedurende het project heb ik meerdere testsessies uitgevoerd met klasgenoten, deskundigen en uiteindelijk ook basisschoolkinderen. De feedback uit deze sessies heb ik gebruikt om het ontwerp verder te verbeteren. Zo zijn onder andere de navigatie, visuele hiërarchie, instructies en educatieve inhoud aangepast om de ervaring begrijpelijker en gebruiksvriendelijker te maken.
            </p>

            <p>
              Het interactieve prototype heb ik ontwikkeld met React en Bootstrap. Daarnaast heb ik animaties, illustraties en educatieve video's gemaakt om de leerervaring te ondersteunen. Ook heb ik spelelementen, zoals scores, ranglijsten en beloningen, geïntegreerd om kinderen te motiveren en actief bij de ervaring te betrekken.
            </p>

            <p>
              Een belangrijk inzicht uit de testsessies was dat kinderen geschreven instructies regelmatig oversloegen en liever direct met de installatie aan de slag gingen. Daarom heb ik het ontwerp aangepast met meer visuele begeleiding, animaties en eenvoudigere taal. Deze aanpassingen hielpen om de werking van de installatie duidelijker te maken en de gebruiksvriendelijkheid tijdens latere testsessies te verbeteren.
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
            <div className="col-lg-12 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Hoe ziet de ervaring eruit?</h2>
                <p className="sub-text">
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
                <h2 className="fw-bold accent-before">Resultaat en impact</h2>
                <p className="sub-text">
                  Conclusie
                </p>
              </div>
              <p>
                Het eindresultaat van dit project is een volledig interactief prototype dat kinderen kennis laat maken met Hyperloop-technologie door middel van tekenen, gameplay en educatieve verhalen. De ervaring is meerdere keren getest met experts, klasgenoten en basisschoolkinderen van 8 tot 12 jaar. Op basis van hun feedback is het concept iteratief verbeterd. Uit de tests bleek dat de kinderen gedurende de ervaring betrokken bleven en vooral plezier beleefden aan het ontwerpen van hun eigen Hyperloop en het strijden om een plek op het klassement. Daarnaast konden de deelnemers na afloop de belangrijkste Hyperloop-concepten uitleggen, wat erop wees dat ze tijdens het spelen daadwerkelijk iets hadden geleerd.
              </p>

              <p>
                Het project laat zien hoe gamification en interactief leren kunnen bijdragen aan het begrijpelijk maken van complexe technologische onderwerpen voor een jong publiek. Het prototype vormt een basis voor verdere ontwikkeling van een educatieve installatie binnen het European Hyperloop Center. Daarnaast werd mijn afstudeerproject geselecteerd voor <strong>de top 3</strong> van de afstudeereindopdrachten van de CMD studie, een mooie erkenning voor het uiteindelijke concept en de uitwerking ervan.
              </p>
            </div>
          </div>

          <div className="row mt-5 align-items-center">
            <div className="col-lg-8 col-md-12 project-description mb-4">
              <div className="mb-2">
                <h2 className="fw-bold accent-before">Eindresulaat</h2>
                <p className="sub-text">
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
                src="https://www.youtube.com/embed/fHiGvqTtgnI?si=duMs3Rh1pbKrnf3P"
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

export default Afstuderen;