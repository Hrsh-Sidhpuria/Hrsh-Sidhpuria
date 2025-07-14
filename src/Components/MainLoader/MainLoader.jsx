import React from "react";
import "./MainLoader.css";
import Mainimage from "../../image/Portfolio-Logo.png";

function MainLoader() {
  return (
    <>
      <div className="mainLoader">
        <div className="logo-container">
          <img src={Mainimage} alt="Demo Logo" className="logo-image" />
          <h1 className="logo-text">
            Harsh Sidhpuria <br />
            Portfolio
          </h1>
        </div>
        <div className="main-loader"></div> 
      </div>
    </>
  );
}

export default MainLoader;
