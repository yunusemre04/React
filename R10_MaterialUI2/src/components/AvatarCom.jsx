import { Avatar } from '@mui/material'
import React from 'react'

function AvatarCom() {
  return (
    <div>
      <div className='ms-2 h4' >Avatar </div>
      <div className='my-2 d-flex'>
        <Avatar src='https://randomuser.me/api/portraits/women/10.jpg' sx={{ width: '50px', height: '50px', marginLeft: '2px' }} />
        <Avatar sx={{ width: '50px', height: '50px', marginLeft: '2px' }}>E</Avatar>
        <Avatar sx={{ width: '50px', height: '50px', marginLeft: '2px', backgroundColor: 'red' }}>Z</Avatar>
        <Avatar src='https://randomuser.me/api/portraits/men/9.jpg' sx={{ width: '50px', height: '50px', marginLeft: '2px' }} />
      </div>
    </div>
  )
}

export default AvatarCom