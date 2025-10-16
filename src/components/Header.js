import React, { useEffect } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import "../css/Header.css";

function Header() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    });
  }, []);

  const particlesOptions = {
    background: { color: "#15182e" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1, outModes: { default: "bounce" } },
      number: { value: 50, density: { enable: true, area: 800 } },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return (
    <header className="header">
      <Particles id="tsparticles" options={particlesOptions} />
      <div className="container header-content">
        <div className="row justify-content-center">
            <div className="col-12 text-center">
            <p className="im mb-1">I'm</p>
            <h1 className="name">Melvin Kiers</h1>
                <p className="about mx-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacinia, purus a lacinia tincidunt, neque sem dignissim odio,
                quis egestas turpis tortor non nibh. Nulla eleifend condimentum
                eros, vitae pretium massa consectetur at. Aliquam venenatis,
                tellus et eleifend consectetur, neque turpis
                </p>
            </div>  
        </div>
      </div>
    </header>
  );
}

export default Header;
