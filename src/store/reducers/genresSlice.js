import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
      state.allGenres = action.payload;
    },
    changeAllSortGenres: (state, action) => {
      state.allSortGenres = [...state.allSortGenres, action.payload];
    },
  },
});
export const { changeGenresLookState, changeAllGenres, changeAllSortGenres } =
  genresSlice.actions;

export default genresSlice.reducer;
