import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const restaurantsAdapter = createEntityAdapter();

export const fetchRestaurants = createAsyncThunk(
    'restaurants/fetchRestaurants',
    async () => {
        const response = await fetch('http://localhost:3001/api/restaurants/');
        return await response.json();
    }
);

export const fetchRestaurantById = createAsyncThunk(
    'restaurants/fetchRestaurantById',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`);
        if (!response.ok) throw new Error('Error fetching restaurant by ID');
        return await response.json();
    }
);

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