import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import { closeNotification } from '../redux/slice/basketSlice';

const Notification = () => {
    const dispatch = useDispatch();
    const { message, open } = useSelector((state) => state.basket.notification);

    const handleClose = () => {
        dispatch(closeNotification());
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={handleClose}
            message={message}
            autoHideDuration={2500}
            ContentProps={{
                style: {
                    backgroundColor: 'rgb(68, 224, 15)',
                    color: '#fff',
                },
            }}
        />
    );
};

export default Notification;