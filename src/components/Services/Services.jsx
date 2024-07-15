import React from "react";
import ServicesData from "./Services_data";
import FlipCard from "./FlipCard";
import theme_pattern from "../../assets/theme_pattern.png";
//import "../App.css"; // Assuming you have a main CSS file
import "./Services.css";

const Services = () => {
  return (
    <div id="strengths" className="strengths">
      <div className="services-container">
        <div className="service-title">
          <h1>My Strengths</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="qty">
          {ServicesData.map((service) => (
            <FlipCard
              key={service.s_no}
              service={service}
              className="singleqty"
            />
          ))}
        </div>
      </div>
      <div className="content">
        <p className="contentp">
          Skilled in building cohesive teams through effective communication and
          a supportive leadership approach, enhancing team productivity and
          morale
        </p>
        <p className="contentp">
          Proven ability to lead and motivate teams towards achieving strategic
          goals, exemplifying strong decision-making and organizational skills.
        </p>
        <p className="contentp">
          Experienced in engaging audiences through articulate and persuasive
          public speaking, combining clarity, confidence and impact.
        </p>
      </div>
    </div>
  );
};

export default Services;
