import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to='/' className='link'>Main Page</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/contact' className='link'>Contact</Link>
            <Link to='/others' className='link'>Others</Link>
            <Link to='/products' className='link'>Products</Link>
        </div>
    )
}

export default Header