import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slice/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slice/basketSlice';


function ProductDetails() {
    const [count, setCount] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products, selectedProduct } = useSelector(store => store.products);

    const increment = () => { setCount(count + 1) };
    const decrement = () => { count - 1 <= 0 ? setCount(1) : setCount(count - 1) };





    useEffect(() => {
        const getProductsById = () => {
            const product = products.find(product => product.id == id);
            if (product) {
                dispatch(setSelectedProduct(product));

            }
        };
        getProductsById();

    }, [id, products, dispatch]);
    const { price, image, title, description, rating } = selectedProduct;

    const rate = rating?.rate || 0;
    const rateCount = rating?.count || 0;

    const addBasket = () => {
        const object = {
            id,
            count,
            title,
            image,
            description,
            price,

        }
        dispatch(addToBasket(object));
    }

    const rateControle = (rate) => {
        let color = '';
        if (rate < 2) {
            color = "bg-danger";
        } else if (rate >= 2 && rate < 3.5) {
            color = "bg-warning";
        } else {
            color = "bg-success";
        }
        return color;
    }
    return (
        <div>
            <div className='container-fluid detailsPage '>
                <div className="row">
                    <div className="col-md-4 detail-img">
                        <img src={selectedProduct.image} />
                    </div>
                    <div className="col-md-8 ">
                        <div style={{ fontSize: '25px', fontWeight: '600' }} className='bg-dark text-light br-r mt-1'>{selectedProduct.title}</div>
                        <div className='mt-2'>
                            <span className={rateControle(rate) + ' rate'} >{rate}</span>
                            <span className='rateCount'>{rateCount} Evaluation</span>
                        </div>
                        <div style={{ fontWeight: '500', fontSize: '15px', margin: '15px 0px' }} className='bg-dark text-light br-r'>{description}</div>
                        <div style={{ fontSize: '40px' }} className='mb-1' >
                            <span className='text-light bg-dark br-r'>
                                {<CiCirclePlus className='countIcon ' onClick={() => { increment() }} />}
                                <span> {count} </span>
                                {<CiCircleMinus className='countIcon' onClick={() => { decrement() }} />}
                            </span>
                        </div>
                        <div style={{ fontSize: '40px', fontWeight: '800' }} className='my-2'><span className='bg-dark text-light br-r' >{price} $</span></div>
                        <div className='text-center'><button className='button' onClick={() => { addBasket() }}>ADD BASKET</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails