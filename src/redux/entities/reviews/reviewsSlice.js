import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchReviews } from './reviewsThunks';

const reviewsAdapter = createEntityAdapter();

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

export const selectReviewsByRestaurantId = (state, restaurantId) =>
    selectAllReviews(state).filter(review => review.restaurantId === restaurantId);

export default reviewsSlice.reducer;