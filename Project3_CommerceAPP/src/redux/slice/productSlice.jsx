import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false
}

const URL = 'https://fakestoreapi.com/products';

export const getProducts = createAsyncThunk("getProducts", async () => {
    const productData = await axios.get(URL);
    return productData.data;
})

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
    }
})

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;