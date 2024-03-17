import React from "react";

const SVGComponent = (props) => {
  return <div className={props.className}>{props.src}</div>;
};

export default SVGComponent;
