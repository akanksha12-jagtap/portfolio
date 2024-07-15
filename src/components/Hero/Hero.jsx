import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profimg" />
      <h1>
        <span>I'm Akanksha Anil Jagtap</span>,<br /> I am a dedicated and
        passionate programmer with a strong background in Java, Python and
        Database
      </h1>
      <p>I am currently persuing MCA from Bharati Vidyapeeth</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <a
          href="https://drive.google.com/file/d/17upKhkAztQgxyMKonrPU-8hJrXMC2xE1/view?usp=sharing"
          target="_blank"
        >
          <div className="hero-resume">My Resume</div>{" "}
        </a>
      </div>
    </div>
  );
};

export default Hero;
