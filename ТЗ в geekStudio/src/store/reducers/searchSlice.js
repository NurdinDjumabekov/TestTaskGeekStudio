import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataSearch: "",
  clearSearchState: false,
  lookDataSearch: false,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    changeDataSearch: (state, action) => {
      state.dataSearch = action.payload;
    },
    changeClearSearchState: (state, action) => {
      state.clearSearchState = action.payload;
    },
    changeLookDataSearch: (state, action) => {
      state.lookDataSearch = action.payload;
    },
  },
});
export const {
  changeDataSearch,
  changeClearSearchState,
  changeLookDataSearch,
} = searchSlice.actions;

export default searchSlice.reducer;
