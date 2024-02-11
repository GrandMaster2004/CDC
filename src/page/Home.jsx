import React from "react";
import Navbar from "../components/Navbar";
import main_boy from "../assets/image/main_boy.svg";
import goal from "../assets/image/icon_rotation1.svg";
import rocket from "../assets/image/icon_rotation2.svg";
import paper_plane from "../assets/image/icon_rotation3.svg";
import box_icon1 from "../assets/image/box1.svg";
import box_icon2 from "../assets/image/box2.svg";
import "./Home.css";
import About from "../components/About";
import Goal from "./Goal";
import Roadmap from "../components/Roadmap";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="home">
      <span className="top_shadow"></span>
      <div className="main">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="main_left"
        >
          <div className="boy_img">
            <span>Coders & Developers</span>
            <br />
            <span className="club_text boy-img">Club</span>
            <div className="text_bottom">
              <div className="left_text">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  optio explicabo vitae libero at pariatur commodi eius officiis
                  debitis excepturi?
                </p>
              </div>
              <div className="right_text">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit nihil maxime magnam quas adipisci placeat
                  asperiores nesciunt.
                </p>
              </div>
            </div>
          </div>
          <span className="spot_left shadow_common"></span>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="main_right"
        >
          <div className="circle_outer">
            {/* <span className="rotation">
              <img src={goal} className="goal" alt="img" />
            </span>
            <span className="rotation">
              <img src={rocket} alt="img" className="plane" />
            </span> */}
            <span className="rotation">
              <img src={paper_plane} className="rocket" alt="img" />
            </span>
          </div>
          <div className="icon_shadow">
            <img src={box_icon1} alt="img" className="icon_box" />
          </div>
          <div className="icon_shadow1">
            <img src={box_icon2} alt="img" className="icon_box" />
          </div>
          <span className="spot_right shadow_common"></span>
          <span className="spot_right1 shadow_common"></span>
          <motion.div
            animate={{
              scale: [1, 1, 1, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "50%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="circle_inner border-gradient"
          ></motion.div>
          <img src={main_boy} alt="img" className="boy_img" />
        </motion.div>
        <motion.div className="circle_shadow">
          <span className="left_shadow shadow_common"></span>
          <span className="right_shadow shadow_common"></span>
        </motion.div>
      </div>

      <About />
      <Goal />
      <Roadmap />
    </div>
  );
};

export default Home;
