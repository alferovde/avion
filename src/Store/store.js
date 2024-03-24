import { configureStore } from "@reduxjs/toolkit";
import toggleWindow from "./Reducers/ModalWindowsReducer/hiddenWindow";
import mainPageSlice from "./Reducers/MainPageSlice/MainPageSlice";
import { combineReducers } from "redux";

const reducer = combineReducers({
  modalWindown: toggleWindow,
  mainPage: mainPageSlice,
});
export const store = configureStore({
  reducer,
});
