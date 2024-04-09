import React, { useState } from "react";
import StyleInput from "../StyleInput/StyleInput";
import StyleButton from "../StyleButton/StyleButton";
import StyleNotification from "../StyleNotification/StyleNotification";

const SignUpComponent = ({ placeholder }) => {
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
    placeholder: placeholder,
    // width: "354px",
  };

  return (
    <div className="signup-component">
      <StyleInput
        style={styleInput}
        onChange={setSignUpValue}
        // placeholder={placeholder}
      />
      <StyleButton onClick={sendSignUpData}>Sign up</StyleButton>

      {hotification ? (
        <StyleNotification
          text={notificationValue.text}
          type={notificationValue.type}
        />
      ) : undefined}
    </div>
  );
};

export default SignUpComponent;
