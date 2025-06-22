import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from './restaurantsSlice';

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
    },
    {
        condition: (restaurantId, { getState }) => {
            const state = getState();
            return !selectRestaurantById(state, restaurantId);
        }
    }
);