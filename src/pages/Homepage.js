import Header from '../components/Header';
import Intro from '../components/Intro';
import ContactSection from '../components/ContactSection';
import Portfolio from "../components/Portfolio";

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Intro />
      <Portfolio />
      <ContactSection />
    </div>
  );
}

export default Homepage;