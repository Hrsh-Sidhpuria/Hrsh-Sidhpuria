import React from "react";
import "../FloatingDiv/FloatingDiv.css";

const FloatingDiv = ({ divData, text = "" }) => {
  return (
    <div className="well-box">
      <div className="Floating-div">
        <img src={divData} alt="" className="f-image" />
        <div className="f-text">{text}</div>
      </div>
    </div>
  );
};

export default FloatingDiv;
