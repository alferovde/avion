import { configureStore } from "@reduxjs/toolkit";
import toggleWindow from "./Reducers/ModalWindowsReducer/hiddenWindow";
import mainPageSlice from "./Reducers/MainPageSlice/MainPageSlice";
import userSlice from "./Reducers/UserReducer/UserReducer";
import shopSlice from "./Reducers/ShopReducer/ShopReducer";
import { combineReducers } from "redux";

export const footerMenu = [
  {
    value: "Menu",
    data: [
      "New arrivals",
      "Best sellers",
      "Recently viewed",
      "Popular this week",
      "All products",
    ],
  },

  {
    value: "Categories",
    data: [
      "Crockery",
      "Furniture",
      "Homeware",
      "Plant pots",
      "Chairs",
      "Crockery",
    ],
  },

  {
    value: "Our company",
    data: ["About us", "Vacancies", "Contact us", "Privacy", "Returns policy"],
  },
];

const reducer = combineReducers({
  modalWindown: toggleWindow,
  mainPage: mainPageSlice,
  users: userSlice,
  shop: shopSlice,
});
export const store = configureStore({
  reducer,
});
