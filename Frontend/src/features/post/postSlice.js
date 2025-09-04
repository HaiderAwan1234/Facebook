import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPostService,
  getReactionService,
  postService,
  reactionService,
} from "./postService";

const initialState = {
  post: [],
  postError: false,
  postSuccess: false,
  postMessage: "",
  postLoading: false,

  reacts: [],
  reactionError: false,
  reactionSuccess: false,
  reactionLoading: false,
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

export const serviceGetPost = createAsyncThunk(
  "getPost",
  async (_, thunkAPI) => {
    try {
      return await getPostService();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const serviceReaction = createAsyncThunk(
  "postReaction",
  async (reactionData, thunkAPI) => {
    try {
      return await reactionService(reactionData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const serviceGetReaction = createAsyncThunk(
  "getReaction",
  async (getReactionData, thunkAPI) => {
    try {
      return await getReactionService(getReactionData);
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

      state.reactionLoading = false;
      state.reactionError = false;
      state.reactionSuccess = false;
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
        state.post.unshift(action.payload);
      })
      .addCase(serviceGetPost.pending, (state, action) => {
        state.postLoading = true;
      })
      .addCase(serviceGetPost.rejected, (state, action) => {
        state.postError = true;
        state.postLoading = false;
        state.postSuccess = false;
        state.postMessage = action.payload;
      })
      .addCase(serviceGetPost.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postError = false;
        state.post = action.payload;
      })
      .addCase(serviceReaction.pending, (state, action) => {
        state.reactionLoading = true;
      })
      .addCase(serviceReaction.rejected, (state, action) => {
        state.reactionError = true;
        state.reactionLoading = false;
        state.reactionSuccess = false;
        state.postMessage = action.payload;
      })
      .addCase(serviceReaction.fulfilled, (state, action) => {
        state.reactionSuccess = true;
        state.reactionError = false;
        state.reactionLoading = false;
      })
      .addCase(serviceGetReaction.pending, (state, action) => {
        state.reactionLoading = true;
      })
      .addCase(serviceGetReaction.rejected, (state, action) => {
        state.reactionError = true;
        state.reactionLoading = false;
        state.reactionSuccess = false;
        state.postMessage = action.payload;
      })
      .addCase(serviceGetReaction.fulfilled, (state, action) => {
        state.reactionSuccess = true;
        state.reactionError = false;
        state.reactionLoading = false;
        state.reacts.push(action.payload);
      });
  },
});

export default postSlice.reducer;
export const { postReset } = postSlice.actions;
