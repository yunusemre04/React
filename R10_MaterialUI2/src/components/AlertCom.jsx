import { Alert } from '@mui/material'
import React from 'react'

function AlertCom() {
    return (
        <div className='my-2'>
            <div className='ms-1 h4' >Alert</div>
            <div className='d-flex text-center'>
                <Alert severity='success' className='col-3 '>Success</Alert>
                <Alert severity='info' className='col-3 ' variant='outlined'>Info</Alert>
                <Alert severity='warning' className='col-3 ' variant='filled'>Warning</Alert>
                <Alert severity='error' className='col-3 ' variant='filled'>Error</Alert>
            </div>
        </div>
    )
}

export default AlertCom