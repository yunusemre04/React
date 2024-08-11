import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    users: [],
    load: false
}

export const getUsers = createAsyncThunk("users", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
})

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }
})


export const { } = userSlice.actions

export default userSlice.reducer