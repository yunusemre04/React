import { Button, Drawer } from '@mui/material'
import React, { useState } from 'react'

function DrawerCom() {
    const [drawer, setDrawer] = useState(false);
    return (
        <div className='my-2'>
            <div className='ms-1 h4'>Drawer</div>
            <div>
                <Drawer open={drawer} sx={{ width: '500px' }} onClose={() => setDrawer(false)} anchor='left'>
                    <div style={{ width: '300px' }} className='text-center h4'>
                        Welcome
                    </div>
                    <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
                    <Button variant='outlined' sx={{ borderWidth: '3px', margin: '5px 1px', color: '#222', borderColor: '#222' }}>
                        Main Page
                    </Button>
                    <Button variant='outlined' sx={{ borderWidth: '3px', margin: '5px 1px', color: '#222', borderColor: '#222' }}>
                        Contact
                    </Button>
                    <Button variant='outlined' sx={{ borderWidth: '3px', margin: '5px 1px', color: '#222', borderColor: '#222' }}>
                        Info
                    </Button>
                    <Button variant='outlined' sx={{ borderWidth: '3px', margin: '5px 1px', color: '#222', borderColor: '#222' }}>
                        More
                    </Button>
                </Drawer>
            </div>
            <Button variant='contained' onClick={() => setDrawer(true)}>
                Open Drawer
            </Button>
        </div>
    )
}

export default DrawerCom