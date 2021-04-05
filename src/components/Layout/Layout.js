import React from 'react'
import AuxHoc from '../../hoc/AuxHoc'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import './Layout.css'

const layout = (props)=>(
    <AuxHoc>
    <div>Toolbar,SideDrawer,Backdrop</div>
    
    <main className="Content"   >
        {props.children}
    </main>
    </AuxHoc>
)

export default layout