import React from "react";
import "./navigationmenu.scss";
import { NavLink } from "react-router-dom";
const NavigationMenu = (props) => {
  return (
    <nav className={props.className}>
      <NavLink to={"#"}>Plant pots</NavLink>
      <NavLink to={"#"}>Ceramics</NavLink>
      <NavLink to={"#"}>Tables</NavLink>
      <NavLink to={"#"}>Chairs</NavLink>
      <NavLink to={"#"}>Crockery</NavLink>
      <NavLink to={"#"}>Tableware</NavLink>
      <NavLink to={"#"}>Cutlery</NavLink>
    </nav>
  );
};

export default NavigationMenu;
