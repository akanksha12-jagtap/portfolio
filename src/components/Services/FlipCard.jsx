import React from "react";
import "./FlipCard.css";

const FlipCard = ({ service }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={service.s_image} alt={service.s_name} />
          <h2>{service.s_name}</h2>
        </div>
        <div className="flip-card-back">
          <h2>{service.s_name}</h2>
          <p>{service.s_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
