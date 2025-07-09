import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, otpService, userService } from "./userService.js";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  userLoading: false,
  userSuccess: false,
  userError: false,
  userMessage: false,
};

export const serviceUser = createAsyncThunk(
  "signup-user",
  async (userData, thunkApi) => {
    try {
      return await userService(userData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.error);
    }
  }
);

// >
// >

export const serviceOtp = createAsyncThunk(
  "otp-verify",
  async (otpData, thunkApi) => {
    try {
      return await otpService(otpData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.error); // Added return here
    }
  }
);

// >
// >

export const serviceLogin = createAsyncThunk(
  "login-user",
  async (loginData, thunkApi) => {
    try {
      return await loginService(loginData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.error);
    }
  }
);

// >
// >

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
      })
      .addCase(serviceOtp.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(serviceOtp.rejected, (state, action) => {
        state.userError = true;
        state.userLoading = false;
        state.userMessage = action.payload;
      })
      .addCase(serviceOtp.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(serviceLogin.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(serviceLogin.rejected, (state, action) => {
        state.userError = true;
        state.userLoading = false;
        state.userSuccess = false;
        state.userMessage = action.payload;
        state.user = null;
      })
      .addCase(serviceLogin.fulfilled, (state, action) => {
        state.userSuccess = true;
        state.userError = false;
        state.userLoading = false;
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
export const { userReset } = userSlice.actions;
