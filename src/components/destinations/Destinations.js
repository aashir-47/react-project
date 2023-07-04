import React from "react";
import "./Destinations.css";
import Beach1 from "../../assests/beach7.jpg";
import Beach2 from "../../assests/beach2.jpg";
import Beach3 from "../../assests/beach3.jpg";
import Beach4 from "../../assests/beach4.jpg";
import Beach5 from "../../assests/beach5.jpg";

export const Destinations = () => {
  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On The World Best Beaches</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={Beach1} alt="/" />
          <img src={Beach2} alt="/" />
          <img src={Beach3} alt="/" />
          <img src={Beach4} alt="/" />
          <img src={Beach5} alt="/" />
        </div>
      </div>
    </div>
  );
};
