import React from 'react'
import AuxHoc from '../../hoc/AuxHoc'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

import './Layout.css'

const layout = (props)=>(
    <AuxHoc>
        <Toolbar/>    
        <SideDrawer/>    
        <main className="Content">
            {props.children}
        </main>
    </AuxHoc>
)

export default layout