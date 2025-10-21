import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="notfound-page d-flex align-items-center py-5">
      <div className="container text-center">
        <div className="notfound-illustration mb-4">
          {/* Simpele “lost” icoon via emoji, kan je vervangen door een svg */}
          <span role="img" aria-label="confused" className="notfound-emoji">🤷‍♂️</span>
        </div>
        <h1 className="display-1 mb-3 animate-fade">404</h1>
        <h2 className="mb-3 animate-fade-delay">Pagina niet gevonden</h2>
        <p className="mb-4 animate-fade-delay">Sorry, de pagina die je zoekt bestaat niet.</p>
        <Link to="/" className="btn btn-primary animate-fade-delay">Terug naar home</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
