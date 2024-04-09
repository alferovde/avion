import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import "./productid.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchProductById,
  fetchAddToCart,
  clearResultAddToCart,
} from "../../Store/Reducers/ShopReducer/ShopReducer";
import { useCookies } from "react-cookie";
import StyleButton from "./../../StyleComponents/StyleButton/StyleButton";
import StyleNotification from "./../../StyleComponents/StyleNotification/StyleNotification";
const ProductID = () => {
  const dispatch = useDispatch();
  const storage_url = process.env.REACT_APP_STORAGE_SERVER;
  const [quantitity, setQuantitity] = useState(1);
  const currentProduct = useSelector((state) => state.shop.singleProduct);
  const [limitProduct, setLimitProduct] = useState(false);
  const currentId = useParams();
  const [cookies] = useCookies();
  let backgroundImage = storage_url + currentProduct.img;
  const addToCartResult = useSelector((state) => state.shop.addToCartResult);
  const [userNeedRegister, setUserNeedregister] = useState(false);

  const style = () => {
    if (currentProduct.is_large) {
      return { width: "100%" };
    }
  };

  useEffect(() => {
    dispatch(fetchProductById(currentId));
  }, []);

  const handlerSetQuantitity = (value) => {
    if (value === "+" && quantitity < currentProduct.amount) {
      setQuantitity(quantitity + 1);
    } else if (value === "-" && quantitity !== 0) {
      setQuantitity(quantitity - 1);
    }

    if (quantitity >= currentProduct.amount) {
      setLimitProduct(true);

      setTimeout(() => {
        setLimitProduct(false);
      }, 5000);
    }
  };

  // console.log("---->>>", cookies.current_user.id);

  const handlerAddToCart = () => {
    console.log("-cookies--->", cookies.current_user?.hasOwnProperty("id"));
    if (cookies.current_user?.hasOwnProperty("id")) {
      dispatch(
        fetchAddToCart({
          user_id: cookies.current_user.id,
          product_id: currentProduct.id,
          amount: quantitity,
        })
      );
    } else {
      console.log("need to register");
      setUserNeedregister(true);
    }

    setTimeout(() => {
      setUserNeedregister(false);
    }, 5000);
  };

  return (
    <section className="product-page-id">
      <div className="product-id__wrapper container">
        <div className="product__left">
          <img src={backgroundImage} alt="" style={style()} />
        </div>
        <div className="product__right">
          <h2>{currentProduct.title}</h2>
          <span>₽{currentProduct.price}</span>
          <div className="product-description">
            <h4>Product description</h4>
            <p>{currentProduct.description}</p>
          </div>
          <div className="dimensions">
            <h4>Dimensions</h4>
            <div className="dimensions__items">
              <div className="heigt">
                <span>Heigt</span>
                {currentProduct.size_h}sm
              </div>
              <div className="width">
                <span>Width</span>
                {currentProduct.size_w}sm
              </div>
              <div className="depth">
                <span>Depth</span>
                {currentProduct.size_d}sm
              </div>
            </div>

            <div className="quantitity">
              <h4>Quantitity</h4>
              <div className="quantitity__form">
                <div
                  className="input_plus"
                  onClick={() => handlerSetQuantitity("+")}
                >
                  +
                </div>
                <input type="number" value={quantitity} />
                <div
                  className="input_minus"
                  onClick={() => handlerSetQuantitity("-")}
                >
                  -
                </div>
              </div>
            </div>

            <div className="product__btn">
              <StyleButton
                bgColor={"#2A254B"}
                onClick={() => handlerAddToCart()}
              >
                Add to cart
              </StyleButton>
              <StyleButton bgColor={"#fff"} color={"black"}>
                Save to favorites
              </StyleButton>
            </div>
          </div>
        </div>
      </div>
      {limitProduct ? (
        <StyleNotification
          type="warning"
          text={`Количество товара ${currentProduct.title} нет в таком количестве. Доступно для заказа  ${currentProduct.amount}`}
        />
      ) : undefined}
      {addToCartResult ? (
        <StyleNotification
          type="success"
          text={`Товар ${currentProduct.title} успешно добавлен!`}
        />
      ) : undefined}
      {userNeedRegister ? (
        <StyleNotification
          type="error"
          text={`Необходимо войти, чтобы делать покупки`}
        />
      ) : undefined}
    </section>
  );
};

export default ProductID;
