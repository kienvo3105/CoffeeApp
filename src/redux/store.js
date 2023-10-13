import { configureStore } from '@reduxjs/toolkit'
import config from "../config/index"
import userSlice from './userSlice';
import categorySlice from './categorySlice';
import branchSlice from './branchSlice';
import cartSlice from './cartSlice';
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        category: categorySlice.reducer,
        branch: branchSlice.reducer,
        cart: cartSlice.reducer,
    },
    // devTools: config.NODE_ENV
});

export default store;