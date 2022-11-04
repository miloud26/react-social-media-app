import React from "react";
import Button from "../button/Button";
import Divider from "../divider/Divider";
import { Link } from "react-router-dom";
import Image from "../../img/hero.png";
import { motion } from "framer-motion";
import "./hero.scss";
const BodyHero = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="body-hero container">
      <motion.div
        initial={{ translateX: "100%", opacity: 0 }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={transition}
        className="body-hero__img"
      >
        <img src={Image} alt="img hero" />
      </motion.div>
      <motion.div
        initial={{ translateX: "-100%", opacity: 0 }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={transition}
        className="body-hero__content"
      >
        <div className="body-hero__content__intro">
          <Divider text={"Advertisement Agency"} />
        </div>
        <div className="body-hero__content__name">
          <span>Hello</span>
          <br />
          <h2>I'm Kara</h2>
          <br />
          <h1>Nour Islam</h1>
          <p>
            Since beginning my journey as a freelance designer nearby 7 years
            ago, I 've done remote work for agencies, consulted for startup, and
            collaborated with talented people to create digital products.
          </p>
        </div>
        <div className="body-hero__content__btn">
          <Button text={"Contact Us"} />
        </div>
      </motion.div>
    </div>
  );
};

export default BodyHero;
