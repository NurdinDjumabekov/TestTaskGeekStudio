import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { reductionMangaData } from "../../helpers/reductionArr";

const initialState = {
  dataSearch: "",
  allData: [],
  detailedData: {},
  preloaderState: true,
  miniPreloader: false,
  clearSearchState: false,
};

export const toTakeAllData = createAsyncThunk(
  "toTakeAllData",
  async (id, { dispatch }) => {
    dispatch(changePreloaderState(false));
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://68.183.214.2:8666/api/v1/manga/`,
      });
      dispatch(changeAllData(data));
      dispatch(changePreloaderState(true));
    } catch (error) {
      console.log(error);
      dispatch(changePreloaderState(false));
    }
  }
);

export const toTakeDetailedData = createAsyncThunk(
  "toTakeDetailedData",
  async (id, { dispatch }) => {
    dispatch(changePreloaderState(false));

    try {
      const { data } = await axios({
        method: "GET",
        url: `http://68.183.214.2:8666/api/v1/manga/${id}`,
      });
      dispatch(changeDetailedData(data));
      dispatch(changePreloaderState(true));
      // console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(changePreloaderState(false));
    }
  }
);

export const toTakeSearchData = createAsyncThunk(
  "toTakeSearchData",
  async (search, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://68.183.214.2:8666/api/v1/manga/?search=${search}`,
      });
      dispatch(changeAllData(data));
      dispatch(changeMiniPreloader(false));
    } catch (error) {
      console.log(error);
      dispatch(changeMiniPreloader(false));
    }
  }
);

const mainDataSlice = createSlice({
  name: "mainDataSlice",
  initialState,
  reducers: {
    changeAllData: (state, action) => {
      // state.allData = reductionMangaData(action.payload);
      state.allData = action.payload;
    },
    changeDataSearch: (state, action) => {
      state.dataSearch = action.payload;
    },
    changeDetailedData: (state, action) => {
      state.detailedData = action.payload;
    },
    changePreloaderState: (state, action) => {
      state.preloaderState = action.payload;
    },
    changeClearSearchState: (state, action) => {
      state.clearSearchState = action.payload;
    },
    changeMiniPreloader: (state, action) => {
      state.miniPreloader = action.payload;
    },
  },
});
export const {
  changeDataSearch,
  changeAllData,
  changeDetailedData,
  changePreloaderState,
  changeClearSearchState,
  changeMiniPreloader,
} = mainDataSlice.actions;

export default mainDataSlice.reducer;
