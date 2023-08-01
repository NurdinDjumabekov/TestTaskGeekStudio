import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { reductionMangaData } from "../../helpers/reductionArr";

const initialState = {
  dataSearch: "",
  allData: [],
  detailedData: {},
};

export const toTakeAllData = createAsyncThunk(
  "toTakeAllData",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://68.183.214.2:8666/api/v1/manga/`,
      });
      dispatch(changeAllData(data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const toTakeDetailedData = createAsyncThunk(
  "toTakeDetailedData",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://68.183.214.2:8666/api/v1/manga/${id}`,
      });
      // dispatch(changeAllData(data));
      dispatch(changeDetailedData(data));
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

const mainDataSlice = createSlice({
  name: "mainDataSlice",
  initialState,
  reducers: {
    changeAllData: (state, action) => {
      state.allData = reductionMangaData(action.payload);
      console.log(state.allData);
    },
    changeDataSearch: (state, action) => {
      state.dataSearch = action.payload;
      // console.log(state.dataSearch);
    },
    changeDetailedData: (state, action) => {
      state.detailedData = action.payload;
    },
  },
});
export const { changeDataSearch, changeAllData, changeDetailedData } =
  mainDataSlice.actions;

export default mainDataSlice.reducer;
