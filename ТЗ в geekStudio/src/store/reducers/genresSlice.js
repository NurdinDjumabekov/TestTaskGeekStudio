import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changeAllData } from "./mainDataSlice";

const initialState = {
  genresLookState: true,
  allGenres: [],
  allSortGenres: [],
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

const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {
    changeGenresLookState: (state, action) => {
      state.genresLookState = action.payload;
    },
    changeAllGenres: (state, action) => {
      state.allGenres = action.payload?.map((genre) => ({
        ...genre,
        bool: false,
        // изначально ключа bool не было, но тут я его добавляю к каждому обьекту
      }));
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
    changeStatusBoolGenres: (state, action) => {
      const id = action.payload.id;
      const boolInput = action.payload.boolInput;
      state.allGenres.map((item) => {
        if (item.id === id) {
          item.bool = boolInput;
        }
      });
    },
    clearAllGenres: (state, action) => {
      state.allGenres = state.allGenres.map((item) => {
        return {
          ...item,
          bool: false,
        };
      });
    },
  },
});
export const {
  changeGenresLookState,
  changeAllGenres,
  addAllSortGenres,
  deleteAllSortGenres,
  changeAllSortGenres,
  changeStatusBoolGenres,
  clearAllGenres,
} = genresSlice.actions;

export default genresSlice.reducer;
