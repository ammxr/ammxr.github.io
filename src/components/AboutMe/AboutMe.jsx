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
          Hey there! I'm Ammar Hakim, a second-year computer science student at Toronto Metropolitan University. I'm driven by an insatiable passion for machine learning and the incredible advancements it promises for the future. Originally from Gujrat, Pakistan, I've been immersed in the world of technology since a young age. As I settled in Mississauga with my family, my fascination with programming and the language of machines took off. Every day, I'm captivated by the endless possibilities and exciting challenges that computer science offers. With a keen eye for detail and a creative mindset, I thrive on solving complex problems through coding. From developing innovative software solutions to exploring cutting-edge algorithms, I find joy in pushing the boundaries of what's possible. Join me on this exhilarating journey as I continue to hone my skills, delve into new technologies, and make a meaningful impact in the world of computer science. Together, let's shape a future powered by innovation and limitless potential.                      
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
