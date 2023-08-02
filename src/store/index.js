import { combineReducers, configureStore } from "@reduxjs/toolkit";
import genresSlice from "./reducers/genresSlice";
import mainDataSlice from "./reducers/mainDataSlice";
import commentSlice from "./reducers/commentSlice";
import authSlice from "./reducers/authSlice";

const reducer = combineReducers({
  genresSlice,
  mainDataSlice,
  commentSlice,
  authSlice,
});
export const store = configureStore({
  reducer,
});
