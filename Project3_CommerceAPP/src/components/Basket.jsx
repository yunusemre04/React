import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { decreaseProduct, deleteProduct, increaseProduct } from '../redux/slice/basketSlice';
import { useNavigate } from 'react-router-dom';
function Basket() {
    const { products } = useSelector(store => store.basket);
    const dispatch = useDispatch();
    const navigate = useNavigate();




    const calculateTotal = () => {
        let total = 0;
        products.forEach(product => {
            total += (product.count * product.price);
        })
        return total.toFixed(3);
    }

    return (
        <div className='container-fluid'>
            <div className="row  basket-header mt-1">
                BASKET
            </div>
            <div className="basket-body">
                <div className='row my-1'>
                    <div className='col-2 basketInfo'>AMOUNT</div>
                    <div className="col-6 basketInfo">PRODUCT NAME</div>
                    <div className="col-2 basketInfo">PRICE</div>
                    <div className='col-2 basketInfo'>DELETE</div>
                </div>
                {products.map((product, index) => (
                    <div className='row' key={index}>
                        <div className='col-2 basketItem d-flex align-items-center'>
                            <div className='col-2 ps-2'>{product.count}</div>
                            <div className='col-10'>
                                <FaMinusCircle className='float-end basketItemCount' style={{ fontSize: '17px', margin: '1px' }} onClick={() => { dispatch(decreaseProduct(product)) }} />
                                <FaPlusCircle className='float-end  basketItemCount' style={{ fontSize: '17px', margin: '1px' }} onClick={() => { dispatch(increaseProduct(product)) }} />
                            </div>
                        </div>
                        <div className="col-6 basketItem text-center "><span className='basketProductName' onClick={() => { navigate('/product-details/' + product.id) }}>{product.title}</span></div>
                        <div className="col-2 basketItem text-center">{product.price} $</div>
                        <div className='col-2 deleteBox' onClick={() => { dispatch(deleteProduct(product)) }}><RiDeleteBin6Fill className='' /></div>
                    </div>
                ))}
                <div>
                    <div className="row basketInfo pe-3 justify-content-end " style={{ fontSize: '20px' }}>Total : {calculateTotal()} $</div>

                </div>

                <div>
                    <button className='btn btn-success float-end my-3 purchaseBtn ' onClick={() => {
                        document.querySelector('.purchaseBtn').style.backgroundColor = 'red';
                    }}>Purchase</button>
                </div>

            </div>
        </div>
    )
}

export default Basket
