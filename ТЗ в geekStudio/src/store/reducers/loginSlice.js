import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ifLoginError: false,
  lookPasswordLogin: false,
  renderEyePassword: true,
};

const loginSLice = createSlice({
  name: "loginSLice",
  initialState,
  reducers: {
    changeIfLoginError: (state, action) => {
      state.ifLoginError = action.payload;
    },
    changeLookPasswordLogin: (state, action) => {
      state.lookPasswordLogin = action.payload;
    },
    changeRenderEyePassword: (state, action) => {
      state.renderEyePassword = action.payload;
    },
  },
});
export const {
  changeIfLoginError,
  changeLookPasswordLogin,
  changeRenderEyePassword,
} = loginSLice.actions;

export default loginSLice.reducer;
