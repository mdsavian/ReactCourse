import React, {Component} from 'react'
import AuxHoc from '../../hoc/AuxHoc'
import Burger from '../../components/Burger/Burger'
class BurguerBuilder extends Component{
    state ={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }
    }
    render (){
        return (
            <AuxHoc>
                    <Burger ingredients={this.state.ingredients}/>   
<div>Build Controls</div>
            </AuxHoc>
        )
    }

}

export default BurguerBuilder