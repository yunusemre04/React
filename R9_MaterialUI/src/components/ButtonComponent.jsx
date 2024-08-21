import React from 'react'
import Button from '@mui/material/Button'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ButtonComponent() {
    return (
        //variant:style
        //color:warning:yellow,error:red,info:light blue,primary:dark blue,secondary:purple,success:green
        //size:large,small,medium

        <div>
            <div className='h4 ms-2'>Button</div>
            <Button variant="text" className='m-1' color='primary'>Text</Button>
            <Button variant="contained" className='m-1' color='error'>Contained</Button>
            <Button variant="outlined" className='m-1' size='small' color='success'>Outlined</Button>
            <Button variant="contained" size='large' className='m-1' color='info'>Contained</Button>
            <Button variant="contained" size='large' className='m-1' color='secondary'>Contained</Button>
            <Button variant="contained" size='large' className='m-1' startIcon={<LocationOnIcon />} color='success'>Contained</Button>
            <Button variant="contained" size='large' className='m-1' endIcon={<LocationOnIcon />} color='warning'>Contained</Button>
        </div>
    )
}

export default ButtonComponent