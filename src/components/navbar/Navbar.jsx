import React, { useState } from "react";
import "./navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Navbar = () => {
  const [openNav, setNavOpen] = useState(false);
  return (
    <div className="navbar container">
      <div className="navbar__logo" onClick={() => setNavOpen(!openNav)}>
        <a href="#home">
          <h1>logo</h1>
        </a>
      </div>
      <div className={openNav ? "navbar__links openNav" : "navbar__links"}>
        <ul>
          <li onClick={() => setNavOpen(!openNav)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setNavOpen(!openNav)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setNavOpen(!openNav)}>
            <a href="#services">Services</a>
          </li>
          <li onClick={() => setNavOpen(!openNav)}>
            <a href="#project">Project</a>
          </li>
          <li onClick={() => setNavOpen(!openNav)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar__btn" onClick={() => setNavOpen(!openNav)}>
        {openNav ? (
          <AiOutlineCloseCircle className="close" />
        ) : (
          <AiOutlineMenu />
        )}
      </div>
    </div>
  );
};

export default Navbar;
