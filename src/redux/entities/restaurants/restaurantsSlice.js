import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from '../../../../materials/normalized-mock.js';

const initialState = {
    ids: normalizedRestaurants.map(({ id }) => id),
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;
        return acc;
    }, {}),
};

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    selectors: {
        selectAllRestaurantIds: (state) => state.ids,
        selectRestaurantById: (state, restaurantId) => state.entities[restaurantId],
    },
});

export const { selectAllRestaurantIds, selectRestaurantById } = restaurantsSlice.selectors;