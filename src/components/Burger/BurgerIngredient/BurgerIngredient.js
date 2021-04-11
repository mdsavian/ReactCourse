import React from 'react'
import './BurgerIngredient.css'
import PropTypes from 'prop-types'

const burgerIngredient = (props)=>{
    let ingredient = null;

    switch(props.type)
    {
        case ('pao-baixo'):
            ingredient = <div className="BreadBottom"></div>
            break;
        case ('pao-cima'):
            ingredient = <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            break;
        case ('carne'):
            ingredient = <div className="Meat"></div>
            break;
            case ('queijo'):
            ingredient = <div className="Cheese"></div>
            break;
            case ('bacon'):
            ingredient = <div className="Bacon"></div>
            break;
            case ('salada'):
            ingredient = <div className="Salad"></div>
            break;
            default:
                ingredient = null
                break;

    }
    return ingredient
}

burgerIngredient.PropTypes = {
    type:PropTypes.string.isRequired
}
export default burgerIngredient