import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import userReducer from './users'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },
})