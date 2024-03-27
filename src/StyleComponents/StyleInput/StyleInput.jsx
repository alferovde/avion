import React from "react";
import "./myinput.scss";
const StyleInput = ({ style, onChange }) => {
  return (
    <input
      style={style}
      placeholder={style?.placeholder}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      className="myinput"
    />
  );
};

export default StyleInput;
