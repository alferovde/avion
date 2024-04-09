// import React, { useEffect, useState } from "react";
// import "./shopingcart.scss";
// import { useCookies } from "react-cookie";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchGetUserCart } from "../../Store/Reducers/ShopReducer/ShopReducer";
// const ShopingCart = () => {
//   const [cookies] = useCookies();
//   const [userNeedRegister, setUserNeedregister] = useState(false);
//   const dispatch = useDispatch();
//   const userCart = useSelector((state) => state.shop.userCartArray);
//   console.log("=--=userCart-=-=>>", userCart);
//   useEffect(() => {
//     if (cookies.current_user?.hasOwnProperty("id")) {
//       setUserNeedregister(true);

//       dispatch(fetchGetUserCart(cookies.current_user.id));
//     }
//   }, []);
//   const storage_url = process.env.REACT_APP_STORAGE_SERVER;
//   // console.log(cookies.current_user?.hasOwnProperty("id"));

//   const renderShopingCart = () => {
//     return userCart.map((item) => {
//       return (
//         <li>
//           <img src={storage_url + item[0][0].img} alt="" width={"100px"} />
//         </li>
//       );
//       console.log("-->", item[0][0]);
//       console.log("-->", item[1]);
//     });
//   };

//   return (
//     <div className="shopingCart__wrapper">
//       {!userNeedRegister ? (
//         <div className="shopingCart__notauth">
//           <h2>Вы не авторизовались</h2>
//         </div>
//       ) : (
//         <div className="shopingCart__container">
//           <h2>Your shopping cart</h2>
//           <div className="shopingCart__header">
//             <div className="product__title">Product</div>
//             <div className="product__quantity">Quantity</div>
//             <div className="product__total">Total</div>
//           </div>
//           <div className="shopingCart__items">
//             <ul>{renderShopingCart()}</ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopingCart;
