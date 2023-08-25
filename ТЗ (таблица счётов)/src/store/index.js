import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import innerSelectSlice from "./reducers/innerSelectSlice";

const reducer = combineReducers({
  mainPageSlice,
  innerSelectSlice,
});
export const store = configureStore({
  reducer,
});
