import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props)=>(

    <ul className="NavigationItems">
        <NavigationItem link="/" active >Construir Hambúrguer</NavigationItem>
        <NavigationItem link="/" >Checkout</NavigationItem>
    </ul>
)



export default navigationItems