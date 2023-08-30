import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// Configuring a redux store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
