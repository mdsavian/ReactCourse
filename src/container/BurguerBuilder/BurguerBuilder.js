import React, {Component} from 'react'
import AuxHoc from '../../hoc/AuxHoc/AuxHoc'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICE = {
    salada:0.5,
    bacon:1,
    queijo:0.7,
    carne:1.3
}
class BurguerBuilder extends Component{
    state ={
        ingredients:{
            salada:0,
            bacon:0,
            queijo:0,
            carne:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
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

    purchasingHandler = ()=>{
        this.setState({purchasing:true})
    }

    cancelPurchasingHandler = ()=>{
        this.setState({purchasing:false})
    }

    finishPurchasingHandler = ()=>
    {
        alert('finish him')
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
                <Modal show={this.state.purchasing} closeModal={this.cancelPurchasingHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        cancelPurchasing={this.cancelPurchasingHandler}
                        finishPurchasing={this.finishPurchasingHandler}
                        totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>   
                <BuildControls 
                 addIngredients={this.addIngredientsHandler}
                 removeIngredients={this.removeIngredientsHandler}
                 disabled={disabledInfo}
                 price={this.state.totalPrice}
                 purchasable={this.state.purchasable}
                 ordered={this.purchasingHandler}
                 />
            </AuxHoc>
        )
    }

}

export default BurguerBuilder