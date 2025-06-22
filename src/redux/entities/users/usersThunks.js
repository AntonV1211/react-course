import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetch('http://localhost:3001/api/users/');
        if (!response.ok) throw new Error('Error fetching users');
        return await response.json();
    },
    {
        condition: (_, { getState }) => {
            const state = getState();
            return state.users.ids.length === 0;
        }
    }
);