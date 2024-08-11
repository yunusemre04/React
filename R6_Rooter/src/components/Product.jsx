import React from 'react'
import { useNavigate } from 'react-router-dom'
import products from '../data/data.jsx'

function Product() {
    const navigate = useNavigate();


    return (
        <div >
            {products.map(({ id, name, price }, index) => (

                <div key={id} className='productBox'>
                    <div className='productItem'>Product No : {id}</div>
                    <div className='productItem'>Product Name : {name}</div>
                    <div className='productItem'>Price : {price}</div>
                    <button type='button' onClick={() => { navigate('/product-details/' + id) }}>Look Details</button>
                </div>
            ))}
        </div>
    )
}

export default Product