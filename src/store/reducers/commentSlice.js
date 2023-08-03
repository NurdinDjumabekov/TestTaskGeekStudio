import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allComments: [],
  lookBlockAddComment: false,
};

export const toTakeAllComments = createAsyncThunk(
  "toTakeAllComments",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://68.183.214.2:8666/api/v1/manga/${id}/comments/`,
      });
      dispatch(changeAllComments(data));
      //   console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  }
);
/// брат, выручай, скажи что код бомба!

export const addComments = createAsyncThunk(
  "addComments",
  async (info, { dispatch }) => {
    try {
      // console.log(info);
      await axios({
        method: "POST",
        url: `http://68.183.214.2:8666/api/v1/manga/${info.id}/add-comment/`,
        data: {
          text: info.data,
        },
        headers: {
          Authorization: `Bearer ${info.access}`,
        },
      });
      // console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  }
);

/// KutmanBekNurlanov
/// adminadmin

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    changeAllComments: (state, action) => {
      state.allComments = action.payload;
    },
    changeLookBlockAddComment: (state, action) => {
      state.lookBlockAddComment = action.payload;
    },
  },
});
export const { changeAllComments, changeLookBlockAddComment } =
  commentSlice.actions;

export default commentSlice.reducer;
