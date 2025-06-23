import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dishesApi = createApi({
    reducerPath: 'dishesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getDishesByRestaurantId: builder.query({
            query: (restaurantId) => `dishes?restaurantId=${restaurantId}`,
        }),
        getDishById: builder.query({
            query: (dishId) => `dish/${dishId}`,
        }),
    }),
});

export const {
    useGetDishesByRestaurantIdQuery,
    useGetDishByIdQuery,
} = dishesApi;