import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from '../../request_status/requestStatus';

const dishesAdapter = createEntityAdapter();

export const fetchDishes = createAsyncThunk(
    'dishes/fetchDishes',
    async () => {
        const response = await fetch('http://localhost:3001/api/dishes/');
        return await response.json();
    }
);

export const fetchDishById = createAsyncThunk(
    'dishes/fetchDishById',
    async (dishId) => {
        const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
        if (!response.ok) throw new Error('Error fetching dish by ID');
        return await response.json();
    }
);

const initialState = dishesAdapter.getInitialState({
    status: REQUEST_STATUS.IDLE,
    error: null,
});

export const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDishes.pending, (state) => {
                state.status = REQUEST_STATUS.LOADING;
                state.error = null;
            })
            .addCase(fetchDishes.fulfilled, (state, action) => {
                state.status = REQUEST_STATUS.SUCCEEDED;
                state.error = null;
                dishesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchDishes.rejected, (state, action) => {
                state.status = REQUEST_STATUS.FAILED;
                state.error = action.error.message;
            })
            .addCase(fetchDishById.fulfilled, (state, action) => {
                dishesAdapter.upsertOne(state, action.payload);
            });
    }
});

export const {
    selectAll: selectAllDishes,
    selectById: selectDishById,
    selectIds: selectAllDishIds,
} = dishesAdapter.getSelectors(state => state.dishes);

export default dishesSlice.reducer;