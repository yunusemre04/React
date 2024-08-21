import { Tooltip } from '@mui/material'
import React from 'react'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
function TooltipCom() {
    return (
        <div>
            <div className="ms-2 h4">Tooltip</div>
            <Tooltip title='Remove Person' placement='right'>
                <PersonRemoveIcon sx={{ fontSize: '50px' }} />
            </Tooltip>
        </div>
    )
}

export default TooltipCom