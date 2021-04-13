import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses (props)
{
  return (
    <div className="expenses">
        {props.expensiveItems.map((ex) => {
        return <ExpenseItem key={ex.id} date={ex.date} title={ex.title} price={ex.price}/>;        
      })}
    </div>
  )
}

export default Expenses