import React, { useEffect } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import "../css/Header.css";
import lineBg from "./line-bg.svg";
import ScrollSkills from "../components/ScrollSkills";
import AOS from "aos";
import "aos/dist/aos.css";

// function Header() {
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadAll(engine);
//     });
//   }, []);

//   const particlesOptions = {
//     background: { color: "#080D17" },
//     fpsLimit: 60,
//     interactivity: {
//       events: {
//         onClick: { enable: false, mode: "push" },
//         onHover: { enable: true, mode: "repulse" },
//         resize: true,
//       },
//       modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } },
//     },
//     particles: {
//       color: { value: "#ffffff" },
//       links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
//       move: { enable: true, speed: 1, outModes: { default: "bounce" } },
//       number: { value: 20, density: { enable: true, area: 800 } },
//       opacity: { value: 0.2 },
//       shape: { type: "circle" },
//       size: { value: { min: 1, max: 5 } },
//     },
//     detectRetina: true,
//   };

//   return (
//     <header className="header">
//       <Particles id="tsparticles" options={particlesOptions} />
//       <div className="container header-content">
//         <div className="row justify-content-center">
//             <div className="col-12 text-center">
//             <p className="im mb-1">Ik ben</p>
//             <h1 className="name">Melvin Kiers</h1>
//                 <p className="about mx-5">
//                 Welkom op mijn portfolio website!
//                 </p>
//             </div>  
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


function Header() {
    useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <header
      className="header" id="home"
      style={{
        "--line-bg": `url(${lineBg})`,
      }}
    >
      <div className="container header-content" data-aos="zoom-in-left" data-aos-duration="1000">
        <div className="title row">
          <div className="col-lg-8">
            <h1 className="name">Melvin Kiers</h1>
            <div className="subtitle">
              <h2 className="design">Designing &</h2>
              <h2 className="front-end">Frontend.</h2>
            </div>
          </div>  
        </div>
      </div>
      <div className="hexagon-container" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
        <div className="hexagon-tegel">
          <img
            src={process.env.PUBLIC_URL + "/images/Melvin.jpg"}
            alt="Melvin"
          />
        </div>
        <div className="special-line">
          <img
            src={process.env.PUBLIC_URL + "/images/special-line.svg"}
            alt=""
          />
        </div>
      </div>
      <ScrollSkills/>
    </header>
    </>
  );
}

export default Header;
