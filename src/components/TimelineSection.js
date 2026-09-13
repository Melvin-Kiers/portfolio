import React from "react";

function TimelineSection({ eyebrow, highlight, description, items }) {
  return (
    <div className="timeline-section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <p className="timeline-eyebrow">{eyebrow}</p>
            <h3 className="timeline-highlight">{highlight}</h3>
            <p className="timeline-description">{description}</p>
          </div>

          <div className="col-lg-7 offset-lg-1">
            <ul className="timeline-list">
              {items.map((item, index) => (
                <li key={index} className="timeline-item">
                  <span className="timeline-period">{item.period}</span>

                  <div className="timeline-content">
                    <h4 className="timeline-role">
                      {item.role} <span className="timeline-company">— {item.company}</span>
                    </h4>
                    <p className="timeline-item-description">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineSection;