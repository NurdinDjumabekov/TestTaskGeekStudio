import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { standartisationMainData } from "../../helpers/standartisationMainData";

const initialState = {
  allSelects: [],
};

export const toTakeAllSelectsData = createAsyncThunk(
  "toTakeAllSelectsData",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://api.football.kg/api/v1/team/division/",
      });
      dispatch(cahngeAllSelects(standartisationMainData(data)));
    } catch (err) {
      console.log(err);
    }
  }
);

const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    cahngeAllSelects: (state, action) => {
      state.allSelects = action.payload;
    },
  },
});
export const { cahngeAllSelects } = mainPageSlice.actions;
export default mainPageSlice.reducer;
