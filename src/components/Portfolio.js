import React from "react";
import { portfolioData } from "../data/portfolioData";
import PortfolioItem from "./PortfolioItem";
import "../css/PortfolioItem.css";

function Portfolio() {
  return (
    <section className="portfolio py-5">
      <div className="container">
        <h3 className="section-subtitle">Bekijk hier</h3>
        <h2 className="section-title accent-before mb-4">Mijn werk</h2>

        <div className="row g-4">
          {portfolioData.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 mt-5">
              <PortfolioItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
