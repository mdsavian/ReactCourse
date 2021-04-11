import React from 'react'
import AuxHoc from '../../../hoc/AuxHoc'

const orderSummary = (props)=>{
    const ingredientsSummary = Object.keys(props.ingredients).map(igKey=>{
        return (
        <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>: 
            {props.ingredients[igKey]}
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
            <p>Continuar para a compra?</p>
        </AuxHoc>
    )
}

export default orderSummary