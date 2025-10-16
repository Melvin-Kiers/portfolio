import Navbar from './components/Navbar';
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from "./components/Portfolio";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Intro />
      <Portfolio />
    </div>
  );
}

export default App;
