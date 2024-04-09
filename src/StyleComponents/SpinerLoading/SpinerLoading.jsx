import React from "react";
import "./spiner.scss";
import SVGComponent from "../SVGComponent/SVGComponent";
import { logoAvion } from "../../Images/sprites";
const SpinerLoading = () => {
  return (
    <div className="spiner__container">
      {/* <span class="loader"></span> */}

      <h2>Загрузка...</h2>
    </div>
  );
};

export default SpinerLoading;
