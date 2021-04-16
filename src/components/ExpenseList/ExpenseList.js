import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.expenseItems.length === 0)
    return (
      <p className="expenses-list__fallback">Nenhuma despesa encontrada</p>
    );

  return (
    <ul className="expenses-list">
      {props.expenseItems.map((ex) => (
        <ExpenseItem
          key={ex.id}
          date={ex.date}
          title={ex.title}
          price={ex.price}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
