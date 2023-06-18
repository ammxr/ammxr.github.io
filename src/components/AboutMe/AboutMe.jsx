import React from "react";
import "./AboutMe.css";
import pkFlag from "../../images/pkLogo.png";
import tmuLogo from "../../images/tmuLogo.png";
import programmingLogo from "../../images/tmuLogo.png";

const AboutMe = () => {
  return (
    <div className="a-container" id="a-container">
      <div className="a-left">
        <div className="a-contents">
          <div className="a-titleContainer">
            <h1 className="a-title">About Me</h1>
            <div className="a-wave"></div>
          </div>
          <p className="a-description">
           Hi👋 I'm Ammar Hakim! I'm a student at Toronto Metropolitan University, pursuing my passion for technology 🌐📱 and diving deeper into the fascinating world of machine learning 🤖📚. I'm constantly exploring new frontiers in this field and eager to contribute to its advancements. Let's connect and embark on this exciting journey together! 🚀🔬
          </p>
          <button className="button s-button">My Resume</button>
        </div>
      </div>

      <div className="a-right">
        <div className="a-secCircle">
          <img src={pkFlag} alt="PK Flag" />
        </div>
        <div className="a-secCircle">
          <img src={tmuLogo} alt="TMU Logo" />
        </div>
        <div className="a-secCircle">
          <img src={programmingLogo} alt="Programming Logo" />
        </div>
        <div className="a-mainCircle">
          <div className="a-mainCircleGlow"></div>
          <div className="a-mainCircleLogo">Logo</div>
        </div>
        <div className="a-backCircle"></div>
        <div className="a-backCircle"></div>
      </div>
    </div>
  );
};

export default AboutMe;
