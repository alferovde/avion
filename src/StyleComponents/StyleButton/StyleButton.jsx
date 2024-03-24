import React, { useState } from "react";
import "./stylebutton.scss";

const StyleButton = (props) => {
  const butoonColor = (value) => {
    return value;
  };

  return (
    <button
      className="style-button"
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: butoonColor(props.bgColor),
        color: props.color,
      }}
      onClick={() => (props.onClick ? props.onClick() : undefined)}
    >
      {props.children}
    </button>
  );
};

export default StyleButton;
