import React from "react";
import mission_ani from "../assets/image/animation_rocket.mp4";

import { IoBulbOutline } from "react-icons/io5";
const Our_goal = () => {
  return (
    <div className="card_content">
      {/* <video id="mission_ani" autoPlay loop>
        <source src={mission_ani} type="video" />
      </video> */}

      <div className="icon_right">
        <IoBulbOutline className="icon_icon" />
      </div>
      <div className="content">
        <h4 className="title">Mission</h4>
        <p className="content_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          autem illo quasi fugit commodi eaque iusto deleniti illum, vel, sit
          aperiam soluta, voluptatem recusandae. Nisi beatae autem dolorum
          placeat
        </p>
      </div>
    </div>
  );
};

export default Our_goal;
