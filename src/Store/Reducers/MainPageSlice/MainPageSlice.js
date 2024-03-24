import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMainPage = createAsyncThunk(
  "mainPage/getMainPage1",
  async () => {
    let result = await axios({
      method: "get",
      url: "http://127.0.0.1:8000/api",
    });
    // .then(function (response) {
    //   console.log("response", response);

    //   // return response.data;
    // });

    return result.data;
  }
);

const initialState = {
  value: "",
  features__items: [],
  new_shop_item: [],
  popular_shop_item: [],
};

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchMainPage.pending, (state, action) => {
      // console.log("pending", state);
      // console.log("pending", action);
    });
    builder.addCase(fetchMainPage.fulfilled, (state, action) => {
      console.log("fulfilled", state);
      console.log("fulfilled", action.payload);

      state.value = action.payload[0];
      state.features__items = action.payload[1];
      state.new_shop_item = action.payload[2];
      state.popular_shop_item = action.payload[3];
    });
    builder.addCase(fetchMainPage.rejected, (state, action) => {
      // console.log("rejected", state);
      // console.log("rejected", action);
    });
  },
});

export default mainPageSlice.reducer;
