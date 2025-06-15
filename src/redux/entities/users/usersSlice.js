import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetch('http://localhost:3001/api/users/');
        if (!response.ok) throw new Error('Error fetching users');
        return await response.json();
    }
);

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