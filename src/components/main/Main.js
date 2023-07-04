import React from "react";
import "./MainStyle.css";
import Video from "../../assests/beachvideo.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Main = () => {
  return (
    <div className="main">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Let Us Take You Away</h1>
        <h2>To World's Most Beautifull Beaches</h2>
        <form action="" className="form">
          <div>
            <input type="text" placeholder="Search Destinations" />
          </div>
          <div>
            <button>
              {" "}
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
