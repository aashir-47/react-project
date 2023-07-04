import React from "react";
import "./CarguyStyle.css";
import Beach1 from "../../assests/beach7.jpg";
import Beach2 from "../../assests/beach2.jpg";
import Beach3 from "../../assests/beach3.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Imgcarguy = () => {
  return (
    <div name="imgcarguy" className="container">
      {" "}
      <Carousel
        className="Imgcarguy"
        showArrow={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={Beach1} alt="/" />
          <p className="legend">Rk Developer's</p>
        </div>
        <div>
          <img src={Beach2} alt="/" />
          <p className="legend">Rk Developer's</p>
        </div>
        <div>
          <img src={Beach3} alt="/" />
          <p className="legend">Rk Developer's</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Imgcarguy;
