import React, { useState } from "react";
import "./modalcomponent.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../Store/Reducers/ModalWindowsReducer/hiddenWindow";
const ModalComponent = ({
  children,
  width = undefined,
  height = undefined,
}) => {
  const visibleModal = useSelector((state) => state.modalWindown.value);
  const dispatch = useDispatch();
  const [styleAnimate, setStyleAnimate] = useState(
    "modal__container animate__animated animate__fadeIn"
  );

  // console.log("===>", visibleModal);
  const closeModal = () => {
    if (visibleModal) {
      setStyleAnimate("modal__container animate__animated animate__fadeOut");
    }

    setTimeout(() => {
      dispatch(toggle("value"));
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
