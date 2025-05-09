import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import AdditionalInfo from "./Components/AdditionalInfo/AdditionalInfo";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import Technologies from "./Components/Technologies/Technologies";
import AllTech from "./Components/AllTech/AllTech";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import { ProjectsListProvider } from "./Context/ProjectListContext";
import "./i18n";
import VisitorCount from "./Components/VisitorCount/VisitorCount";

function App() {
  return (
    <ProjectsListProvider>
      <>
        <Routes>
          <Route
            path="/"
            element={
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
                <VisitorCount />
                <Footer />
                <ScrollUp />
              </>
            }
          />
          <Route path="/technologies" element={<AllTech />} />
          <Route path="/projectDetails/:id" element={<ProjectDetails />} />
        </Routes>
      </>
    </ProjectsListProvider>
  );
}

export default App;
