import React from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { dataCard } from "../../local data/dataCard";
import CardServices from "../../components/cardServices/CardServices";
import Divider from "../../components/divider/Divider";
import Button from "../../components/button/Button";
const About = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="about" id="about">
      <div className="about__first"></div>
      <div className="center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transition}
          className="about__content"
        >
          <div className="about__content__write">
            <div className="about__content__write__intro">
              <Divider text={"About Us"} />
            </div>
            <h1>What We Do For Your Busnisee</h1>
            <h2>
              Kara Nour Agency that accompanies you in your digital projects!
            </h2>
            <p>
              ADMETRIX IS A DIGITAL MARKETING AGENCY SPECIALIZED IN THE
              DEVELOPMENT OF WEBSITES AND THE DEVELOPMENT OF DIGITAL STRATEGIES.
            </p>
            <div className="about__content__write__btn">
              <Button text={"Contact Us"} />
            </div>
          </div>
          <div className="about__content__card">
            {" "}
            {dataCard.map((item) => {
              return <CardServices key={item.id} {...item} />;
            })}
          </div>
        </motion.div>
      </div>
      <div className="about__second"></div>
    </div>
  );
};

export default About;
