import React from 'react'
import products from '../data/data.jsx'
import { useParams } from 'react-router-dom';



function productDetails() {
    let newProduct = {};


    const { id } = useParams();
    products.map((product => {
        if (product.id == id) {
            newProduct = product;
        }
    }))
    const product = newProduct;

    return (
        <div >
            <div key={id} className='productBox'>
                <div className='productItem'>Product No : {product.id}</div>
                <div className='productItem'>Product Name : {product.name}</div>
                <div className='productItem'>Price : {product.price}</div>

            </div>
        </div>
    )
}

export default productDetails