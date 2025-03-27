import React from "react";
import "./AdditionalInfo.css";
import Card from "../Card/Card";
import language from "../../image/languages.png";
import Interest from "../../image/interest.png";
import SoftSkill from "../../image/soft skill.png";
import { delay, motion } from "framer-motion";
import useScrollReveal from "../../ScrollRevealHook/useScrollReveal";
import { useTranslation } from "react-i18next";

function AdditionalInfo() {
  useScrollReveal(".a-left", { origin: "left", delay: 100 });
  const transition = { duration: 2, type: "spring" };
  const { t } = useTranslation();
  const Languages = t("language");
  const interest = t("interest");
  const soft = t("softskill");
  console.log(Languages);

  return (
    <div>
      <div className="a-wrapper">
        <div className="add-info">
          <div className="a-left">
            <div className="a1">{t("add-details-title1")}</div>
            <div className="a2">{t("add-details-title2")}</div>
            <div className="horizontal-line">
              <hr size="2" />
            </div>
            <div className="t-summary">{t("add-detail-breif")}</div>
          </div>

          <div className="a-right">
            <motion.div
              initial={{ left: "-20%", rotate: -15 }}
              whileInView={{ left: "0%", rotate: 0 }}
              transition={transition}
              viewport={{ amount: 0.3 }}
              className="c-card1"
            >
              <Card
                emoji={language}
                title={t("language-title")}
                arr={Languages}
              />
            </motion.div>
            <motion.div
              initial={{ right: "-60%", rotate: 15 }}
              whileInView={{ right: "-40%", rotate: 0 }}
              transition={transition}
              viewport={{ amount: 0.3 }}
              className="c-card2"
            >
              <Card
                emoji={Interest}
                title={t("interest-title")}
                arr={interest}
              />
            </motion.div>
            <motion.div
              initial={{ left: "-20%", rotate: -15 }}
              whileInView={{ left: "0%", rotate: 0 }}
              transition={transition}
              viewport={{ amount: 0.3 }}
              className="c-card3"
            >
              <Card emoji={SoftSkill} title={t("softskill-title")} arr={soft} />
            </motion.div>
            <div className="blurry" style={{ background: "#ddaaec" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
