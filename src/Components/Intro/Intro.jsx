import "./Intro.css";

import React from "react";

function Intro() {
  return (
    <div>
      <div className="intro">
        <div className="i-left">
          <div className="i-Introduction">
            <div className="i-greet">Hello, it's me</div>
            <div className="i-name">Harsh Sidhpuria</div>
            <div className="i-summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad
              libero labore nam. Sint incidunt suscipit odio atque expedita
              voluptates ex similique quasi aspernatur
            </div>

            <button class="button i-button" role="button">
              <span class="text">Download CV</span>
            </button>
          </div>
        </div>
        <div className="i-right"> hii</div>
      </div>
    </div>
  );
}

export default Intro;
