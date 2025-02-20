import "./About.css";
import useScrollReveal from "../../ScrollRevealHook/useScrollReveal";

import React from "react";

function About() {
  useScrollReveal(".a-desc", { origin: "right", delay: 400 });
  return (
    <div>
      <div className="about" id="About">
        <div className="a-title">About</div>
        <div className="a-desc">
          <div className="description">
            <span>
              Hi, I am Harsh Sidhpuria, a passionate software developer with a
              solid computer engineering background. I have experience in
              full-stack development with C, C#, Python, JavaScript, and RESTful
              API development.
            </span>
            <span>
              My projects include an intuitive campus navigation system and
              real-time emotion detection. With ASP.NET Core, advanced
              algorithms, and teamwork, I work towards the impact and efficiency
              of results.
            </span>
            <span>
              Besides coding, I love traveling, reading, and learning new
              technologies to stay ahead in the ever-evolving tech world.
            </span>
            <span>—check out my work and connect with me!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
