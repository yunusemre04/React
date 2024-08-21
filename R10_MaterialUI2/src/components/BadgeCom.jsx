import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Badge } from '@mui/material';

function BadgeCom() {
    return (
        <div className='my-2'>
            <div className='ms-2 h4 mb-3'> Badge </div>
            <div className='ms-1'>
                <Badge badgeContent={6} max={9} color='success' anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <WhatsAppIcon sx={{ fontSize: '50px' }} />
                </Badge>
            </div>
        </div>
    )
}

export default BadgeCom