import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 04 2021 </div>
      <div className="expense-item__description">
        <h2> Conta do carro </h2>
        <div className="expense-item__price"> R$295,00 </div>
      </div>
    </div>
  );
}

export default ExpenseItem
