import { configureStore } from "@reduxjs/toolkit";
import toggleWindow from "./Reducers/ModalWindowsReducer/hiddenWindow";
import mainPageSlice from "./Reducers/MainPageSlice/MainPageSlice";
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
});
export const store = configureStore({
  reducer,
});

// export const footerMen1u = [
//   {
//     value: "Menu",
//     data: {
//       id: 0,
//       value: "Menu",
//       id: 1,
//       value: "New arrivals",
//       id: 2,
//       value: "Best sellers",
//       id: 3,
//       value: "Recently viewed",
//       id: 4,
//       value: "Popular this week",
//       id: 5,
//       value: "All products",
//     },
//   },
//   ,
//   {
//     value: "Categories",
//     data: {
//       id: 0,
//       value: "Crockery",
//       id: 1,
//       value: "Furniture",
//       id: 2,
//       value: "Homeware",
//       id: 3,
//       value: "Plant pots",
//       id: 4,
//       value: "Chairs",
//       id: 5,
//       value: "Crockery",
//     },
//   },
//   ,
//   {
//     value: "Our company",
//     data: {
//       id: 0,
//       value: "About us",
//       id: 1,
//       value: "Vacancies",
//       id: 2,
//       value: "Contact us",
//       id: 3,
//       value: "Privacy",
//       id: 4,
//       value: "Returns policy",
//     },
//   },
//   ,
// ];
