import React from "react";
import "./FooterStyle.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h3>Rk Developer's</h3>
          <div className="social">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>

        <div className="bottom">
          <div className="right">
            <h4>Ph#</h4>
            <h4>Email : </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
