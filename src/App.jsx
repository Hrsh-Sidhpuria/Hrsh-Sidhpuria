import "./App.css";
import About from "./Components/About/About";
import AdditionalInfo from "./Components/AdditionalInfo/AdditionalInfo";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Technologies from "./Components/Technologies/Technologies";

function App() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div id="Intro">
        <Intro />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Technologies">
        <Technologies />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="AdditionalInfo">
        <AdditionalInfo />
      </div>
      <div id="ContactMe">
        <ContactMe />
      </div>

      <Footer />
    </>
  );
}

export default App;
