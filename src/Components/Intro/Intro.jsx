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
import { motion } from "framer-motion";
import useScrollReveal from "../../ScrollRevealHook/useScrollReveal";
import Jobtitle from "../JobTitle/Jobtitle";
import { useTranslation } from "react-i18next";
import { CustomCursor } from "../CustomCursor/CustomCursor";

function Intro() {
  const { t } = useTranslation();
  const transition = { duration: 2, type: "spring" };
  useScrollReveal(".i-left");
  return (
    <div>
      <CustomCursor />
      <div className="intro">
        <div className="i-left">
          <div className="i-Introduction">
            <div className="i-greet">{t("greeting.line1")}</div>
            <div className="i-name">{t("greeting.line2")}</div>
            <div className="i-jobTitle i-greet">
              <div className="i-job-title">
                <Jobtitle />
              </div>
            </div>
            <div className="horizontal-line i-hr">
              <hr size="2" />
            </div>
            <div className="i-summary">{t("brief-about")}</div>
            <div className="cv-button">
              <a href={Resume} download style={{ textDecoration: "none" }}>
                <button class="button i-button" role="button">
                  <span class="text" title="Download Resume">
                    {t("downloadCVBtn")}
                  </span>
                </button>
              </a>
            </div>
            <div className="i-icons">
              <a
                href="https://github.com/Hrsh-Sidhpuria"
                title="Harsh Sidhpuria Github"
                target="_blank"
              >
                <img src={github} alt="gihub image" />
              </a>
              <a
                href="https://in.linkedin.com/in/harsh-sidhpuria-26a0b62b8"
                title="Harsh sidhpuria LinkedIn"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin image" />
              </a>
              <a
                href="https://www.instagram.com/hrsh_960s/"
                title="Harsh sidhpuria insta handle"
                target="_blank"
              >
                <img src={insta} alt="insta image" />
              </a>
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-profile">
            <motion.img
              initial={{ rotate: 5 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 30 }}
              src={bgVector}
              className="bg-vector"
              alt="background image"
            />
            <img src={profile} className="profile-image" alt="Profile image" />
          </div>

          <motion.img
            initial={{ left: "-5%" }}
            whileInView={{ left: "18%" }}
            viewport={{ amount: 0.8 }}
            transition={transition}
            className="Problem-solveing-icon"
            src={ProblemSolving}
            alt="problem solving icon"
          />

          <motion.div
            className="f1"
            initial={{ right: "-20%" }}
            whileInView={{ right: "-1%" }}
            transition={transition}
            viewport={{ amount: 0.8 }}
          >
            <FloatingDiv divData={SoftwareDev} text="Software Development" />
          </motion.div>
          <motion.div
            className="f2"
            initial={{ left: "-5%" }}
            whileInView={{ left: "25%" }}
            transition={transition}
            viewport={{ amount: 0.8 }}
          >
            <FloatingDiv divData={webdev} text="Web Development" />
          </motion.div>

          <div
            className="blurry"
            style={{ background: "#191919", bottom: "-50%", left: "-120%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
