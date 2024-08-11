import React from 'react'

function Products({ Pname, price }) {
    //const { Pname, price } = props; Pname=props.Pname , price=props.price
    return (
        <div>
            <div className='h2 bg-secondary w-25'>{Pname} : {price} $</div>
        </div>
    )
}

export default Products