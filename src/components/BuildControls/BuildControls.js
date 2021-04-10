import React from 'react'
import './BuildControls.css'
import BuildControl from '../BuildControl/BuildControl'

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'},
]
const buildControls = (props)=>{
    console.log(props)
    return (
        <div className='BuildControls'>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
            {controls.map(control=>
                <BuildControl key={control.label}  label={control.label}  
                addIngredients={()=>props.addIngredients(control.type)} 
                removeIngredients={() => props.removeIngredients(control.type)}
                disabled={props.disabled[control.type]} />)}



        </div>
    )
}
export default buildControls