import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMainPage = createAsyncThunk(
  "mainPage/getMainPage",
  async () => {
    let result = await axios({
      method: "get",
      url: "http://mainserver.dealferov.ru/public/api",
      headers: {
        // "Access-Control-Allow-Origin": "*",
      },
    });

    return result.data;
  }
);

const initialState = {
  value: "",
  features__items: [],
  new_shop_item: [],
  popular_shop_item: [],
  mainPageLoading: false,
};

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchMainPage.pending, (state, action) => {
      state.mainPageLoading = true;
    });
    builder.addCase(fetchMainPage.fulfilled, (state, action) => {
      state.mainPageLoading = false;
      state.value = action.payload[0];
      state.features__items = action.payload[1];
      state.new_shop_item = action.payload[2];
      state.popular_shop_item = action.payload[3];
    });
    builder.addCase(fetchMainPage.rejected, (state, action) => {});
  },
});

export default mainPageSlice.reducer;
