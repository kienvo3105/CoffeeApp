import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'user',
    initialState: {
        user: {
            id: "",
            lastName: "",
            firstName: "",
            email: "",
            phoneNumber: "",
            coins: 0,
            membershipClass: ""
        }
    },
    reducers: {
        userChange: (state, action) => {
            state.user = action.payload;
        },
    }
});