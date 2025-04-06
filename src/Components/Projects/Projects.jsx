import ProjectSwiper from "../ProjectSwiper/ProjectSwiper";
import "./Projects.css";
import Pathprovider from "../../image/Projects/Path Provider.jpg";
import FacialExpressionDetection from "../../image/Projects/Facial Expression Detection.jpg";
import JavascriptProjects from "../../image/Projects/Javascript Projects.jpg";
import AuthGuardCore from "../../image/Projects/AuthGuard Core.jpg";
import chromeExtension from "../../image/Projects/Chrome Extension.png";
import greybg from "../../image/Projects/dummy image.jpg";
import useScrollReveal from "../../ScrollRevealHook/useScrollReveal";

import React, { useContext, useTransition } from "react";
import { ProjectsListContext } from "../../Context/ProjectListContext";
import { useTranslation } from "react-i18next";

function Projects() {
  useScrollReveal(".p-projects", { origin: "top", delay: 100 });
  // const myProjects = [
  //   {
  //     name: "Path Provider",
  //     img: Pathprovider,
  //     brief:
  //       "This web application displays nearby locations of university or place. Users can scan a QR code to access the site, view maps, and explore location details.",
  //     url: "https://hrsh-sidhpuria.github.io/Path-Provider/",
  //     isUrl: true,
  //     isDetails: true,
  //     gitLink: "https://github.com/Hrsh-Sidhpuria/Path-Provider",
  //     isGitLink: true,
  //   },
  //   {
  //     name: "Javascript Projects",
  //     img: JavascriptProjects,
  //     brief:
  //       "A JavaScript mini-projects includes small practical projects, such as tic tac toe game with single player(minimax algorithm) and multiplayer feature,to-do lists, Random Color Generator, Text Converter,Text to speach Converter,text searching and highlighting and Weather Forecast. This helps me practice core JavaScript, DOM manipulation, and APIs while building useful, hands-on applications.",
  //     url: "https://hrsh-sidhpuria.github.io/javascript-projects/",
  //     isUrl: true,
  //     isDetails: true,
  //     gitLink: "https://github.com/Hrsh-Sidhpuria/javascript-projects",
  //     isGitLink: true,
  //   },
  //   {
  //     name: "Facial Expression Detection",
  //     img: FacialExpressionDetection,
  //     brief:
  //       " face expression detection system built using Python, OpenCV, Keras, and TensorFlow. The system is capable of detecting and classifying facial expressions in real-time.",
  //     url: "",
  //     isUrl: false,
  //     isDetails: true,
  //     gitLink: "https://github.com/Hrsh-Sidhpuria/Face-Detection-using-Python",
  //     isGitLink: true,
  //   },
  //   {
  //     name: "AuthGuard Core",
  //     img: AuthGuardCore,
  //     brief:
  //       "This project is a demonstration of authentication and authorization in ASP.NET Core MVC without using the ASP.NET Identity Framework or Entity Framework. The goal is to provide a custom implementation for handling user roles, claims, and permissions.",
  //     url: "",
  //     isUrl: false,
  //     isDetails: true,
  //     gitLink:
  //       "https://github.com/Hrsh-Sidhpuria/Authorication-and-Authentication-without-Identity-Framework",
  //     isGitLink: true,
  //   },
  //   {
  //     name: "Chrome Extension",
  //     img: chromeExtension,
  //     brief:
  //       "A Chrome extension is an extension of browser functionality, using web technologies such as HTML, CSS, and JavaScript. For instance, a Color Picker extension would allow users to pick colors from web pages, showing their codes, such as HEX, for easy use in design or development tasks.",
  //     url: "",
  //     isUrl: false,
  //     isDetails: true,
  //     gitLink: "https://github.com/Hrsh-Sidhpuria/Chrome-Extensions",
  //     isGitLink: true,
  //   },

  //   // {
  //   //   name: "",
  //   //   img: "",
  //   //   brief: "",
  //   //   url: "",
  //   //   isUrl: "",
  //   //   isDetails: "",
  //   //   gitLink: "",
  //   //   isGitLink: "",
  //   // },
  // ];

  const myProjects = useContext(ProjectsListContext);
  const { t } = useTranslation();
  return (
    <div>
      <div className="projects">
        <div className="p-main">
          <div className="p-title"> {t("projects-title")}</div>

          <div className="p-projects">
            <ProjectSwiper myproj={myProjects} />
          </div>
          <div
            className="blurry"
            style={{ background: "#b7bcda", top: "10%", left: "20%" }}
          ></div>
          <div
            className="blurry"
            style={{ background: "#b7bcda", top: "2%", left: "10%" }}
          ></div>
          <div
            className="blurry"
            style={{ background: "#ddaaec", top: "18%", left: "30%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
