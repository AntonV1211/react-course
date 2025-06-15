import { createSlice, createSelector } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        addToCart: (state, { payload }) => {
            state[payload] = (state[payload] || 0) + 1;
        },
        removeFromCart: (state, { payload }) => {
            if (!state[payload]) return;
            state[payload] -= 1;
            if (state[payload] === 0) {
                delete state[payload];
            }
        },
        clearCart: (state) => {
            state.items = {};
        },
    },
    selectors: {
        selectItemAmountById: (state, id) => state[id] || 0,
    },
});

const selectCartSlice = (state) => state[cartSlice.name];
export const selectCartItems = createSelector(
    [selectCartSlice],
    (cartSlice) => {
        return Object.keys(cartSlice).reduce((acc, id) => {
            acc.push({
                id,
                amount: cartSlice[id],
            });
            return acc;
        }, []);
    });

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const { selectItemAmountById } = cartSlice.selectors;