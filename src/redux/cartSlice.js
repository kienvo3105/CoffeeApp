import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'cart',
    initialState: {
        items: [],
        numberItem: 0
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.numberItem += action.payload.quantity;
        },
        deleteItem: (state, action) => {
            const newCart = state.items.filter((item) => item.id !== action.payload.id);
            state.items = newCart;
            state.numberItem -= action.payload.quantity;
        },
        clearCart: (state, action) => {
            state.items = [];
            state.numberItem = 0
        }
    }
});