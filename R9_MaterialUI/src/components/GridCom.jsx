import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
function GridCom() {
    return (
        <div>
            <div className='h4 ms-2'>Grid</div>
            <Grid container className='my-2'>
                <Grid xs={12} sm={6} md={4} lg={3} sx={{ border: '2px solid black' }}>
                    BOX 1
                </Grid>
                <Grid xs={12} sm={6} md={8} lg={9} sx={{ border: '2px solid black' }}>
                    BOX 2
                </Grid>
            </Grid>
        </div>
    )
}

export default GridCom