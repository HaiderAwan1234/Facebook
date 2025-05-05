import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./../features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: userSlice,
  }, // Add your reducers here
});
