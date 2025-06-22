import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
    reducerPath: 'reviewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    tagTypes: ['Reviews'],
    endpoints: (builder) => ({
        getReviewsByRestaurantId: builder.query({
            query: (restaurantId) => `reviews?restaurantId=${restaurantId}`,
            providesTags: (result, error, restaurantId) => [
                { type: 'Reviews', id: restaurantId }
            ],
        }),
        getReviewById: builder.query({
            query: (reviewId) => `reviews/${reviewId}`,
        }),
        addReview: builder.mutation({
            query: ({ restaurantId, ...review }) => ({
                url: `review/${restaurantId}`,
                method: 'POST',
                body: review,
            }),
            invalidatesTags: (result, error, { restaurantId }) => [
                { type: 'Reviews', id: restaurantId }
            ],
        }),
        updateReview: builder.mutation({
            query: ({ reviewId, ...patch }) => ({
                url: `review/${reviewId}`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: (result, error, { restaurantId }) => [
                { type: 'Reviews', id: restaurantId }
            ],
        }),
    }),
});

export const {
    useGetReviewsByRestaurantIdQuery,
    useGetReviewByIdQuery,
    useAddReviewMutation,
    useUpdateReviewMutation,
} = reviewsApi;