import React from "react";
import icon from "../assets/image/icon_rotation.svg";
const Goal_card = () => {
  return (
    <div className="card_content">
      <img src={icon} alt="icon" />
      <div className="content">
        <h4 className="title">Title</h4>
        <p className="content_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quod
          quidem id officia iste, minima illum inventore facere hic soluta harum
          tempora dolor fuga dicta neque rem? Quidem, beatae distinctio.
        </p>
      </div>
    </div>
  );
};

export default Goal_card;
