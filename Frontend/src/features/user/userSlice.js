import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "./userService.js";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  userLoading: false,
  userSuccess: false,
  userError: false,
  userMessage: false,
};

export const serviceUser = createAsyncThunk(
  "userSignup",
  async (userData, thunkApi) => {
    try {
      return await userService(userData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userError = false;
      state.userSuccess = false;
      state.userLoading = false;
      state.userMessage = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(serviceUser.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(serviceUser.rejected, (state, action) => {
        state.userError = true;
        state.userLoading = false;
        state.userMessage = action.payload;
        state.user = null;
        state.userSuccess = false;
      })
      .addCase(serviceUser.fulfilled, (state, action) => {
        state.userSuccess = true;
        state.userLoading = false;
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
export const { userReset } = userSlice.actions;
