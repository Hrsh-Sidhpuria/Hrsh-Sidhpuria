import "./App.css";
import About from "./Components/About/About";
import AdditionalInfo from "./Components/AdditionalInfo/AdditionalInfo";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Technologies from "./Components/Technologies/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Technologies />
      <Projects />
      <AdditionalInfo />
    </>
  );
}

export default App;
