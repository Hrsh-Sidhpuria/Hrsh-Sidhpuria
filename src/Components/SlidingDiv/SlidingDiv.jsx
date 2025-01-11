import React from "react";
import "./SlidingDiv.css";

function SlidingDiv({ tech }) {
  return (
    <div className="static-container">
      <div className="static-track">
        {tech.map((item, index) => (
          <div className="tech-card" key={index}>
            <img
              src={Object.values(item.logo)[0]}
              alt={item.name}
              className="tech-logo"
            />
            <p className="tech-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlidingDiv;
