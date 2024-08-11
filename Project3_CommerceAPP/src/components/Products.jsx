import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/slice/productSlice';
import { useNavigate } from 'react-router-dom';

function Products() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { products } = useSelector(store => store.products);
    console.log(products);

    useEffect(() => {
        dispatch(getProducts());
    }, [])

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
        <div className='row'>
            {
                products && products.map((product, index) => (
                    <div className='card col-md-3 ' key={index}>
                        <div className='card-header justify-content-center'>
                            <span>{product.title}</span>
                            <div className={rateControle(product.rating.rate) + ' rate'}>{product.rating.rate}</div>
                        </div>
                        <div className='card-body'>
                            <img className="" src={product.image} />
                            <div className=''></div>
                        </div>
                        <div className="card-footer">
                            <div className='price'>{product.price}$</div>
                            <div><button className='btn btn-success' onClick={() => { navigate('/product-details/' + product.id) }}>Details</button></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products