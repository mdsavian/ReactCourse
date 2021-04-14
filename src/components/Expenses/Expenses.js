import './Expenses.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) =>
{
  return (
    <Card className="expenses">
        {props.expensiveItems.map((ex) => {
        return <ExpenseItem key={ex.id} date={ex.date} title={ex.title} price={ex.price}/>;        
      })}
    </Card>
  )
}

export default Expenses