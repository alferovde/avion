import React from "react";

const SVGComponent = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.src}
    </div>
  );
};

export default SVGComponent;
