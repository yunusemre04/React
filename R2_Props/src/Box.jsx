import React from 'react'

function Box({ children }) {

    return (
        <>
            <div className='h3'>New Box</div>
            {children}
        </>
    )
}

export default Box