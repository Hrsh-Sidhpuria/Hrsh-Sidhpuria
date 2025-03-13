import React from "react";
import "./Footer.css";
import Insta from "../../image/Insta.svg";
import LinkedIn from "../../image/LinkedIn White.svg";
import Git from "../../image/github.svg";
import footer_profile from "../../image/footer profile.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="f-footer">
        <div className="f-container">
          <div className="f-follow">
            <h2>Follow Me On</h2>
            <div className="f-icons">
              <a href="https://www.instagram.com/hrsh_960s/" target="_blank">
                <img src={Insta} alt="Instagram" />
              </a>
              <a
                href="https://in.linkedin.com/in/harsh-sidhpuria-26a0b62b8"
                target="_blank"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Hrsh-Sidhpuria" target="_blank">
                <img src={Git} alt="GitHub" />
              </a>
            </div>
          </div>

          <div className="f-about">
            <h3>About Me</h3>
            <p>
              Passionate developer building creative web experiences. Let's
              collaborate and create something amazing!
            </p>
          </div>
          <div className="f-profile">
            <img src={footer_profile} alt="footer profile" />
          </div>
        </div>

        <div className="f-copyright">
          © {currentYear} Harsh Sidhpuria. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
