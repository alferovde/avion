import React from "react";
import SVGComponent from "../SVGComponent/SVGComponent";
import { shopingCart } from "../../Images/sprites";

const ShopingCartComponent = (props) => {
  return (
    <div onClick={() => props.onClick()}>
      <SVGComponent src={shopingCart} />
    </div>
  );
};

export default ShopingCartComponent;
