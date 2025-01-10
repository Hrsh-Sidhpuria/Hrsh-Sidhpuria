import "./Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Harsh.</div>
          <span>toggle</span>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Projects</li>
            </ul>
          </div>
          <div>
            <button class="button" role="button">
              <span class="text">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
