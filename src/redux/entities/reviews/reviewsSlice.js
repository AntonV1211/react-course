import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { normalizedReviews } from '../../../../materials/normalized-mock.js';

const initialState = {
    ids: normalizedReviews.map(({ id }) => id),
    entities: normalizedReviews.reduce((acc, review) => {
        acc[review.id] = review;
        return acc;
    }, {}),
};

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    selectors: {
        selectAllReviews: (state) => state.ids,
        selectReviewById: (state, reviewId) => state.entities[reviewId],
    },
});

export const { selectAllReviews, selectReviewById } = reviewsSlice.selectors;

export const selectReviewsByIds = createSelector(
    [
        (state, reviewIds) => reviewIds,
        (state) => state.reviews.entities
    ],
    (reviewIds, entities) => reviewIds.map(id => entities[id])
);