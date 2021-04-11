import React from 'react'
import AuxHoc from '../../../hoc/AuxHoc'

const orderSummary = (props)=>{
    const ingredientsSummary = Object.keys(props.ingredientes).map(igKey=>{
        return (
        <li>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>: 
            {props.ingredientes[igKey]}
            </li>
            )
    })
    return (
        <AuxHoc>
            <h3>Sua Ordem</h3>
            <p>Um hamburguer delicioso com os seguintes ingredientes:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue para a compra?</p>
        </AuxHoc>
    )
}

export default orderSummary