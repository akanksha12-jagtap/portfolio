import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.png";
import profile_img from "../../assets/prof_img1.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Enthusiastic Developer</p>
            <p>
              I am committed to continuous learning and growth, always seeking
              opportunities to enhance my knowledge and contribute to meaningful
              work.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>JAVA</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJs</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>RESEARCH PAPER</p>
        </div>
      </div>
    </div>
  );
};

export default About;
