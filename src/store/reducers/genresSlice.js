import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changeAllData } from "./mainDataSlice";

const initialState = {
  dataForSort: [],
  genresLookState: true,
  allGenres: [],
  allSortGenres: [],
  isChecked: "",
};

export const toTakeAllGenres = createAsyncThunk(
  "toTakeAllGenres",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://68.183.214.2:8666/api/v1/genre/`,
      });
      dispatch(changeAllGenres(data));
      //   console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  }
);

export const toTakeAllDataForSort = createAsyncThunk(
  "toTakeAllDataForSort",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://68.183.214.2:8666/api/v1/manga/`,
      });
      dispatch(changeAllDataForSort(data));
    } catch (error) {
      console.log(error);
    }
  }
);

const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {
    changeAllDataForSort: (state, action) => {
      state.dataForSort = action.payload;
    },
    changeGenresLookState: (state, action) => {
      state.genresLookState = action.payload;
    },
    changeAllGenres: (state, action) => {
      state.allGenres = action.payload;
    },
    addAllSortGenres: (state, action) => {
      state.allSortGenres = [...state.allSortGenres, action.payload];
    },
    deleteAllSortGenres: (state, action) => {
      state.allSortGenres = state.allSortGenres.filter(
        (i) => i !== action.payload
      );
    },
    changeAllSortGenres: (state, action) => {
      state.allSortGenres = action.payload;
    },
    changeIsChecked: (state, action) => {
      state.isChecked = action.payload;
    },
  },
});
export const {
  changeAllDataForSort,
  changeGenresLookState,
  changeAllGenres,
  addAllSortGenres,
  deleteAllSortGenres,
  changeAllSortGenres,
  changeIsChecked,
} = genresSlice.actions;

export default genresSlice.reducer;
