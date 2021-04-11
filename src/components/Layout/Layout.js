import React from 'react'
import AuxHoc from '../../hoc/AuxHoc'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

import './Layout.css'

const layout = (props)=>(
    <AuxHoc>
        <Toolbar/>    
        <main className="Content">
            {props.children}
        </main>
    </AuxHoc>
)

export default layout