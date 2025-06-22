import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users/',
        }),
        getUserById: builder.query({
            query: (userId) => `users/${userId}`,
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
} = usersApi;