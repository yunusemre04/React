import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slice/productSlice";
import appSlice from "../slice/appSlice";
import basketSlice from "../slice/basketSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        app: appSlice,
        basket: basketSlice
    }
})

