import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
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
        selectAllRestaurants: (state) => state.ids.map(id => state.entities[id]),
        selectRestaurantById: (state, restaurantId) => state.entities[restaurantId],
    },
});

export const selectAllRestaurants = createSelector(
    state => state.restaurants.ids,
    state => state.restaurants.entities,
    (ids, entities) => ids.map(id => entities[id])
);