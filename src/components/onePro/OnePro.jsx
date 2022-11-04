import React from "react";
import "./onePro.scss";
const OnePro = ({ img }) => {
  return (
    <div className="one-pro">
      <img src={img} alt="slider" />
    </div>
  );
};

export default OnePro;
