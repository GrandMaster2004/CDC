import React from "react";
import Goal_card from "../components/Goal_card";
import "./Goal.css";
import girl from "../assets/image/girl.svg";
const Goal = () => {
  return (
    <div className="goal_content">
      <span className="shadow_red"> </span>
      <div className="btn">
        <button>Our Mission</button>
        <button>Opportunities</button>
      </div>
      <div className="main_container">
        <div className="left_goal">
          <img src={girl} alt="img" />
        </div>
        <div className="right_goal">
          <Goal_card />
          <Goal_card />
          <Goal_card />
        </div>
      </div>
    </div>
  );
};

export default Goal;
