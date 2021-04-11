import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import "./SidreDrawer.css"
const sideDrawer = (props) =>{
    return (
        <div className="SideDrawer">
            <div className="LogoSide">
                <Logo />
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
    )
}

export default sideDrawer