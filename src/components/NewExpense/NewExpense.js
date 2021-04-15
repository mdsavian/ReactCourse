import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveNewExpense = (expenseData) => {
    const newExpense = {
      id: Math.random().toString(),
      ...expenseData,
    };

    props.onSaveNewExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm saveExpense={saveNewExpense} />
    </div>
  );
};
export default NewExpense;
