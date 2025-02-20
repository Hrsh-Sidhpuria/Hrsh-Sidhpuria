import { color } from "framer-motion";
import "./jobTitle.css";

import React from "react";

function Jobtitle() {
  return (
    <div className="j-wrapper">
      <div className="j-text">I'm </div>
      <div className="dynamic-text">
        <ul className="j-typing-text">
          <li>
            <span style={{ color: "red" }}>Full Stack Developer</span>
          </li>
          <li>
            <span style={{ color: "orange" }}>Web Developer</span>
          </li>
          <li>
            <span style={{ color: "blue" }}>software Developer</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Jobtitle;
