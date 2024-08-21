import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';

function AppBarCom() {
    const [anchorElData, setAnchorElData] = useState(null);
    const openDropdawn = (e) => {
        setAnchorElData(e.currentTarget);
    }
    return (
        <div className='' style={{ marginBottom: '100px' }}>
            <div className='h4 ms-2 mb-3'>AppBar</div>
            <AppBar sx={{ position: 'inherit' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        AppBar
                    </Typography>
                    <Stack direction={'row'} sx={{ marginRight: '5%' }}>
                        <Button sx={{ color: 'white' }} variant='text'>Main Page</Button>
                        <Button sx={{ color: 'white' }} variant='text'>Contact</Button>
                        <Button sx={{ color: 'white' }} variant='text'>About</Button>
                        <Button sx={{ color: 'white' }} variant='text' onClick={openDropdawn}>Products</Button>
                    </Stack>
                    <Button color="success" variant='contained'>Login</Button>
                    <Menu anchorEl={anchorElData} open={anchorElData !== null} onClose={() => setAnchorElData(null)}>
                        <MenuItem onClick={() => setAnchorElData(null)}>Computers</MenuItem>
                        <MenuItem onClick={() => setAnchorElData(null)}>Laptops</MenuItem>
                        <MenuItem onClick={() => setAnchorElData(null)}>Speakers</MenuItem>
                        <MenuItem onClick={() => setAnchorElData(null)}>HeadSets</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default AppBarCom