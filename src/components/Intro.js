import React from "react";
import { timelineSections } from "../data/timelineData";
import TimelineSection from "./TimelineSection";
import "../css/Intro.css";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-hero">
        <div className="container">
          <h3 className="section-subtitle">Over mij</h3>
          <h2 className="section-title accent-before mb-4">Wie ben ik?</h2>
        </div>
      </div>

      {timelineSections.map((section, index) => (
        <TimelineSection key={index} {...section} />
      ))}
    </section>
  );
}

export default Intro;