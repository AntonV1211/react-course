import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from '../../../../materials/normalized-mock.js';

const initialState = {
    ids: normalizedUsers.map(({ id }) => id),
    entities: normalizedUsers.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {}),
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
});