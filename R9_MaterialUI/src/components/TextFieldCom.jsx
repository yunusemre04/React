import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
function TextFieldCom() {
    return (
        <div>
            <div className='h4 ms-2'>Text Field</div>
            <TextField className='m-1' id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField className='m-1' id="filled-basic" disabled inputProps={{ readOnly: true }} value={'6949864516'} variant="filled" />
            <TextField className='m-1' id="standard-basic" label="Standard" variant="standard" color='error' />
            <TextField
                className='m-1'
                label="Standard"
                variant="standard"
                color="primary"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonAddAlt1Icon />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                className='m-1'
                label="Standard"
                variant="standard"
                color="primary"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <PersonAddAlt1Icon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}

export default TextFieldCom