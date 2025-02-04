import React from "react";
import "./AdditionalInfo.css";
import Card from "../Card/Card";
import language from "../../image/languages.png";
import Interest from "../../image/interest.png";
import SoftSkill from "../../image/soft skill.png";
import { delay, motion } from "framer-motion";
import useScrollReveal from "../../ScrollRevealHook/useScrollReveal";

function AdditionalInfo() {
  useScrollReveal(".a-left", { origin: "left", delay: 100 });
  const transition = { duration: 2, type: "spring" };
  const Languages = ["English", "Hindi", "Gujarati"];
  const interest = ["Continuous Learning", "Travelling", "Book Reading"];
  const soft = ["Communication", "Critical thinking", "Decison Making"];
  return (
    <div>
      <div className="a-wrapper">
        <div className="add-info">
          <div className="a-left">
            <div className="a1">My Additional</div>
            <div className="a2">Information</div>
          </div>

          <div className="a-right">
            <motion.div
              initial={{ left: "-20%", rotate: -15 }}
              whileInView={{ left: "0%", rotate: 0 }}
              transition={transition}
              viewport={{ amount: 0.3 }}
              className="c-card1"
            >
              <Card emoji={language} title="Languages Known" arr={Languages} />
            </motion.div>
            <motion.div
              initial={{ right: "-60%", rotate: 15 }}
              whileInView={{ right: "-40%", rotate: 0 }}
              transition={transition}
              viewport={{ amount: 0.3 }}
              className="c-card2"
            >
              <Card emoji={Interest} title="Interest" arr={interest} />
            </motion.div>
            <motion.div
              initial={{ left: "-20%", rotate: -15 }}
              whileInView={{ left: "0%", rotate: 0 }}
              transition={transition}
              viewport={{ amount: 0.3 }}
              className="c-card3"
            >
              <Card emoji={SoftSkill} title="Soft Skill" arr={soft} />
            </motion.div>
            <div className="blurry" style={{ background: "#ddaaec" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
