import { CircularProgress, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'


function ProgressCom() {

    return (

        <div className='ms-2 my-2'>
            <div className="ms-2 h4">Progress</div>
            <div >
                <CircularProgress />
                <CircularProgress color='success' />
                <LinearProgress />
            </div>
        </div>
    )
}

export default ProgressCom