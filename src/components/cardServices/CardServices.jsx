import React, { useState } from "react";
import "./cardServices.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
const CardServices = ({ icon, title, text, hoverClr }) => {
  const [hover, setHover] = useState(false);
  let hoverStyle = {};
  let iconStyle = {};
  if (hover) {
    iconStyle = {
      color: hoverClr,
      backgroundColor: "white",
    };
    hoverStyle = {
      backgroundColor: hoverClr,
      boxShadow: `-10px 40px 80px ${hoverClr}`,
      color: "white",
    };
  } else {
    iconStyle = {
      color: "white",
      backgroundColor: hoverClr,
    };
    hoverStyle = { backgroundColor: "#fff" };
  }
  return (
    <div
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={hoverStyle}
      className="card-services"
    >
      <div className="card-services__icon" style={iconStyle}>
        {icon}
      </div>
      <div className="card-services__title">{title}</div>
      <div className="card-services__text">{text}</div>
      <div className="card-services__arrow">
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default CardServices;
