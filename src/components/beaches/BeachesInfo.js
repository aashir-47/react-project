import React from "react";
import "./BeachesInfoStyle.css";

import Beach1 from "../../assests/beach7.jpg";
import Beach2 from "../../assests/beach2.jpg";
import Beach3 from "../../assests/beach3.jpg";
import Beach4 from "../../assests/beach4.jpg";
import Beach5 from "../../assests/beach5.jpg";
import Beach6 from "../../assests/beach6.jpg";

import SelectBeaches from "../selectbeaches/SelectBeaches";

const BeachesInfo = () => {
  return (
    <div name="views" className="beach-info">
      <div className="container">
        <SelectBeaches bgImg={Beach1} text="Palolem Beach" />
        <SelectBeaches bgImg={Beach2} text="Baga Beach" />
        <SelectBeaches bgImg={Beach3} text="Radhanagar Beach" />
        <SelectBeaches bgImg={Beach4} text="Arambol Beach" />
        <SelectBeaches bgImg={Beach5} text="Varkala Beach" />
        <SelectBeaches bgImg={Beach6} text="Vagator Beach" />
      </div>
    </div>
  );
};

export default BeachesInfo;
