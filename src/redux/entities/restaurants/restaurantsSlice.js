import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchRestaurants, fetchRestaurantById } from './restaurantsThunks';

const restaurantsAdapter = createEntityAdapter();

const initialState = restaurantsAdapter.getInitialState({
    loading: false,
    error: null,
});

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                restaurantsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchRestaurants.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchRestaurantById.fulfilled, (state, action) => {
                restaurantsAdapter.upsertOne(state, action.payload);
            });
    }
});

export const {
    selectAll: selectAllRestaurants,
    selectById: selectRestaurantById,
    selectIds: selectAllRestaurantIds,
} = restaurantsAdapter.getSelectors(state => state.restaurants);

export default restaurantsSlice.reducer;