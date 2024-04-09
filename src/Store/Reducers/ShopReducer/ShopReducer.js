import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductById = createAsyncThunk(
  "shop/productById",

  async ({ id }) => {
    let result = await axios({
      url: `http://127.0.0.1:8000/api/shop/${id}`,
      method: "get",
    });

    // console.log(result);

    return result.data[0];
  }
);

export const fetchAddToCart = createAsyncThunk(
  "shop/addToCart",
  async (data) => {
    let result = await axios({
      url: `http://127.0.0.1:8000/api/addtocart/`,
      method: "post",
      data: data,
    });

    // console.log("--->", data);

    return result.data;
  }
);

export const fetchGetUserCart = createAsyncThunk(
  "shop/getUserCart",
  async (user) => {
    let result = await axios({
      url: `http://127.0.0.1:8000/api/usercart/${user}`,
      method: "get",
    });

    return result.data;
  }
);

export const fetchAllproduct = createAsyncThunk(
  "shop/allproduct",
  async (data) => {
    let res = data.price.split(",").map((item) => item.replace("-", " "));
    res = res.join(" ").split(" ");

    res = res.filter(function (entry) {
      return entry.trim() != "";
    });

    // res.map((item) => (item !== "" ? Number(item) : item));
    // res.filter((n) => n !== " ");
    let max = Math.max.apply(Math, res);
    let min = Math.min.apply(Math, res);
    console.log("value--111->", res);
    console.log("max=>", res ? Math.max.apply(Math, res) : undefined);
    console.log("min=>", res ? Math.min.apply(Math, res) : undefined);

    if (data.price.length == 1) data.price = undefined;

    let result = await axios({
      url: `http://127.0.0.1:8000/api/shoppage/?${
        data.price ? "price" : undefined
      }=${min} - ${max}&${
        data.product_designer ? "product_designer" : undefined
      }=${data.product_designer}&${
        data.product_type ? "product_type" : undefined
      }=${data.product_type}&value=${data.value}`,
      method: "get",
    });
    //&priceMin=${data}
    // console.log("---->", result);

    // `http://127.0.0.1:8000/api/shoppage/?priceMin=${
    //     data.minPrise
    //   }&priceMax=${data.maxPrice}&${
    //     data.product_designer ? "product_designer" : undefined
    //   }=${data.product_designer}&${
    //     data.product_type ? "product_type" : undefined
    //   }=${data.product_type}&value=${data.value}`

    return result.data;
  }
);

const initialState = {
  isLoading: false,
  error: "",
  singleProduct: {},
  productArray: [],
  addToCartResult: false,
  userCartArray: [],
  loadingCart: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    clearResultAddToCart(state) {
      state.addToCartResult = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state, action) => {
      // console.log(action);
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      // console.log(action);

      state.addToCartResult = false;

      state.singleProduct = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      // console.log(action);
    });

    builder.addCase(fetchAddToCart.pending, (state, action) => {
      // console.log(action);
      state.addToCartResult = false;
    });
    builder.addCase(fetchAddToCart.fulfilled, (state, action) => {
      // console.log(action);
      state.addToCartResult = true;

      state.userCartArray = action.payload;
    });
    builder.addCase(fetchAddToCart.rejected, (state, action) => {
      // console.log(action);
    });

    builder.addCase(fetchGetUserCart.pending, (state, action) => {
      // console.log(action);
      state.loadingCart = true;
    });
    builder.addCase(fetchGetUserCart.fulfilled, (state, action) => {
      console.log("=--user cart-=-=>>", action.payload[0]);

      state.userCartArray = action.payload[0];
      state.loadingCart = false;
    });
    builder.addCase(fetchGetUserCart.rejected, (state, action) => {
      // console.log(action);
    });

    builder.addCase(fetchAllproduct.pending, (state, action) => {
      // console.log(action);
      state.isLoading = true;
    });
    builder.addCase(fetchAllproduct.fulfilled, (state, action) => {
      // console.log("=--all product-=-=>>", action.payload);
      state.isLoading = false;
      state.productArray = action.payload;
    });
    builder.addCase(fetchAllproduct.rejected, (state, action) => {
      // console.log(action);
    });
  },
});

export const { clearResultAddToCart } = shopSlice.actions;
export default shopSlice.reducer;
