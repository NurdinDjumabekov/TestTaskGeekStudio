import { combineReducers, configureStore } from "@reduxjs/toolkit";
import genresSlice from "./reducers/genresSlice";
import mainDataSlice from "./reducers/mainDataSlice";
import commentSlice from "./reducers/commentSlice";

const reducer = combineReducers({
  genresSlice,
  mainDataSlice,
  commentSlice,
});
export const store = configureStore({
  reducer,
});
