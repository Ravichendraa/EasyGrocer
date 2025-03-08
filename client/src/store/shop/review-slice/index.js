import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  isLoading: false,
  reviews: [],
  userReviews: [],
  error: null,
};

export const addReview = createAsyncThunk(
  "/order/addReview",
  async (formdata) => {
    const response = await axios.post(
      `http://localhost:5000/api/shop/review/add`,
      formdata
    );

    return response.data;
  }
);

export const getReviews = createAsyncThunk("/order/getReviews", async (id) => {
  const response = await axios.get(
    `http://localhost:5000/api/shop/review/${id}`
  );

  return response.data;
});

export const fetchUserReviews = createAsyncThunk(
  '/review/fetchUserReviews',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/shop/review/user/${userId}`);
      return response.data.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateReview = createAsyncThunk(
  '/review/updateReview',
  async (review, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/shop/review/${review._id}`, review);
      return response.data.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Existing getReviews cases
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data;
      })
      .addCase(getReviews.rejected, (state) => {
        state.isLoading = false;
        state.reviews = [];
      })
      // User Reviews
      .addCase(fetchUserReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userReviews = action.payload; // Directly use action.payload
      })
      .addCase(fetchUserReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.userReviews = [];
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        const index = state.userReviews.findIndex((review) => review._id === action.payload._id);
        if (index !== -1) {
          state.userReviews[index] = action.payload;
        }
      });
  },
});

export default reviewSlice.reducer;
