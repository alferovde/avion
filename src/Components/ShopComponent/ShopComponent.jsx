import React, { useState } from "react";
import "./shopcomponent.scss";
import { useNavigate } from "react-router-dom";
const ShopComponent = ({
  title,
  price,
  img,
  id,
  is_large,
  style,
  className,
}) => {
  const storage_url = process.env.REACT_APP_STORAGE_SERVER;
  const [animation, setAnimation] = useState("");

  let item_img = storage_url + img;
  const navigate = useNavigate();
  const navigateTo = (id) => {
    console.log(id);
    setAnimation("animate__shakeX");
    setTimeout(() => {
      navigate(`/product/${id}`);
    }, 1000);
  };

  return (
    <div
      className={
        is_large == 1
          ? `shop-component__item-large  animate__animated ${animation} ${className}`
          : `shop-component__item animate__animated  ${animation}  ${className}`
      }
      onClick={() => navigateTo(id)}
      style={style}
    >
      <img src={item_img} alt="" />
      <h4>{title}</h4>
      <p>£{price}</p>
    </div>
  );
};

export default ShopComponent;
