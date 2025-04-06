import "./About.css";
import useScrollReveal from "../../ScrollRevealHook/useScrollReveal";

import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();
  useScrollReveal(".a-desc");
  return (
    <div>
      <div className="about" id="About">
        <div className="a-title">{t("about-title")}</div>
        <div className="a-desc">
          <div className="description">
            <span>{t("about.b1")}</span>
            <span>{t("about.b2")}</span>
            <span>{t("about.b3")}</span>
            <span>{t("about.b4")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
