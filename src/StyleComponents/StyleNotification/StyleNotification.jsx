import React, { useEffect, useState } from "react";
import "./notification.scss";
import { warningIcon, successIcon, errorIcon } from "../../Images/sprites";
import SVGComponent from "../SVGComponent/SVGComponent";
const styleNotification = (type) => {
  switch (type) {
    case "error":
      return {
        style: {
          backgroundColor: "rgb(255, 0, 0,0.500)",
          color: "yellow",
          border: "2px solid rgb(255, 0, 0)",
        },
        icon: errorIcon,
      };

    case "success":
      return {
        style: {
          backgroundColor: "rgb(0, 255, 0,0.500)",
          color: "tomato",
          border: "2px solid rgb(0, 255, 0)",
        },
        icon: successIcon,
      };

    case "warning":
      return {
        style: {
          backgroundColor: "rgb(255, 255, 0,0.500)",
          color: "black",
          border: "2px solid rgb(255, 255, 0)",
        },
        icon: warningIcon,
      };

    default:
      break;
  }
};

const StyleNotification = ({ type = "success", text }) => {
  const [hidden, setHidden] = useState(false);
  const [hiddenClass, setHiddenClass] = useState("animate__backInRight");

  const openNotification = () => {
    setHidden(true);
  };

  useEffect(() => {
    openNotification();

    setTimeout(() => {
      setHiddenNotification();
    }, 3000);
  }, []);

  const setHiddenNotification = () => {
    setHiddenClass("animate__backOutRight");
  };

  const renderNotification = () => {
    if (hidden) {
      return (
        <div
          className={`notification animate__animated ${hiddenClass}`}
          onClick={() => setHiddenNotification()}
          style={styleNotification(type).style}
        >
          <div className="notification__header">
            <div className="notification__icon">
              <SVGComponent src={styleNotification(type).icon} />
            </div>
            {<h3>{type}</h3>}
          </div>
          <div className="notification__footer">{text}</div>
        </div>
      );
    }
  };

  return renderNotification();
};

export default StyleNotification;
