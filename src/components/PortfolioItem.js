import React from "react";
import "../css/PortfolioItem.css";

function PortfolioItem({ title, year, tags, image }) {
  return (
    <div className="portfolio-item">
      <div className="portfolio-image-wrapper">
        <img src={image} alt={title} className="portfolio-image" />
      </div>

      <div className="portfolio-item-content">
        <div className="portfolio-item-header">
          <h3 className="portfolio-title">{title}</h3>
          <span className="portfolio-year">{year}</span>
        </div>

        <div className="portfolio-tags">
          {tags.map((tag, index) => (
            <span key={index} className="portfolio-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
