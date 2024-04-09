import React, { useState } from "react";
import "./userinformation.scss";
import SVGComponent from "../../StyleComponents/SVGComponent/SVGComponent";
import { logOutimg } from "../../Images/sprites";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const UserInformation = ({ hiddenMenu, setHiddenMenu }) => {
  const [style, setStyle] = useState("animate__backInDown");
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const closeMenu = () => {
    setStyle("animate__backOutUp");

    setTimeout(() => {
      setHiddenMenu(!hiddenMenu);
    }, 1000);
  };

  const logoutUser = () => {
    // console.log("cookies user--->", cookies.current_user);

    closeMenu();
    navigate("/");
    removeCookie("current_user");
    window.location.reload();
    // setTimeout(() => {
    //   // window.location.reload();
    //   removeCookie("current_user");
    // }, 500);
  };

  // const { name, email } = cookies.current_user;

  // console.log("use-->", cookies.current_user.name);

  return (
    <div className={`user-information__wrapper animate__animated ${style}`}>
      <div className="close_menu" onClick={() => closeMenu()}></div>
      <div className="user-information__body">
        {/* <p>{name}</p>
        <p>{email}</p> */}

        <div className="logout" onClick={logoutUser}>
          <SVGComponent src={logOutimg} />
          Выход
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
