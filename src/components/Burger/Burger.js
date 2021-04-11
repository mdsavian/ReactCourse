import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props)=>{

    let transformedIngredients = Object.keys(props.ingredients).map(igKey=>{

        return([...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        }))
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])
    
if (transformedIngredients.length === 0)
{
    transformedIngredients = <p>Por favor adicione os ingredientes!</p>
}
    return (
    <div className='Burger'>
        <BurgerIngredient type="pao-cima"/>
        {transformedIngredients}
        <BurgerIngredient type="pao-baixo"/>

    </div>);
}

export default burger