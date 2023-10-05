import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'category',
    initialState: {
        categories: null,
        categorySelected: {
            id: "",
            name: ""
        },
        products: null
    },
    reducers: {
        addCategory: (state, action) => {
            state.categories = action.payload;
            state.categorySelected.id = action.payload[0].id;
            state.categorySelected.name = action.payload[0].name;
        },
        selectCategory: (state, action) => {
            state.categorySelected.id = action.payload.id;
            state.categorySelected.name = action.payload.name;
        },
        addProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});