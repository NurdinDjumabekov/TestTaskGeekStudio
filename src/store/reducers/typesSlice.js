import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataForSort: [],
  allTypes: [
    { id: 1, title: "Манга", bool: false },
    { id: 2, title: "Манхва", bool: false },
    { id: 3, title: "Комиксы", bool: false },
    { id: 4, title: "Маньхуа", bool: false },
  ],
};

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

const typesSlice = createSlice({
  name: "typesSlice",
  initialState,
  reducers: {
    changeAllDataForSort: (state, action) => {
      state.dataForSort = action.payload;
    },
    changeStatusBool: (state, action) => {
      const id = action.payload.id;
      const boolInput = action.payload.boolInput;
      state.allTypes.map((item) => {
        if (item.id === id) {
          item.bool = boolInput;
        }
      });
    },
    clearAlltypes: (state, action) => {
      state.allTypes = state.allTypes.map((item) => {
        return {
          ...item,
          bool: false,
        };
      });
    },
  },
});
export const { changeAllDataForSort, changeStatusBool, clearAlltypes } =
  typesSlice.actions;

export default typesSlice.reducer;
