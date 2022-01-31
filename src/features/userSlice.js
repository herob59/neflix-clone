import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: 0,
    },
    reducers: {
        //Redux ToolKit allows us to write "mutating" logic in reducers.It doesn't actually 
        //mutate the state because it uses the inner library, which detects changes to a 
        // "draft state" and produces a brand new immutable state based on those changes 
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;