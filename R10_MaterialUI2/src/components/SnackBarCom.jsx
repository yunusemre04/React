import { Button, IconButton, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function SnackBarCom() {
    const [snackbar, setSnackbar] = useState(false);

    const openSnackbar = () => {
        setSnackbar(true);
    }
    const closeSnackbar = () => {
        setSnackbar(false);
    }

    const action = (
        <>
            <Button onClick={closeSnackbar}>Info</Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={closeSnackbar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>


    )

    return (
        <div>
            <div className='ms-2 h4'>SnackBar</div>
            <Button variant='contained' color='success' onClick={openSnackbar}>Open Snackbar</Button>

            <Snackbar
                open={snackbar}
                autoHideDuration={3000}
                onClose={closeSnackbar}
                message="Snackbar has succesfully open"
                action={action}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
            </Snackbar>

        </div>
    )
}

export default SnackBarCom