import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loaderSlice";
import headerSlice from "./slices/headerSlice";

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    header: headerSlice,
  },
});
