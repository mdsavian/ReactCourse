import React, { Component } from "react";
import AuxHoc from "../../../hoc/AuxHoc/AuxHoc";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <AuxHoc>
        <h3>Sua Ordem</h3>
        <p>Um hamburguer delicioso com os seguintes ingredientes:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Preço Total: R$ {this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continuar para a compra?</p>

        <Button clicked={this.props.cancelPurchasing} btnType="Danger">
          CANCELAR
        </Button>
        <Button clicked={this.props.finishPurchasing} btnType="Success">
          COMPRAR
        </Button>
      </AuxHoc>
    );
  }
}

export default OrderSummary;
