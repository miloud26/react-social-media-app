import React from "react";
import "./home.scss";
import BodyHero from "../../components/hero/Hero";
import Services from "../services/Services";
import About from "../about/About";
import Project from "../project/Project";
import Contact from "../contact/Contact";
const Home = () => {
  return (
    <div className="home ">
      <BodyHero />
      <About />
      <Services />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
