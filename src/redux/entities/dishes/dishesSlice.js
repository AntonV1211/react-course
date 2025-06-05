import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { normalizedDishes } from '../../../../materials/normalized-mock.js';

const initialState = {
    ids: normalizedDishes.map(({ id }) => id),
    entities: normalizedDishes.reduce((acc, dish) => {
        acc[dish.id] = dish;
        return acc;
    }, {}),
};

export const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    selectors: {
        selectDishesIds: (state) => state.ids,
        selectDishById: (state, dishId) => state.entities[dishId],
    },
});

export const { selectDishesIds, selectDishById } = dishesSlice.selectors;

export const selectDishesByIds = createSelector(
    [
        (state, dishIds) => dishIds,
        (state) => state.dishes.entities
    ],
    (dishIds, entities) => dishIds.map(id => entities[id])
);