import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const restaurantsApi = createApi({
    reducerPath: 'restaurantsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => 'restaurants/',
        }),
        getRestaurantById: builder.query({
            query: (restaurantId) => `restaurant/${restaurantId}`,
        }),
    }),
});

export const {
    useGetRestaurantsQuery,
    useGetRestaurantByIdQuery,
} = restaurantsApi;