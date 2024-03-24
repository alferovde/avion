import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  hiddenSearch: false,
  hiddenCart: false,
  hiddenLogin: false,
};

export const toggleWindow = createSlice({
  name: "modalWindown",
  initialState,
  reducers: {
    toggle: (state, action) => {
      console.log("action-->", action);

      switch (action.payload) {
        case "hiddenSearch":
          console.log(action.payload);
          state.hiddenSearch = !state.value;
          state.value = !state.value;
          break;
        case "hiddenCart":
          console.log(action.payload);
          state.hiddenCart = !state.value;
          state.value = !state.value;
          break;
        case "hiddenLogin":
          console.log(action.payload);
          state.hiddenLogin = !state.value;
          state.value = !state.value;
          break;

        default:
          console.log("close all");
          state.hiddenLogin = false;
          state.hiddenCart = false;
          state.hiddenSearch = false;
          state.value = false;
          break;
      }
    },
  },
});

export const { toggle } = toggleWindow.actions;

export default toggleWindow.reducer;
