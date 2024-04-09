import React, { useState } from "react";
import "./navigationmenu.scss";
import { NavLink, useNavigate } from "react-router-dom";

const NavigationMenu = (props) => {
  const navigate = useNavigate();

  const [styleAnimate, setStyleAnimate] = useState("");

  const handlerNavigate = (to) => {
    console.log(to);
    setStyleAnimate("animate__flip");
    setTimeout(() => {
      navigate(to);
      setStyleAnimate("");
    }, 1000);
  };

  return (
    <nav className={props.className}>
      <NavLink to={"/product"}>Plant pots</NavLink>
      <NavLink to={"/product"}>Ceramics</NavLink>
      <NavLink to={"/product"}>Tables</NavLink>
      <NavLink to={"/product"}>Chairs</NavLink>
      <NavLink to={"/"}>Crockery</NavLink>
      <NavLink to={"/"}>Tableware</NavLink>
      <NavLink to={"/"}>Cutlery</NavLink>
    </nav>
  );
};

export default NavigationMenu;
