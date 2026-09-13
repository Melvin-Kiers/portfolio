import Header from '../components/Header';
import Intro from '../components/Intro';
import ContactSection from '../components/ContactSection';
import Portfolio from "../components/Portfolio";
import ScrollSkills from "../components/ScrollSkills";

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Portfolio />
      <ScrollSkills/>
      <Intro />
      <ContactSection />
    </div>
  );
}

export default Homepage;