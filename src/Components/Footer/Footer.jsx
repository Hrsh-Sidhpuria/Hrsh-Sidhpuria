import "./Footer.css";
import Insta from "../../image/Insta.svg";
import LinkedIn from "../../image/LinkedIn White.svg";
import Git from "../../image/github.svg";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="f-footer">
        <div className="f-info">
          <div className="f-mail">harshsidhpuria@gmail.com</div>
          <div className="f-icons">
            <div className="f-insta">
              <a href="https://www.instagram.com/hrsh_960s/" target="_blank">
                <img src={Insta} alt="" />
              </a>
            </div>
            <div className="f-Linkedin">
              <a
                href="https://in.linkedin.com/in/harsh-sidhpuria-26a0b62b8"
                target="_blank"
              >
                <img src={LinkedIn} alt="" />
              </a>
            </div>

            <div className="f-github">
              <a href="https://github.com/Hrsh-Sidhpuria" target="_blank">
                <img src={Git} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
