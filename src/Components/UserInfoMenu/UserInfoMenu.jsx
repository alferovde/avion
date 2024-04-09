import React, { useState } from "react";
import SVGComponent from "../../StyleComponents/SVGComponent/SVGComponent";
import { userAvatar } from "../../Images/sprites";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../Store/Reducers/ModalWindowsReducer/hiddenWindow";
import { useCookies } from "react-cookie";
import "./userinfomenu.scss";
import UserInformation from "./../UserInformation/UserInformation";
const UserInfoMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  // const { name, email } = cookies.current_user;
  return (
    <div className="user_is_login__wrapper ">
      {cookies.current_user ? (
        <div
          className="user_is_login"
          onClick={() => setHiddenMenu((prev) => !prev)}
        >
          <img src={"https://i.pravatar.cc/20"} alt="" />
        </div>
      ) : (
        <div className="" onClick={() => dispatch(toggle("hiddenLogin"))}>
          <SVGComponent src={userAvatar} />
        </div>
      )}
      {hiddenMenu ? (
        <UserInformation
          hiddenMenu={hiddenMenu}
          setHiddenMenu={setHiddenMenu}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default UserInfoMenu;
