import React from "react";
import "./AdditionalInfo.css";
import Card from "../Card/Card";
import language from "../../image/languages.png";
import Interest from "../../image/interest.png";
import SoftSkill from "../../image/soft skill.png";

function AdditionalInfo() {
  const Languages = ["English", "Hindi", "Gujarati"];
  const interest = ["Continuous Learning", "Travelling", "Book Reading"];
  const soft = ["Communication", "Critical thinking", "Decison Making"];
  return (
    <div>
      <div className="add-info">
        <div className="a-left">
          <div className="a1">My Additional</div>
          <div className="a2">Information</div>
        </div>
        <div className="a-right">
          <div className="c-card1">
            <Card emoji={language} title="Languages Known" arr={Languages} />
          </div>
          <div className="c-card2">
            <Card emoji={Interest} title="Interest" arr={interest} />
          </div>
          <div className="c-card3">
            <Card emoji={SoftSkill} title="Soft Skill" arr={soft} />
          </div>
          <div className="blurry" style={{ background: "#ddaaec" }} />
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
