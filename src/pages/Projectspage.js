import { Link } from "react-router-dom";
import Portfolio from "../components/Portfolio";

function Projectspage() {
  return (
    <div className="Projectspage">
      <div className="custom-margin-project">
        <div className="container">
          <Link to="/" className="btn btn-outline-primary my-3">
            &larr; Terug naar home
          </Link>
        </div>
        <Portfolio />
      </div>
    </div>
  );
}

export default Projectspage;