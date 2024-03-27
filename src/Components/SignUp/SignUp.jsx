import React, { useState } from "react";
import "./signup.scss";
import { useSelector } from "react-redux";
import StyleInput from "../../StyleComponents/StyleInput/StyleInput";
import StyleButton from "../../StyleComponents/StyleButton/StyleButton";
import StyleNotification from "../../StyleComponents/StyleNotification/StyleNotification";
import SignUpComponent from "../../StyleComponents/SignUpComponent/SignUpComponent";
const SignUp = () => {
  const { email_description, email_title } = useSelector(
    (state) => state.mainPage.value
  );

  const [signUpValue, setSignUpValue] = useState("");
  const [hotification, setNotification] = useState(false);
  const [notificationValue, setNotificationValue] = useState({});

  const sendSignUpData = () => {
    if (signUpValue == "") {
      setNotification((prev) => !prev);
      setNotificationValue({ type: "error", text: "Введите свой email" });
    }

    if (!signUpValue.includes("@") && signUpValue !== "") {
      setNotification((prev) => !prev);
      setNotificationValue({
        type: "warning",
        text: "Введите правильный email",
      });
    } else if (signUpValue !== "" && signUpValue.includes("@")) {
      setNotification((prev) => !prev);
      setNotificationValue({
        type: "success",
        text: `${signUpValue} подписался на рассылку!`,
      });
    }

    setTimeout(() => {
      setNotification((prev) => !prev);
    }, 3500);
  };

  const styleInput = {
    placeholder: "your@email.com",
    width: "354px",
  };

  return (
    <section className="signup">
      <div className="signup__wrapper container">
        <div className="signup__content">
          <h2>{email_title}</h2>
          <p>{email_description}</p>
          <div className="signup__form">
            <SignUpComponent
              placeholder={"your@email.com"}
              // style={styleInput}
            />
            {/* <StyleInput style={styleInput} onChange={setSignUpValue} />
            <StyleButton
              width="118px"
              bgColor="#2A254B"
              color={"white"}
              onClick={sendSignUpData}
            >
              Sign up
            </StyleButton> */}
          </div>
        </div>
      </div>
      {hotification ? (
        <StyleNotification
          text={notificationValue.text}
          type={notificationValue.type}
        />
      ) : undefined}
    </section>
  );
};

export default SignUp;
