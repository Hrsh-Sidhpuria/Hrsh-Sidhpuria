import "./AllTech.css";
import React, { useEffect } from "react";
import csharp from "../../image/TechLogo/csharp.png";
import dotnet from "../../image/TechLogo/dotnet.png";
import html from "../../image/TechLogo/html.png";
import css from "../../image/TechLogo/css.png";
import js from "../../image/TechLogo/js.png";
import react from "../../image/TechLogo/react.png";
import powerbi from "../../image/TechLogo/Powerbi.png";
import sql from "../../image/TechLogo/sql.png";
import python from "../../image/TechLogo/python.png";
import git from "../../image/TechLogo/git.png";
import github from "../../image/TechLogo/github.png";
import bootstrap from "../../image/TechLogo/bootstrap.png";
import c from "../../image/TechLogo/c.png";
import dsa from "../../image/TechLogo/dsa.png";
import nodejs from "../../image/TechLogo/nodejs.png";
import expressjs from "../../image/TechLogo/express.png";
import mongodb from "../../image/TechLogo/mongodb.png";
import java from "../../image/TechLogo/java.png";
import { useTranslation } from "react-i18next";
import useScrollReveal from "../../ScrollRevealHook/useScrollReveal";

function AllTech() {
  const my_technology = [
    { logo: csharp, name: "C Sharp" },
    { logo: dotnet, name: "Asp.net core MVC" },
    { logo: html, name: "HTML" },
    { logo: css, name: "CSS" },
    { logo: js, name: "JavaScript" },
    { logo: react, name: "React" },
    { logo: powerbi, name: "PowerBI" },
    { logo: sql, name: "SQL" },
    { logo: python, name: "Python" },
    { logo: git, name: "Git" },
    { logo: github, name: "Github" },
    { logo: bootstrap, name: "Bootstrap" },
    { logo: c, name: "C Programming" },
    { logo: dsa, name: "Data Structure and Algorithm" },
    { logo: java, name: "Java" },
    { logo: nodejs, name: "Node js" },
    { logo: expressjs, name: "Express js" },
    { logo: mongodb, name: "MongoDB" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  useScrollReveal(".tech-card", { origin: "left" });
  return (
    <div className="all-tech-container">
      <h2 className="tech-title">{t("technologies-known-title")}</h2>
      <div className="tech-text">
        Technologies that I have worked with and I'm interested in.
      </div>
      <div className="tech-grid">
        {my_technology.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTech;
