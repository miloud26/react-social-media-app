import React from "react";
import "./card.scss";
const Card = ({ svg, title, text }) => {
  return (
    <div className="card">
      <div className="skills__svg">{svg}</div>
      <div className="skills__title">{title}</div>
      <div className="skills__text">{text}</div>
    </div>
  );
};

export default Card;
