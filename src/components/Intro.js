import React from "react";
import "../css/Intro.css";

function Intro() {
  return (
    <section className="intro">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p>Titel + Tekst</p>
                </div>
                <div className="col-md-6">
                    <p>Afbeelding</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Intro;
