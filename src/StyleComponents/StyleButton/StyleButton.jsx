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
        order: props.order,
      }}
      onClick={() => (props.onClick ? props.onClick() : undefined)}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default StyleButton;
