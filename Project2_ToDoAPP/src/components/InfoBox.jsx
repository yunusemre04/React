import React from 'react'

function InfoBox() {
    return (
        <div className='infoBox'>
            <div className="col-md-1 text-center text-light addBorder  h3">
                Status
            </div>
            <div className="col text-center text-light addBorder ms-1 h3">
                Task
            </div>
            <div className="col-md-2 text-center text-light addBorder ms-1 h3">
                Operation
            </div>
        </div>
    )
}

export default InfoBox