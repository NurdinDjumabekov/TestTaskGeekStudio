import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { changeIfLoginError } from "./loginSlice";
import { changePreloaderState } from "./mainDataSlice";
import { changeGoodRegistration } from "./registrationSlice";

const initialState = {
  lookAuth: false,
  stateTypeAuth: false,
  access: localStorage.getItem("access") ? localStorage.getItem("access") : "",
  refresh: localStorage.getItem("refresh")
    ? localStorage.getItem("refresh")
    : "",
  nameUser: localStorage.getItem("nameUser")
    ? localStorage.getItem("nameUser")
    : "",
  nameImg: localStorage.getItem("nameImg")
    ? localStorage.getItem("nameImg")
    : "",
  looklogOut: false,
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
      // console.log(data, "data");
      dispatch(changeGoodRegistration(true));
      setTimeout(() => {
        dispatch(changeGoodRegistration(false));
        dispatch(changeStateTypeAuth(true));
      }, 4000);
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
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      const decodedToken = jwt_decode(data.access); // декодирование токена для получения id пользователя
      localStorage.setItem("id_user", decodedToken.user_id);
      // console.log(data, "data");
      // console.log(decodedToken);
      ///////////////// отправка второго запроса!
      const dataUser = await axios({
        method: "GET",
        url: `http://68.183.214.2:8666/api/auth/profile/${decodedToken.user_id}/`,
      });
      // console.log(dataUser, "dataUser");
      dispatch(changeNameUser(dataUser?.data.username));
      localStorage.setItem("nameUser", dataUser?.data.username);
      dispatch(changeNameImg(dataUser?.data.image_file));
      localStorage.setItem("nameImg", dataUser?.data.image_file);
      dispatch(changePreloaderState(false));
      setTimeout(() => {
        dispatch(changePreloaderState(true));
      }, 1000);
    } catch (error) {
      console.log(error);
      dispatch(changeIfLoginError(true));
      setTimeout(() => {
        dispatch(changeIfLoginError(false));
      }, 1500);
    }
  }
);

/// KutmanBekNurlanov
/// adminadmin
/// NurdinDjumabekov_geeks

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
    changeNameUser: (state, action) => {
      state.nameUser = action.payload;
    },
    changeNameImg: (state, action) => {
      state.nameImg = action.payload;
    },
    changeLooklogOut: (state, action) => {
      state.looklogOut = action.payload;
    },
  },
});
export const {
  changeLookAuth,
  changeStateTypeAuth,
  changeAccess,
  changeRefresh,
  changeNameUser,
  changeNameImg,
  changeLooklogOut,
} = authSlice.actions;

export default authSlice.reducer;
