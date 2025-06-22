import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsByRestaurantId } from "./reviewsSlice";

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
        if (!response.ok) throw new Error('Error fetching reviews');
        return await response.json();
    },
    {
        condition: (restaurantId, { getState }) => {
            const state = getState();
            const reviews = selectReviewsByRestaurantId(state, restaurantId);
            return reviews.length === 0;
        }
    }
);