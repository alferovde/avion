import React, { useState } from "react";
import "./styleselect.scss";

const StyleSelect = ({ children, title, style, dataRender }) => {
  const [hidden, setHidden] = useState(false);

  const [animate, setAnimate] = useState("");

  const openSelect = (e) => {
    e.stopPropagation();
    setHidden(!hidden);
  };

  const renderChildren = () => {
    return dataRender.map((item) => {
      return (
        <label htmlFor={item}>
          <input
            type="checkbox"
            name={item}
            id={item}
            // checked={filterValue.}
            // onClick={() => handlerPriceChange(item)}
            // onClick={(e) => e.stopPropagation()}
          />
          {item}
        </label>
      );
    });
  };

  return (
    <div
      className="select__wrapper"
      onClick={(e) => openSelect(e)}
      style={{ position: "relative" }}
    >
      <span>{title}</span>

      {hidden ? (
        <div
          className={`select__body animate__animated ${animate}`}
          onClick={(e) => e.stopPropagation()}
          style={style}
        >
          {children || renderChildren()}
        </div>
      ) : undefined}
    </div>
  );
};

export default StyleSelect;
