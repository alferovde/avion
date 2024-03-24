import React from "react";
import "./myinput.scss";
const StyleInput = ({ style }) => {
  return (
    <input style={style} placeholder={style.placeholder} className="myinput" />
  );
};

export default StyleInput;
