import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./dishesSlice";

export const fetchDishes = createAsyncThunk(
    'dishes/fetchDishes',
    async () => {
        const response = await fetch('http://localhost:3001/api/dishes/');
        return await response.json();
    },
    {
        condition: (_, { getState }) => {
            const state = getState();
            const hasRestaurant = state.restaurants.ids.length > 0;
            const dishesNotLoaded = state.dishes.ids.length === 0;
            return hasRestaurant && dishesNotLoaded;
        }
    }
);

export const fetchDishById = createAsyncThunk(
    'dishes/fetchDishById',
    async (dishId) => {
        const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
        if (!response.ok) throw new Error('Error fetching dish by ID');
        return await response.json();
    },
    {
        condition: (dishId, { getState }) => {
            const state = getState();
            const dish = selectDishById(state, dishId);
            return !dish;
        }
    }
);

export const fetchDishesByRestaurantId = createAsyncThunk(
    'dishes/fetchDishesByRestaurantId',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
        if (!response.ok) throw new Error('Error fetching dishes');
        return await response.json();
    },
    {
        condition: (restaurantId, { getState }) => {
            const state = getState();
            const dishIds = state.dishes.ids;
            const dishes = dishIds
                .map(id => state.dishes.entities[id])
                .filter(dish => dish && dish.restaurantId === restaurantId);
            return dishes.length === 0;
        }
    }
);