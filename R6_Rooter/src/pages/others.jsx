import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function others() {
  return (
    <div style={{ backgroundColor: 'green', fontSize: '30px', textAlign: 'center' }}>
      <div>
        <Link to='projects' className='link'>Projects</Link>
        <Link to='more' className='link'>More</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default others