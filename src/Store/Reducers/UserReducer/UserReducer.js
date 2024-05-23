import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserById = createAsyncThunk(
  "users/getUserById",
  async (user) => {
    let result = await axios({
      url: `http://mainserver.dealferov.ru/public/api/users`,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: user,
    });

    return result.data;
  }
);

export const fetchUserIsDb = createAsyncThunk(
  "users/checkUser",
  async (user) => {
    let result = await axios({
      url: `http://mainserver.dealferov.ru/public/api/checkuser`,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: { email: user },
    });

    return result.data[0];
  }
);

export const fetchRegisterUser = createAsyncThunk(
  "users/registerUser",
  async (user) => {
    let result = await axios({
      url: "http://mainserver.dealferov.ru/public/api/registeruser",
      method: "post",
      data: user,
    });

    return result;
  }
);

const initialState = {
  users: [],
  user: undefined,
  errorUser: undefined,
  isUserRegister: undefined,
  resultRegistration: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.errorUser = "";
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.user = action.payload[0];
      state.errorUser = "";
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.errorUser = action.error.message;
    });

    builder.addCase(fetchUserIsDb.pending, (state, action) => {
      state.isUserRegister = false;
    });
    builder.addCase(fetchUserIsDb.fulfilled, (state, action) => {
      state.isUserRegister = false;
      state.isUserRegister = action.payload;
    });
    builder.addCase(fetchUserIsDb.rejected, (state, action) => {
      state.isUserRegister = false;
      state.isUserRegister = action.error.message;
    });

    builder.addCase(fetchRegisterUser.pending, (state, action) => {});
    builder.addCase(fetchRegisterUser.fulfilled, (state, action) => {
      console.log("re uer2", action);
      state.resultRegistration = action.payload.data;
    });
    builder.addCase(fetchRegisterUser.rejected, (state, action) => {});
  },
});

export default userSlice.reducer;
