import React from "react";
import "../css/PortfolioItem.css";

function PortfolioItem({ title, year, tags, image }) {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-title-outside">{title}</div>

      <div className="portfolio-item">
        <div className="portfolio-image-wrapper">
          <img src={image} alt={title} className="portfolio-image" />
        </div>

        <div className="portfolio-item-content">
          <div className="portfolio-item-header">
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
    </div>
  );
}

export default PortfolioItem;
