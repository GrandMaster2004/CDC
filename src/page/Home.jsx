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

const Home = () => {
  return (
    <div className="home">
      {/* <Navbar /> */}
      <span className="top_shadow"></span>
      <div className="main">
        <div className="main_left">
          Coders & Developers
          <br />
          <span className="club_text">Club</span>
        </div>
        <div className="main_right">
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
            <img src={box_icon1} alt="img" />
          </div>
          <div className="icon_shadow1">
            <img src={box_icon2} alt="img" />
          </div>
          <div className="circle_inner border-gradient"></div>
          <img src={main_boy} alt="img" />
        </div>
        <div className="circle_shadow">
          <span className="left_shadow shadow_common"></span>
          <span className="right_shadow shadow_common"></span>
        </div>
      </div>

      <About />
      <Goal />
      <Roadmap />
    </div>
  );
};

export default Home;
