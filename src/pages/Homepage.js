import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Portfolio from "../components/Portfolio";

function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <Header />
      <Intro />
      <Portfolio />
    </div>
  );
}

export default Homepage;