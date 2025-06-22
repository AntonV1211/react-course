import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from '../../request_status/requestStatus';
import { fetchDishes, fetchDishById, fetchDishesByRestaurantId } from './dishesThunks';

const dishesAdapter = createEntityAdapter();

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
                dishesAdapter.setMany(state, action.payload);
            })
            .addCase(fetchDishes.rejected, (state, action) => {
                state.status = REQUEST_STATUS.FAILED;
                state.error = action.error.message;
            })
            .addCase(fetchDishById.fulfilled, (state, action) => {
                dishesAdapter.upsertOne(state, action.payload);
            })
            .addCase(fetchDishesByRestaurantId.fulfilled, (state, action) => {
                dishesAdapter.upsertMany(state, action.payload);
            });
    }
});

export const {
    selectAll: selectAllDishes,
    selectById: selectDishById,
    selectIds: selectAllDishIds,
} = dishesAdapter.getSelectors(state => state.dishes);

export default dishesSlice.reducer;