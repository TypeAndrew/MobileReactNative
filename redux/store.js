import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import { authSlice } from "./auth/authReducer";

const rootReducer = authSlice.reducer;
export const store = configureStore({
  
reducer: {
    auth: rootReducer,
  },
});

