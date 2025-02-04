import "./Navbar.css";
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Portfolio.</div>
          {/* <span>toggle</span> */}
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <Link
                spy={true}
                activeClass="activeClass"
                to="Intro"
                smooth={true}
              >
                <li>Home</li>
              </Link>
              <Link spy={true} to="About" smooth={true}>
                <li>About</li>
              </Link>
              <Link spy={true} to="Technologies" smooth={true}>
                <li>Technologies</li>
              </Link>
              <Link spy={true} to="Projects" smooth={true}>
                <li>Projects</li>
              </Link>
            </ul>
          </div>
          <div>
            <Link spy={true} to="ContactMe" smooth={true}>
              <button class="button" role="button">
                <span class="text">Contact</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
