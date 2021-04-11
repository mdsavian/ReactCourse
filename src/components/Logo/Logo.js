import React from 'react'
import BurgerLogo from '../../assets/burger-logo.png'
import './Logo.css'

const logo = (props)=>(
    <div className='Logo' style={{height:props.height}}>
        <img src={BurgerLogo} alt="Logo Burger"/>
    </div>
)

export default logo