import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./entities/cart/cartSlise";
import { dishesApi } from "./api/dishesApi";
import { usersApi } from "./api/usersApi";
import { reviewsApi } from "./api/reviewsApi";
import { restaurantsApi } from "./api/restaurantsApi";

export const store = configureStore({
    reducer: {
        [cartSlice.name]: cartSlice.reducer,
        [restaurantsApi.reducerPath]: restaurantsApi.reducer,
        [dishesApi.reducerPath]: dishesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [reviewsApi.reducerPath]: reviewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            dishesApi.middleware,
            usersApi.middleware,
            reviewsApi.middleware,
            restaurantsApi.middleware
        ),
});