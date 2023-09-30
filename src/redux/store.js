import { configureStore } from '@reduxjs/toolkit'
import config from "../config/index"
import userSlice from './userSlice';
const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
    // devTools: config.NODE_ENV
});

export default store;