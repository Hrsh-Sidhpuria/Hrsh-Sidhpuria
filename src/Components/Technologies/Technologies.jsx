import React from "react";
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
import nodejs from "../../image/TechLogo/nodejs.png";
import expressjs from "../../image/TechLogo/express.png";
import mongodb from "../../image/TechLogo/mongodb.png";
import java from "../../image/TechLogo/java.png";
import docker from "../../image/TechLogo/docker.svg";

import dsa from "../../image/TechLogo/dsa.png";
import SlidingDiv from "../SlidingDiv/SlidingDiv";
import "./Technologies.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Technologies() {
  const navigate = useNavigate();
  const my_technology = [
    { logo: { csharp }, name: "C Sharp" },
    { logo: { dotnet }, name: "Asp.net core MVC" },
    { logo: { html }, name: "HTML" },
    { logo: { css }, name: "CSS" },
    { logo: { js }, name: "JavaScript" },
    { logo: { react }, name: "React" },
    { logo: { powerbi }, name: "PowerBI" },
    { logo: { sql }, name: "SQL" },
    { logo: { python }, name: "Python" },
    { logo: { git }, name: "Git" },
    { logo: { github }, name: "Github" },
    { logo: { bootstrap }, name: "Bootstrap" },
    { logo: { c }, name: "C Programming" },
    { logo: { dsa }, name: "Data Structure and Algorithm" },
    { logo: { java }, name: "Java" },
    { logo: { nodejs }, name: "Node js" },
    { logo: { expressjs }, name: "Express js" },
    { logo: { mongodb }, name: "MongoDB" },
    { logo: { docker }, name: "Docker" },
  ];

  function navigateTOTechPage() {
    navigate("/technologies");
  }
  const { t } = useTranslation();
  return (
    <div id="technologies">
      <div className="Technology">
        <div className="t-title">{t("technologies-known-title")}</div>
        <div className="t-sliding-div">
          <SlidingDiv tech={my_technology} />
        </div>
        <div className="t-btn">
          <button class="t-button" onClick={navigateTOTechPage} role="button">
            {t("view-all-tech-btn")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
