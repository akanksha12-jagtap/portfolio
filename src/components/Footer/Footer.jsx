import React from "react";
import "./Footer.css";
import logo from "../../assets/logo2.png";
const Footer = () => {
  return (
    <div className="footer">
      <hr></hr>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            Dedicated and passionate programmer with a strong background in
            Java, Python and Database, currently persuing MCA from Bharati
            Vidyapeeth
          </p>
        </div>
        <div className="footer-top-right">
          <p>© 2024 Akanksha Jagtap. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
