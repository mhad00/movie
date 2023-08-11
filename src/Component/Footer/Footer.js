import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="fullwh-footer">
      <div className="container-linh">
        <div className="left-element-linh">
          <h1>
            Our platform is trusted
            <br /> by millions &features
            <br /> best updated movies <br />
            all around the world.
          </h1>
          <div className="support-linh">
            <ul>
              <a href="#">
                <li>Privacy policy</li>
              </a>
              <a href="#">
                <li>Term of service</li>
              </a>
              <a href="#">
                <li>Language</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="right-element-linh">
          <div className="navigation-linh">
            <ul>
              <a href="#">
                <li>Home </li>
              </a>
              <a href="#">
                <li>Discover </li>
              </a>
              <a href="#">
                <li>Influence </li>
              </a>
              <a href="#">
                <li>Release</li>
              </a>
            </ul>
          </div>
          <div className="social-linh">
            <a href="#">
              <FaFacebookSquare size="40" className="fb" />
            </a>
            <a href="#">
              <FaInstagramSquare size="40" className="ig" />
            </a>
            <a href="#">
              <FaTwitterSquare size="40" className="tw" />
            </a>
            <a href="#">
              <AiFillGoogleSquare size="40" className="gg" />
            </a>
          </div>
          <h2>© 2023</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
