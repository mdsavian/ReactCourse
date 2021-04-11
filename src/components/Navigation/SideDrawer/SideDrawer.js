import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import AuxHoc from '../../../hoc/AuxHoc/AuxHoc'
import BackDrop from '../../UI/Backdrop/Backdrop'
import "./SidreDrawer.css"

const sideDrawer = (props) =>{
    let attachedClasses = ['SideDrawer', 'Close']
    if (props.show)
        attachedClasses = ['SideDrawer', 'Open']
    return (
        <AuxHoc>
            <BackDrop show={props.show} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className="LogoSide">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </AuxHoc>
    )
}

export default sideDrawer