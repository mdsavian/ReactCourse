import { useState } from "react";
import Card from "../../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props)=> {
  const [title, setTitle] = useState(props.title)

  const changeTitle=()=>{
    setTitle('atualizado')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> R${props.price} </div>
      </div>
      <button onClick={changeTitle}>Teste</button>
      </Card>
  );
}

export default ExpenseItem;
