import { useEffect, useState } from "react";
import React from "react";
import "./mobilemenu.scss";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import SVGComponent from "../../StyleComponents/SVGComponent/SVGComponent";
import { shopingCart, userAvatar } from "../../Images/sprites";
import ShopingCartComponent from "./../../StyleComponents/ShopingCartComponent/ShopingCartComponent";

const MobileMenu = (props) => {
  const [hiddenMenuStyle, setHiddenMenuStyle] = useState(
    "mobile-menu__wrapper animate__animated  animate__slideInRight "
  );

  const closeMenu = () => {
    if (props.value) {
      setHiddenMenuStyle(
        "mobile-menu__wrapper animate__animated animate__slideOutRight"
      );
      setTimeout(() => {
        props.setValue(!props.value);
      }, 1000);
    }
  };

  return (
    <div className="mobilemenu__container" onClick={() => closeMenu()}>
      <div className={hiddenMenuStyle} onClick={(e) => e.stopPropagation()}>
        <div className="mobile__closebtn" onClick={() => closeMenu()}></div>

        <NavigationMenu className="mobile-menu" />
        <br />
        <ShopingCartComponent onClick={() => console.log("sdf")} />
      </div>
    </div>
  );
};

export default MobileMenu;
