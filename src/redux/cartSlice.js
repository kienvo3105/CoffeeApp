import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'cart',
    initialState: {
        items: [],
        numberItem: 0,
        discount: {},
        time: null
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
        },
        selectDiscount: (state, action) => {
            state.discount = action.payload
        },
        clearDiscount: (state, action) => {
            state.discount = {}
        },
        changeTime: (state, action) => {
            state.time = action.payload
        }
    }
});