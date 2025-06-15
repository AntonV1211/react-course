import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const reviewsAdapter = createEntityAdapter();

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
        if (!response.ok) throw new Error('Error fetching reviews');
        return await response.json();
    }
);

const initialState = reviewsAdapter.getInitialState({
    loading: false,
    error: null,
});

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                reviewsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const {
    selectAll: selectAllReviews,
    selectById: selectReviewById,
    selectIds: selectAllReviewIds,
} = reviewsAdapter.getSelectors(state => state.reviews);

export default reviewsSlice.reducer;