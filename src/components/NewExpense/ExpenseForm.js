import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newExpense, setNewExpense] = useState({
    title: "",
    price: "",
    date: "",
  });


  const [dateOnInput, setDateOnInput] = useState('')

  const titleChangeHandler = (event) => {
    setNewExpense({ ...newExpense, title: event.target.value });
  };

  const dateChangeHandler = (event) => {    
    setDateOnInput(new Date(event.target.value).toISOString().split("T")[0])
    setNewExpense({
      ...newExpense,
      date: new Date(event.target.value),
    });
  };

  const priceChangeHandler = (event) => {
    setNewExpense({ ...newExpense, price: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.saveExpense(newExpense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título</label>
          <input
            type="text"
            value={newExpense.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Valor</label>
          <input
            type="number"
            value={newExpense.price}
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            value={dateOnInput}
            min="2020-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Adicionar Nova Conta</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
