import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineAlignLeft } from "react-icons/ai";
import "./NavbarStyle.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="home" className="navbar">
      <div className="logo">
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="destinations" smooth={true} duration={500}>
          <li>Destinations</li>
        </Link>
        <Link to="imgcarguy" smooth={true} duration={500}>
          <li>Travel</li>
        </Link>
        <Link to="book" smooth={true} duration={500}>
          <li>Book</li>
        </Link>
        <Link to="search" smooth={true} duration={500}>
          <li>Views</li>
        </Link>
      </ul>
      <div className="nav-icon" style={{ marginRight: "1rem" }}>
        <BiSearch className="icon" />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav}>
        <AiOutlineAlignLeft className="icon" />
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="destinations" smooth={true} duration={500}>
            <li>Destinations</li>
          </Link>
          <Link to="imgcarguy" smooth={true} duration={500}>
            <li>Travel</li>
          </Link>
          <Link to="book" smooth={true} duration={500}>
            <li>Book</li>
          </Link>
          <Link to="search" smooth={true} duration={500}>
            <li>Views</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
