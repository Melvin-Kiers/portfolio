import React from "react";
import { Link } from "react-router-dom";
import "../css/PortfolioItem.css";

function PortfolioItem({ title, subtitle, description, year, tags, image, link, variant = "horizontal" }) {
  return (
    <div className={`portfolio-item variant-${variant}`}>
      <div className="portfolio-item-content">
        <p className="portfolio-eyebrow">{year}</p>
        <h3 className="portfolio-title">{title}</h3>
        {subtitle && <p className="portfolio-subtitle">{subtitle}</p>}
        {description && <p className="portfolio-description">{description}</p>}

        <div className="portfolio-tags">
          {tags.map((tag, index) => (
            <span key={index} className="portfolio-tag">
              {tag}
            </span>
          ))}
        </div>

        <Link to={link} className="portfolio-cta hover-underline">
          Bekijk hier het project
        </Link>
      </div>

      <div className="portfolio-divider" />

      <div className="portfolio-image-wrapper">
        <img src={image} alt={title} className="portfolio-image" />
      </div>
    </div>
  );
}

export default PortfolioItem;