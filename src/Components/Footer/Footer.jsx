import React from "react";
import "./footer.scss";
import { socialIcons } from "../../Images/sprites";
import SVGComponent from "./../../StyleComponents/SVGComponent/SVGComponent";
import StyleButton from "../../StyleComponents/StyleButton/StyleButton";
import StyleInput from "./../../StyleComponents/StyleInput/StyleInput";
import { footerMenu } from "../../Store/store";
import SignUpComponent from "../../StyleComponents/SignUpComponent/SignUpComponent";
const Footer = () => {
  const renderSocialIcons = () => {
    return socialIcons.map((item) => {
      return <li>{<SVGComponent src={item.value} />}</li>;
    });
  };

  const renderMenus = () => {
    return footerMenu.map((menu, inedx) => {
      return (
        <ul key={inedx} className={`footer_menu`}>
          <span>{menu.value}</span>
          {menu.data.map((item, inedx) => {
            return <li key={inedx}>{item}</li>;
          })}
        </ul>
      );
    });
  };

  // const styleInput = {
  //   placeholder: "your@email.com",

  //   backgroundColor: "#4E4D93",
  // };

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__top">
          <div className="footer__menus">{renderMenus()}</div>
          <div className="footer__signup">
            <h3>Join our mailing list</h3>
            <div className="footer__signup__form">
              {/* <StyleInput style={styleInput} />
              <StyleButton bgColor={"white"} color={"#4E4D93"} width={"118px"}>
                Sign up
              </StyleButton> */}
              <SignUpComponent
                placeholder={"your@email.com"}
                // style={styleInput}
              />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">Copyright 2022 Avion LTD</div>
          <div className="footer__social">
            <nav>{renderSocialIcons()}</nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
