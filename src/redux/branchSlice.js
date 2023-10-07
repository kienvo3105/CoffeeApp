import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'branch',
    initialState: {
        branches: null,
        categorySelected: null,
    },
    reducers: {
        addBranch: (state, action) => {
            state.branches = action.payload;
        },
        selectBranch: (state, action) => {
            state.categorySelected = action.payload;
        },
    }
});