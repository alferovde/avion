import React, { useState, useEffect } from "react";
import "./usercartpage.scss";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserCart } from "../../Store/Reducers/ShopReducer/ShopReducer";
import { toggle } from "../../Store/Reducers/ModalWindowsReducer/hiddenWindow";
import StyleButton from "./../../StyleComponents/StyleButton/StyleButton";
const UserCartPage = () => {
  const [cookies] = useCookies();
  const loadingCart = useSelector((state) => state.shop.loadingCart);
  const [userNeedRegister, setUserNeedregister] = useState(false);
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.shop.userCartArray);

  useEffect(() => {
    if (cookies.current_user?.hasOwnProperty("id")) {
      setUserNeedregister(true);
      dispatch(toggle());
      dispatch(fetchGetUserCart(cookies.current_user.id));
    }
  }, []);
  const storage_url = process.env.REACT_APP_STORAGE_SERVER;
  let subtotal = 0;
  const renderShopingCart = () => {
    if (userCart.length) {
      return userCart.map((item) => {
        subtotal += item[1] * item[0][0]?.price;
        return (
          <li className="cart__item">
            <div className="cart_product">
              <img src={storage_url + item[0][0]?.img} alt="" />
              <div className="cart__item-info">
                <h3>{item[0][0]?.title}</h3>
                <p>{item[0][0]?.description.slice(0, 50)}</p>
                <span>₽{item[0][0]?.price}</span>
              </div>
            </div>
            <div className="cart_quantity">{item[1]}</div>
            <div className="cart_total">₽{item[1] * item[0][0]?.price}</div>
          </li>
        );
      });
    } else {
      return <h2>Корзина пуста...</h2>;
    }
  };

  return (
    <div className="usercart container">
      <div className="usercart__wrapper">
        {!userNeedRegister ? (
          <div className="shopingCart__notauth">
            <h2>Вы не авторизовались</h2>
          </div>
        ) : (
          <div className="shopingCart__container">
            <h2>Your shopping cart</h2>
            <div className="shopingCart__header">
              <div className="product__title">Product</div>
              <div className="product__quantity">Quantity</div>
              <div className="product__total">Total</div>
            </div>
            <div className="shopingCart__items">
              <ul>{!loadingCart ? renderShopingCart() : "Loading..."}</ul>
            </div>

            <div className="shopingCart__footer">
              <p>
                Subtotal <span>₽{subtotal}</span>{" "}
              </p>
              <span>Taxes and shipping are calculated at checkout</span>
              <StyleButton bgColor={"#2A254B"}>Go to checkout</StyleButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCartPage;
