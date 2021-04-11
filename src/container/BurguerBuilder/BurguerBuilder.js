import React, {Component} from 'react'
import AuxHoc from '../../hoc/AuxHoc'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'

const INGREDIENTS_PRICE = {
    salad:0.5,
    bacon:1,
    cheese:0.7,
    meat:1.3
}
class BurguerBuilder extends Component{
    state ={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false
    }

    updatePurchasable=(ingredients)=>{        
        const sum = Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum + el
        },0)
            
        const isPurchasable = sum > 0
        this.setState({purchasable:isPurchasable})
    }

    addIngredientsHandler = (type)=>{
        const oldCount = this.state.ingredients[type]
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = oldCount + 1 
        
        const oldPrice = this.state.totalPrice;
        const newPrice = INGREDIENTS_PRICE[type] + oldPrice

        this.setState({totalPrice:newPrice,ingredients:updatedIngredients })
        this.updatePurchasable(updatedIngredients)
        
    }

    removeIngredientsHandler = (type)=>{
        const oldCount = this.state.ingredients[type]
        const updatedIngredients = {...this.state.ingredients}
        
        if (oldCount <= 0)
            return

        updatedIngredients[type] = oldCount - 1 
        
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENTS_PRICE[type]

        this.setState({totalPrice:newPrice,ingredients:updatedIngredients })
        this.updatePurchasable(updatedIngredients)
        
    }

    render (){

        const disabledInfo ={
            ...this.state.ingredients
        }
        for (let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <AuxHoc>
                <Burger ingredients={this.state.ingredients}/>   
                <BuildControls 
                 addIngredients={this.addIngredientsHandler}
                 removeIngredients={this.removeIngredientsHandler}
                 disabled={disabledInfo}
                 price={this.state.totalPrice}
                 purchasable={this.state.purchasable}
                 />
            </AuxHoc>
        )
    }

}

export default BurguerBuilder