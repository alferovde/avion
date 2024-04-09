import React, { useEffect, useState } from "react";
import StyleInput from "../../StyleComponents/StyleInput/StyleInput";
import "./userlogin.scss";
import StyleButton from "../../StyleComponents/StyleButton/StyleButton";
import {
  fetchUserById,
  fetchUserIsDb,
  fetchRegisterUser,
} from "../../Store/Reducers/UserReducer/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import SVGComponent from "../../StyleComponents/SVGComponent/SVGComponent";
import { logoAvion, openPassword, closePassword } from "../../Images/sprites";
import StyleNotification from "./../../StyleComponents/StyleNotification/StyleNotification";
import { toggle } from "../../Store/Reducers/ModalWindowsReducer/hiddenWindow";
import { useCookies } from "react-cookie";
const UserLogin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const isUserRegister = useSelector((state) => state.users.isUserRegister);
  const resultRegistrationValue = useSelector(
    (state) => state.users.resultRegistration
  );
  const userError = useSelector((state) => state.users.errorUser);
  const [cookies, setCookie] = useCookies([user]);
  const [currentUser, setCurrentUser] = useState();
  const [styleSuccesLogin, setStyleSuccessLogin] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [loginText, setLoginText] = useState("Авторизация");
  const [checkRegister, setCheckRegister] = useState(true);
  const [registerAnimate, setRegisterAnimate] = useState("animate__flipInX");

  const handlerGetUser = () => {
    if (isUserRegister === "Request failed with status code 401") {
      dispatch(fetchRegisterUser(currentUser));

      // dispatch(fetchUserById(currentUser));
    } else if (isUserRegister === "user is registered") {
      dispatch(fetchUserById(currentUser));
    }
  };

  const handlerUserEmail = (e) => {
    setCurrentUser({ ...currentUser, email: e });
  };

  const handlerUserPassword = (e) => {
    setCurrentUser({ ...currentUser, password: e });
  };

  const fetchCheckUserIsDB = (value) => {
    dispatch(fetchUserIsDb(value));
  };

  useEffect(() => {
    if (user) {
      setCookie("current_user", user);
      setStyleSuccessLogin("animate__heartBeat");
      setTimeout(() => {
        dispatch(toggle("value"));
      }, 1000);
    }

    if (resultRegistrationValue == "user is register") {
      setStyleSuccessLogin("animate__fadeOut");
      setRegisterAnimate("");
      setTimeout(() => {
        dispatch(fetchUserById(currentUser));
      }, 1500);
    }

    if (!isUserRegister || !currentUser?.email) {
      setLoginText("Авторизация");
    }

    if (isUserRegister === "user is registered") {
      setLoginText("Вход");
      // setCheckRegister(true);
    } else if (isUserRegister === "Request failed with status code 401") {
      setLoginText("Регистрация");
    }
  }, [user, currentUser, isUserRegister, resultRegistrationValue]);

  return (
    <div className="userLogin__container">
      <h2>Автортизация пользователя</h2>
      <div className="userLogin__wrapper">
        <div className="userLogin__left">
          <div
            className="email_input"
            onBlur={() => fetchCheckUserIsDB(currentUser?.email)}
          >
            <StyleInput
              style={{ placeholder: "Email" }}
              onChange={handlerUserEmail}
              type={"email"}
            />
          </div>

          <div className="password_input">
            <StyleInput
              style={{ placeholder: "Password" }}
              onChange={handlerUserPassword}
              type={hiddenPassword ? "password" : "text"}
            />
            {hiddenPassword ? (
              <SVGComponent
                src={openPassword}
                onClick={() => setHiddenPassword(false)}
              />
            ) : (
              <SVGComponent
                src={closePassword}
                onClick={() => setHiddenPassword(true)}
              />
            )}

            <StyleButton onClick={handlerGetUser}>{loginText}</StyleButton>
          </div>
        </div>

        <div className="userLogin__right">
          <div className={`logo_animate animate__animated ${styleSuccesLogin}`}>
            <SVGComponent src={logoAvion} />
          </div>
        </div>
        {userError ? (
          <StyleNotification type="error" text={"Email или пароль неверны"} />
        ) : (
          ""
        )}
        {isUserRegister === "Request failed with status code 401" ? (
          <StyleNotification type="warning" text={"Необходима регистрация"} />
        ) : undefined}

        {resultRegistrationValue ? (
          <StyleNotification
            type="success"
            text={"Регистрация прошла успешно"}
          />
        ) : (
          ""
        )}

        {/* //== "user is register" */}
      </div>
    </div>
  );
};

export default UserLogin;
