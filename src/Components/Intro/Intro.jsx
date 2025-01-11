import "./Intro.css";
import github from "../../image/icons8-github-50.png";
import linkedin from "../../image/icons8-linkedin-50.png";
import insta from "../../image/icons8-insta-50.png";
import bgVector from "../../image/bg-vector.png";
import profile from "../../image/profile.png";
import ProblemSolving from "../../image/Problem Solving.png";
import SoftwareDev from "../../image/software.png";
import React from "react";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import webdev from "../../image/web-dev.png";
import Resume from "./Harsh Sidhpuria Resume.pdf";

function Intro() {
  return (
    <div>
      <div className="intro">
        <div className="i-left">
          <div className="i-Introduction">
            <div className="i-greet">Hello, it's me</div>
            <div className="i-name">Harsh Sidhpuria</div>
            <div className="i-summary">
              Result-oriented software developer with a background in computer
              engineering, having a good sense of solving technical problems,
              learning new technologies, and implementing effective projects
              that would create teamwork in innovative solutions in line with
              the organization's objectives.
            </div>
            <div className="cv-button">
              <a href={Resume} download style={{ textDecoration: "none" }}>
                <button class="button i-button" role="button">
                  <span class="text" title="Download Resume">
                    Download CV
                  </span>
                </button>
              </a>
            </div>
            <div className="i-icons">
              <a
                href="https://github.com/Hrsh-Sidhpuria"
                title="Harsh Sidhpuria Github"
              >
                <img src={github} alt="gihub image" />
              </a>
              <a
                href="https://in.linkedin.com/in/harsh-sidhpuria-26a0b62b8"
                title="Harsh sidhpuria LinkedIn"
              >
                <img src={linkedin} alt="linkedin image" />
              </a>
              <a
                href="https://www.instagram.com/hrsh_960s/"
                title="Harsh sidhpuria insta handle"
              >
                <img src={insta} alt="insta image" />
              </a>
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-profile">
            <img src={bgVector} className="bg-vector" alt="background image" />
            <img src={profile} className="profile-image" alt="Profile image" />
          </div>
          <img
            className="Problem-solveing-icon"
            src={ProblemSolving}
            alt="problem solving icon"
          />
          <div className="f1">
            <FloatingDiv divData={SoftwareDev} text="Software Development" />
          </div>
          <div className="f2">
            <FloatingDiv divData={webdev} text="Web Development" />
          </div>

          <div
            className="blurry"
            style={{ background: "#b7bcda", bottom: "-20%", left: "-120%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
