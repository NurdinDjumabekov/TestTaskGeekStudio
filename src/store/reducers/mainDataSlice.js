import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { reductionMangaData } from "../../helpers/reductionArr";

const initialState = {
  allData: [],
  detailedData: {},
  allPage: 0,
  preloaderState: true,
  miniPreloader: false,
  paginationCards: 1,
  limit: 12,
  offset: 0,
};

export const toTakeAllData = createAsyncThunk(
  "toTakeAllData",
  async (obj, { dispatch }) => {
    dispatch(changePreloaderState(false));
    try {
      const { data } = await axios({
        method: "GET",
        // url: `http://68.183.214.2:8666/api/v1/manga/`,
        url: `http://68.183.214.2:8666/api/v1/manga/?limit=${obj.limit}&offset=${obj.offset}`,
        // url: `http://68.183.214.2:8666/api/v1/manga/?limit=12&offset=0`,
      });
      dispatch(changeAllData(data.results));
      dispatch(changeAllPage(data.count)); // общее кол-во страниц
      dispatch(changePreloaderState(true)); // закрытие preloadera
    } catch (error) {
      console.log(error);
      dispatch(changePreloaderState(false));
    }
  }
);

///NurdinDjumabekov_geeks

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
      // state.allData = action.payload;
      state.allData = reductionMangaData(action.payload);
    },
    changeDetailedData: (state, action) => {
      state.detailedData = action.payload;
    },
    changePreloaderState: (state, action) => {
      state.preloaderState = action.payload;
    },
    changeMiniPreloader: (state, action) => {
      state.miniPreloader = action.payload;
    },
    changePaginationCards: (state, action) => {
      state.paginationCards = action.payload;
    },
    changeLimit: (state, action) => {
      state.limit = action.payload;
    },
    changeOffset: (state, action) => {
      state.offset = action.payload;
    },
    changeAllPage: (state, action) => {
      state.allPage = action.payload;
    },
  },
});
export const {
  changeAllData,
  changeDetailedData,
  changePreloaderState,
  changeMiniPreloader,
  changePaginationCards,
  changeLimit,
  changeOffset,
  changeAllPage,
} = mainDataSlice.actions;

export default mainDataSlice.reducer;
