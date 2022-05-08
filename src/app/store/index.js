import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "features/ReduxDemo/Counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
