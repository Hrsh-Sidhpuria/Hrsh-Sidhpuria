import "./App.css";
import AdditionalInfo from "./Components/AdditionalInfo/AdditionalInfo";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Technologies/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Technologies />
      <AdditionalInfo />
    </>
  );
}

export default App;
