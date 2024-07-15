import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.png";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div>
              <a href={work.w_link} target="_blank">
                <img
                  key={index}
                  src={work.w_img}
                  alt="click here to view the project"
                />
              </a>
              <h3>
                Project name: <span>{work.w_name}</span>
              </h3>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
