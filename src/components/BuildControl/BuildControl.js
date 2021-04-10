import React from 'react'
import './BuildControl.css'

const buildControl = (props)=>{
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button className='Less' disabled={props.disabled} onClick={props.removeIngredients}>Less</button>
            <button className='More' onClick={props.addIngredients}>More</button>

        

        </div>
    )
}
export default buildControl