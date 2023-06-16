import React from "react";
import "./AboutMe.css";
import pkFlag from "../../images/pkLogo.png";
import tmuLogo from "../../images/tmuLogo.png";
import programmingLogo from "../../images/AmmarHakimLogoInitials.png";

const AboutMe = () => {
  return (
    <div className="a-container" id="a-container">

      <div className="a-left">
        <div className="a-contents">
          <h1 className="a-title">About Me</h1>
          <p className="a-description">
            Who is Ammar Hakim? I am a 17-year-old boy born in Gujrat Pakistan coming to this country when I was just 2 years old. Upon immigration, my family and I had settled in an apartment in Toronto ON for a period of 5 years where we had then moved to a house in Mississauga where we have permanently settled ever since.
            My Hobbies Personally, I come to enjoy lots of various activities, my favourite, team sports. Some hobbies which I enjoy include sports such as basketball and soccer which in regular years have played outside of school leagues. In terms of my enjoyment solo, I love playing video games with cool stories and journeys and very much enjoy programming. Programming is something which I have day by day been taking excessive interest in-- the language of machines. I am also keen in the field of video editing and photoshop. Over the course of many years I have become very proficient and strong at these skills and day by day continue to develop and practice as a sort of art distracting my mind from stressors.
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
