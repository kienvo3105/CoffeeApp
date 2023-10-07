import { configureStore } from '@reduxjs/toolkit'
import config from "../config/index"
import userSlice from './userSlice';
import categorySlice from './categorySlice';
import branchSlice from './branchSlice';
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        category: categorySlice.reducer,
        branch: branchSlice.reducer
    },
    // devTools: config.NODE_ENV
});

export default store;