import React from "react";
import "./signup.scss";
import { useSelector } from "react-redux";
import StyleInput from "../../StyleComponents/StyleInput/StyleInput";
import StyleButton from "../../StyleComponents/StyleButton/StyleButton";
const SignUp = () => {
  const { email_description, email_title } = useSelector(
    (state) => state.mainPage.value
  );

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
            <StyleInput style={styleInput} />
            <StyleButton width="118px" bgColor="#2A254B" color={"white"}>
              Sign up
            </StyleButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
