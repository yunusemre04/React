import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

function DialogCom() {
    const [dialog, setDialog] = useState(false);

    return (
        <div className='my-2'>
            <div className='ms-2 h4' >Dialog </div>
            <Dialog open={dialog}>
                <DialogTitle >
                    Are you agree privite policy?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setDialog(false) }}>Disagree</Button>
                    <Button onClick={() => { setDialog(false) }}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <Button variant='contained' onClick={() => { setDialog(true) }}>
                Open Dialog
            </Button>
        </div>
    )
}

export default DialogCom