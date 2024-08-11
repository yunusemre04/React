import React from 'react'
import { FaBasketShopping } from "react-icons/fa6"
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome } from "react-icons/fa";

function Header() {
    const [theme, setTheme] = useState('dark');
    const [searchBtn, setSearchBtn] = useState(true);
    const root = document.querySelector('#root');
    const body = document.querySelector('body');
    const cards = document.querySelectorAll(".card");
    const navigate = useNavigate();
    const { products } = useSelector(store => store.basket);
    const productAmount = JSON.parse(localStorage.getItem('basket')) == null ? 0 : JSON.parse(localStorage.getItem('basket')).length;


    const changeTheme = () => {
        if (theme === 'light') {
            root.style.backgroundColor = '#222';
            body.style.backgroundColor = '#222';
            if (document.querySelector('.detailsPage')) {
                document.querySelector('.detailsPage').style.color = 'white';
                document.querySelector('.detail-img').style.borderColor = 'white';

            }
            setTheme('dark');
            cards.forEach(card => {
                card.style.backgroundColor = '#222';
                card.style.color = 'white';
                card.style.borderColor = 'white';
                card.querySelector('.card-header').style.borderColor = 'white';
                card.querySelector('.card-footer').style.borderColor = 'white';
            })

        } else {
            root.style.backgroundColor = 'white';
            body.style.backgroundColor = 'white';

            if (document.querySelector('.detailsPage')) {
                document.querySelector('.detailsPage').style.color = '#222';
                document.querySelector('.detail-img').style.borderColor = '#222';
            }
            setTheme('light');
            cards.forEach(card => {
                card.style.backgroundColor = 'white';
                card.style.color = '#222';
                card.style.borderColor = '#222';
                card.querySelector('.card-header').style.borderColor = '#222';
                card.querySelector('.card-footer').style.borderColor = '#222';
            })
        }
    }
    const isOpenSearch = () => {
        const search = document.querySelector('.search');
        if (searchBtn) {
            search.style.display = 'none';
            search.style.transiction = 'ease 0.5s'
            setSearchBtn(false);
        } else {
            search.style.display = 'flex';
            setSearchBtn(true);
        }
    }




    return (
        <div className='header row'>
            <div>
                <span className='title'>E-COM</span>

                <span className='h-icons'>


                    <FaSearch className='h-icon' onClick={() => isOpenSearch()} style={{ padding: '5px' }} />
                    <FaHome className='h-icon' onClick={() => { navigate('/') }} />
                    {theme === 'dark' ?
                        <MdOutlineDarkMode className='h-icon' onClick={() => changeTheme()} /> :
                        <CiLight className='h-icon' onClick={() => changeTheme()} />
                    }
                    <Badge badgeContent={productAmount} color="primary">
                        <FaBasketShopping className='h-icon' onClick={() => { navigate('/basket') }} style={{ padding: '5px' }} />
                    </Badge>
                </span>
                <span className='col-md'>
                    <input type="text" className='float-end search ' placeholder='Enter a product name' />
                </span>
            </div>
        </div>
    )
}

export default Header