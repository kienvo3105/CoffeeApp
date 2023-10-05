import { configureStore } from '@reduxjs/toolkit'
import config from "../config/index"
import userSlice from './userSlice';
import categorySlice from './categorySlice';
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        category: categorySlice.reducer
    },
    // devTools: config.NODE_ENV
});

export default store;