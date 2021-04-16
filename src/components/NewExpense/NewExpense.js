import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showAddNewExpense, setShowAddNewExpense] = useState(false);

  const onClickAddNewExpense = () => {
    setShowAddNewExpense(true);
  };

  const saveNewExpense = (expenseData) => {
    const newExpense = {
      id: Math.random().toString(),
      ...expenseData,
    };

    props.onSaveNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      {!showAddNewExpense && (
        <button type="button" onClick={onClickAddNewExpense}>
          Adicionar Nova Despesa
        </button>
      )}
      {showAddNewExpense && (
        <ExpenseForm
          saveExpense={saveNewExpense}
          setShowAddNewExpense={setShowAddNewExpense}
        />
      )}
    </div>
  );
};
export default NewExpense;
