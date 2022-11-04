import React from "react";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer__first">
        <div className="footer__first__part">
          <div className="footer__first__part__logo">
            <a href="#home">
              <h1>logo</h1>
            </a>
          </div>
          <div className="footer__first__part__links">
            <ul>
              <li className="title"> links</li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
            </ul>
          </div>
          <div className="footer__first__part__contact">
            <ul>
              <li className="title"> Contact</li>

              <li>+213 777651022</li>
              <li>+213 777651022</li>
              <li>info@miloudb.com</li>
            </ul>
          </div>
          <div className="footer__first__part__address">
            <ul>
              <li className="title"> Address</li>

              <li>Ain Defla</li>
              <li>Khemis Milaina 44001</li>
              <li>Hay El Salam</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__second">
        <div className="footer__second__left">
          Copyright © 2022 Agency By Kara Nour. All Rights Reserved.
        </div>
        <div className="footer__second__right">
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="https://linkdin.com" target="_blank">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
