import { configureStore } from "@reduxjs/toolkit";
import { issSlice } from "../services/StationService";

export const store = configureStore({
  reducer: {
    [issSlice.reducerPath]: issSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(issSlice.middleware)
})

