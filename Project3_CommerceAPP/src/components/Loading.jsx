import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';

import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

export default function Loading() {
    const loading = useSelector(store => store.products.loading);



    return (
        <div>

            <Backdrop
                sx={{ color: '#222', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
