import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from '../Expenses/ExpenseChart/ExpenseChart'

const Expenses = (props) => {
  const [yearFiltered, setYearFiltered] = useState("2021");

  const filterYearHandle = (year) => {
    setYearFiltered(year);
  };

  const filteredExpenses = props.expensiveItems.filter(
    (ex) => ex.date.getFullYear().toString() === yearFiltered
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFiltered} onSelectYear={filterYearHandle} />
      <ExpenseChart expenseItems={filteredExpenses}/>
      <ExpenseList expenseItems={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
