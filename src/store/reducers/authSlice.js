import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const initialState = {
  lookAuth: false,
  stateTypeAuth: false,
  access:
    localStorage.getItem("access") !== "" ? localStorage.getItem("access") : "",
  refresh:
    localStorage.getItem("refresh") !== ""
      ? localStorage.getItem("refresh")
      : "",
  idUser: 0,
};

export const sendRegistrationUser = createAsyncThunk(
  "sendRegistrationUser",
  async (info, { dispatch }) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image_file", info.img);
    formData.append("username", info.userName);
    formData.append("nickname", info.nickName);
    formData.append("password", info.password);
    try {
      const data = await axios({
        method: "POST",
        url: `http://68.183.214.2:8666/api/auth/signup/`,
        data: formData,
      });
      console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  }
);

export const sendLoginUser = createAsyncThunk(
  "sendLoginUser",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: `http://68.183.214.2:8666/api/auth/signin/`,
        data: {
          username: info.userName,
          password: info.password,
        },
      });
      console.log(data, "data");
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      const decodedToken = jwt_decode(data.access);
      console.log(decodedToken);
    } catch (error) {
      console.log(error);
    }
  }
);

/// KutmanBekNurlanov

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    changeLookAuth: (state, action) => {
      state.lookAuth = action.payload;
    },
    changeStateTypeAuth: (state, action) => {
      state.stateTypeAuth = action.payload;
    },
    changeAccess: (state, action) => {
      state.access = action.payload;
    },
    changeRefresh: (state, action) => {
      state.refresh = action.payload;
    },
  },
});
export const {
  changeLookAuth,
  changeStateTypeAuth,
  changeAccess,
  changeRefresh,
} = authSlice.actions;

export default authSlice.reducer;
