import React, { useState } from "react";
import "./modalcomponent.scss";

const ModalComponent = ({
  children,
  value,
  setValue,
  width = undefined,
  height = undefined,
}) => {
  const [styleAnimate, setStyleAnimate] = useState(
    "modal__container animate__animated animate__fadeIn"
  );
  const closeModal = () => {
    if (value) {
      setStyleAnimate("modal__container animate__animated animate__fadeOut");
    }

    setTimeout(() => {
      setValue(!value);
    }, 1000);
  };

  return (
    <div className={styleAnimate} onClick={() => closeModal()}>
      <div
        className="modal__wrapper"
        style={{ width: width, height: height }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__closebtn" onClick={() => closeModal()}></div>
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
