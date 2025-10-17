import React from "react";
import { Link } from "react-router-dom"; // ✅ voor interne routing
import "../css/PortfolioItem.css";

function PortfolioItem({ title, year, tags, image, link }) {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-title-outside">{title}</div>

      <Link to={link} className="portfolio-item-link">
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
      </Link>
    </div>
  );
}

export default PortfolioItem;
