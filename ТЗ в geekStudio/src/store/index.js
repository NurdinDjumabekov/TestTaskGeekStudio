import { combineReducers, configureStore } from "@reduxjs/toolkit";
import genresSlice from "./reducers/genresSlice";
import mainDataSlice from "./reducers/mainDataSlice";
import commentSlice from "./reducers/commentSlice";
import authSlice from "./reducers/authSlice";
import searchSlice from "./reducers/searchSlice";
import typesSlice from "./reducers/typesSlice";
import loginSLice from "./reducers/loginSlice";
import registrationSLice from "./reducers/registrationSlice";

const reducer = combineReducers({
  genresSlice,
  mainDataSlice,
  commentSlice,
  authSlice,
  searchSlice,
  typesSlice,
  loginSLice,
  registrationSLice,
});
export const store = configureStore({
  reducer,
});
