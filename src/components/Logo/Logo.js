import React from 'react'
import BurgerLogo from '../../assets/burger-logo.png'
import './Logo.css'

const logo = ()=>(
    <div className='Logo'>
        <img src={BurgerLogo} alt="Logo Burger"/>
    </div>
)

export default logo