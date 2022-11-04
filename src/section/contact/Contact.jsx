import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import Divider from "../../components/divider/Divider";
import Form from "../../components/form/Form";
const Contact = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="contact container" id="contact">
      <motion.div
        initial={{ translateX: "-100%", opacity: 0 }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={transition}
        className="contact__content"
      >
        <Divider text={"Contact Me"} />
        <h1>Get In Touch With Me</h1>
        <p>
          The technological revolution is changing aspect of our lives, and the
          fabric of society itself. it's also changing the way we learn and what
          we learn. Factual knowledge is less prized when everything you ever
          need to know can be found on your phone. There's no imperative to be
          an expert at doing everything when you can.
        </p>
        <div className="contact__content__btn-icon"></div>
      </motion.div>
      <motion.div
        initial={{ translateX: "100%", opacity: 0 }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={transition}
        className="contact__form"
      >
        <Form />
      </motion.div>
    </div>
  );
};

export default Contact;
