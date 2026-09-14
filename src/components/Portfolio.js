import React from "react";
import { portfolioData } from "../data/portfolioData";
import PortfolioItem from "./PortfolioItem";
import "../css/PortfolioItem.css";
import lineBg from "./line-bg.svg";

// Groepeert de data in blokken van 4, want dat is de lengte van het patroon
function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

function Portfolio() {
  const groups = chunk(portfolioData, 4);

  return (
    <section className="portfolio py-5" id="projects"
    style={{
        "--line-bg": `url(${lineBg})`,
      }}>
      <div className="container">
        <h3 className="section-subtitle">Bekijk hier mijn</h3>
        <h2 className="section-title accent-before mb-4">Projecten</h2>

        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="row g-3 mb-3">
            {/* item 1: horizontaal, afbeelding rechts */}
            {group[0] && (
              <div className="col-12">
                <PortfolioItem {...group[0]} variant="horizontal" />
              </div>
            )}

            {/* item 2: horizontaal, afbeelding links */}
            {group[1] && (
              <div className="col-12">
                <PortfolioItem {...group[1]} variant="horizontal-reverse" />
              </div>
            )}

            {/* item 3 & 4: naast elkaar, afbeelding boven, content onder */}
            {group[2] && (
              <div className="col-md-6">
                <PortfolioItem {...group[2]} variant="stacked" />
              </div>
            )}
            {group[3] && (
              <div className="col-md-6">
                <PortfolioItem {...group[3]} variant="stacked" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;