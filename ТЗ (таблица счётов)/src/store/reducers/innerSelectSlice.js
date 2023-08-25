import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  matchScore: [],
  resultScore: [],
};

export const toTakeEveryDataSelects = createAsyncThunk(
  "toTakeEveryDataSelects",
  async (info, { dispatch }) => {
    try {
      if (info.type === "matchScore") {
        const { data } = await axios({
          method: "GET",
          url: `https://api.football.kg/api/v1/tables/table/?division=${info.id}`,
        });
        dispatch(toTakeMatchScore(data?.results));
      } else if (info.type === "resultScore") {
        const { data } = await axios({
          method: "GET",
          url: `https://api.football.kg/api/v1/tables/chess/?divizion=${info.id}`,
        });
        dispatch(toTakeResultScore(data));
      }
    } catch (err) {
      console.log(err);
    }
  }
);

const innerSelectSlice = createSlice({
  name: "innerSelectSlice",
  initialState,
  reducers: {
    toTakeMatchScore: (state, action) => {
      state.matchScore = action.payload;
    },
    toTakeResultScore: (state, action) => {
      state.resultScore = action.payload;
    },
  },
});
export const { toTakeMatchScore, toTakeResultScore } = innerSelectSlice.actions;
export default innerSelectSlice.reducer;
