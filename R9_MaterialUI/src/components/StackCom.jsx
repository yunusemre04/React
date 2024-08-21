import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import React from 'react'

function StackCom() {
    return (
        <div className='m-2'>
            <div className='h4 ms-2'>Stack</div>
            <Stack direction={{ sm: 'column', md: 'row' }} spacing={5} divider={<Divider
                sx={{ width: '2px', backgroundColor: 'black' }} orientation='vertical' flexItem />}>
                <div style={{ border: '2px solid darkgrey', padding: '2px' }}>Stack Box 1</div>
                <div style={{ border: '2px solid darkgrey', padding: '2px' }}>Stack Box 2</div>
                <div style={{ border: '2px solid darkgrey', padding: '2px' }}>Stack Box 3</div>
            </Stack>
        </div>

    )
}

export default StackCom