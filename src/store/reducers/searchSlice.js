import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataSearch: "",
  clearSearchState: false,
  lookDataSearch: false,
};

// export const toTakeAllData = createAsyncThunk(
//   "toTakeAllData",
//   async (id, { dispatch }) => {
//     dispatch(changePreloaderState(false));
//     try {
//       const { data } = await axios({
//         method: "GET",
//         url: `http://68.183.214.2:8666/api/v1/manga/`,
//       });
//       dispatch(changeAllData(data));
//       dispatch(changePreloaderState(true));
//     } catch (error) {
//       console.log(error);
//       dispatch(changePreloaderState(false));
//     }
//   }
// );

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
