import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  explanationRegistration: false,
  explanationPassword: false,
  isDisableBtn: false,
  goodRegistration: false,
  lookPasswordReg: false,
  renderEyePasswordReg: true,
};

/// KutmanBekNurlanov
/// adminadmin
/// NurdinDjumabekov_geeks

const registrationSLice = createSlice({
  name: "registrationSLice",
  initialState,
  reducers: {
    changeExplanationRegistration: (state, action) => {
      state.explanationRegistration = action.payload;
    },
    changeExplanationPassword: (state, action) => {
      state.explanationPassword = action.payload;
    },
    changeIsDisableBtn: (state, action) => {
      state.isDisableBtn = action.payload;
    },
    changeGoodRegistration: (state, action) => {
      state.goodRegistration = action.payload;
    },
    changeLookPasswordReg: (state, action) => {
      state.lookPasswordReg = action.payload;
    },
    changeRenderEyePasswordReg: (state, action) => {
      state.renderEyePasswordReg = action.payload;
    },
  },
});
export const {
  changeExplanationRegistration,
  changeExplanationPassword,
  changeIsDisableBtn,
  changeGoodRegistration,
  changeLookPasswordReg,
  changeRenderEyePasswordReg,
} = registrationSLice.actions;

export default registrationSLice.reducer;
