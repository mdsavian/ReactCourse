import './Expenses.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) =>
{
  const [yearFiltered, setYearFiltered] = useState('2021')

  const filterYearHandle = (year)=>{
    setYearFiltered(year)
  }
  return (    
    <Card className="expenses">
      <ExpensesFilter selected={yearFiltered} onSelectYear={filterYearHandle}/>
        {props.expensiveItems.map((ex) => {
        return <ExpenseItem key={ex.id} date={ex.date} title={ex.title} price={ex.price}/>;        
      })}
    </Card>
  )
}

export default Expenses