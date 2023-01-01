import React,{useState} from "react";
import Card from "../UI/Card";
import ExpenceDate from "./ExpenceDate";
import "./ExpenceItem.css";


const ExpenceItem = (props)=> {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  console.log('ExpenseItem evaluated by React');
  const clickHandler = () =>{
    setTitle('Updated!');
    console.log(title);
  };
  const clickHandlerExpense = () =>{
    setAmount(100)
  }

  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date}  />
      <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
    <button onClick={clickHandlerExpense}>Change Expense</button>
    
    </Card>
  );
}

export default ExpenceItem;
