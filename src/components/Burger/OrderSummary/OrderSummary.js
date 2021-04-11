import React from 'react'
import AuxHoc from '../../../hoc/AuxHoc'
import Button from '../../UI/Button/Button'

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
            <p><strong>Preço Total: R$ {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continuar para a compra?</p>
            
            <Button clicked={props.cancelPurchasing} btnType="Danger">CANCELAR</Button>
            <Button clicked={props.finishPurchasing} btnType="Success">COMPRAR</Button>
            
        </AuxHoc>
    )
}

export default orderSummary