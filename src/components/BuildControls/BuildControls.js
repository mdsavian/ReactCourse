import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label:'Salada', type:'salada'},
    {label:'Queijo', type:'queijo'},
    {label:'Bacon', type:'bacon'},
    {label:'Carne', type:'carne'},
]
const buildControls = (props)=>{
    return (
        <div className='BuildControls'>
            <p>Preço Atual: <strong>R$ {props.price.toFixed(2)}</strong> </p>
            {controls.map(control=>
                <BuildControl key={control.label}  label={control.label}  
                addIngredients={()=>props.addIngredients(control.type)} 
                removeIngredients={() => props.removeIngredients(control.type)}
                disabled={props.disabled[control.type]} />
                )}
            <button className='OrderButton' disabled={!props.purchasable}>PEÇA AGORA</button>

        </div>

    )
}
export default buildControls