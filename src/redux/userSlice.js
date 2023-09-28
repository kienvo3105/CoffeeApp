import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'user',
    initialState: {
        id: "",
        lastName: "",
        firstName: "",
        email: "",
        phoneNumber: "",
        coins: 0,
    },
    reducers: {
        userChange: (state, action) => {
            state = action.payload
        },
    }
});