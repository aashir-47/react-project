import React from "react";
import "./StyleBeaches.css";

const SelectBeaches = (props) => {
  return (
    <div className="select-beaches">
      <img src={props.bgImg} alt="" />
      <div className="overlay">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default SelectBeaches;
