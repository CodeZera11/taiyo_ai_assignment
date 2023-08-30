import { combineReducers } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";

const rootReducer = combineReducers({
  contacts: contactSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
