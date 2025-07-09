import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postService } from "./postService";

const initialState = {
  post: [],
  postError: false,
  postSuccess: false,
  postMessage: "",
  postLoading: false,
};

export const servicePost = createAsyncThunk(
  "post",
  async (postData, thunkAPI) => {
    try {
      return await postService(postData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postReset: (state) => {
      state.postError = false;
      state.postSuccess = false;
      state.postMessage = "";
      state.postLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(servicePost.pending, (state, action) => {
        state.postLoading = true;
      })
      .addCase(servicePost.rejected, (state, action) => {
        state.postError = true;
        state.postMessage = action.payload;
        state.postSuccess = false;
        state.postLoading = false;
      })
      .addCase(servicePost.fulfilled, (state, action) => {
        state.postSuccess = true;
        state.postLoading = false;
        state.postError = false;
        state.post.push(action.payload);
      });
  },
});

export default postSlice.reducer;
export const { postReset } = postSlice.actions;
