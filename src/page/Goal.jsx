import React from "react";
import Goal_card from "../components/Goal_card";
import "./Goal.css";
import girl from "../assets/image/girl.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Goal = () => {
  return (
    <div className="goal_content">
      <span className="shadow_red"> </span>
      <motion.div className="btn">
        <button>Our Mission</button>
        <button>Opportunities</button>
      </motion.div>
      <div className="main_container">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="left_goal icon_box"
        >
          <img src={girl} alt="img" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="right_goal"
        >
          <Goal_card />
          <Goal_card />
          <Goal_card />
        </motion.div>
      </div>
    </div>
  );
};

export default Goal;
