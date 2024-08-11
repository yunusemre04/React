import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import ProductDetails from '../components/ProductDetails'
import Basket from '../components/Basket'

function RouterSettings() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='/basket' element={<Basket />} />
        </Routes>
    )
}

export default RouterSettings