import React, {Component} from 'react'
import AuxHoc from '../AuxHoc/AuxHoc'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

import './Layout.css'

class Layout extends Component {

    state = {
        showSideDrawer:false
    }

    sideDrawerCloseHandler = ()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerOpenHandler = ()=>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
    
    render ()    {
        return (
            <AuxHoc>
                <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>    
                <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>    
                <main className="Content">
                    {this.props.children}
                </main>
            </AuxHoc>
        )
    }
}

export default Layout