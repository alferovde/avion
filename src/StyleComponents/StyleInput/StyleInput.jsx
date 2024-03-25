import React from "react";
import "./myinput.scss";
const StyleInput = ({ style, onChange }) => {
  return (
    <input
      style={style}
      placeholder={style.placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="myinput"
    />
  );
};

export default StyleInput;
