import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchUsers } from './usersThunks';

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
    loading: false,
    error: null,
});

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                usersAdapter.setAll(state, action.payload);
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectAllUserIds,
} = usersAdapter.getSelectors(state => state.users);

export default usersSlice.reducer;