import "./Card.css";

import React from "react";

function Card({ emoji, title, arr }) {
  return (
    <div>
      <div className="c-card">
        <div className="a-emoji">
          <img src={emoji} alt="" />
        </div>
        <div className="c-desc">
          <div className="title">{title}</div>
          <div className="c-list">
            <ul>
              {arr.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
