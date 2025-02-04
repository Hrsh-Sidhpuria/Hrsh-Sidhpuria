import React, { useState, useEffect } from "react";
import "../ScrollUp/ScrollUp.css";
import scrollUpLogo from "../../image/arrow-up.svg";
import { Link } from "react-scroll";

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link spy={true} activeClass="activeClass" to="nav" smooth={true}>
      <div
        className={`ScrollUp ${isVisible ? "show" : ""}`}
        id="scroll-up"
        title="Scroll up"
      >
        <img src={scrollUpLogo} alt="Scroll up" />
      </div>
    </Link>
  );
}

export default ScrollUp;
