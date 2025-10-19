import Header from '../components/Header';
import Intro from '../components/Intro';
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Intro />
      <Portfolio />
    </div>
  );
}

export default Homepage;