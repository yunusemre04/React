import { createSlice } from "@reduxjs/toolkit"



const getFromLocalStorage = () => {
    if (localStorage.getItem('basket')) {
        return JSON.parse(localStorage.getItem('basket'));
    } else {
        return [];
    }
}


const initialState = {
    products: getFromLocalStorage(),
    notification: { message: '', open: false },
}



const savetoLocalStorage = (product) => {
    localStorage.setItem('basket', JSON.stringify(product));
}

//HATA VAR
const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProductIndex = state.products.findIndex((product) => product.id === action.payload.id);
            if (findProductIndex !== -1) {
                state.products[findProductIndex].count = Number(state.products[findProductIndex].count) + Number(action.payload.count);
            } else {
                state.products.push(action.payload);
            }
            savetoLocalStorage(state.products);
            state.notification = { message: `${action.payload.count} ${action.payload.title} added to the basket!`, open: true };
        },
        increaseProduct: (state, action) => {
            const productIndex = state.products.findIndex(product => product.id === action.payload.id);
            if (productIndex !== -1) {
                state.products[productIndex].count += 1;
                savetoLocalStorage(state.products);
            }
        },
        decreaseProduct: (state, action) => {
            const productIndex = state.products.findIndex(product => product.id === action.payload.id);
            if (productIndex !== -1 && state.products[productIndex].count > 1) {
                state.products[productIndex].count -= 1;
                savetoLocalStorage(state.products);
            }
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
            savetoLocalStorage(state.products);


        },

        closeNotification: (state) => {
            state.notification.open = false;
        }
    },
})


export const { addToBasket, closeNotification, increaseProduct, decreaseProduct, deleteProduct } = basketSlice.actions;
export default basketSlice.reducer;