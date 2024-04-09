import React from "react";
import "./errorpage.scss";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error_page container">
      <h2>404 - Страница не найдена.</h2>
      <NavLink to={"/"}>Вернуться на главную</NavLink>
    </div>
  );
};

export default ErrorPage;
