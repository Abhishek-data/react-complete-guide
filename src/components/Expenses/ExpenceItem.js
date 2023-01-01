import React from "react";
import Card from "../UI/Card";
import ExpenceDate from "./ExpenceDate";
import "./ExpenceItem.css";
import { useState } from 'react';

const ExpenceItem = (props)=> {
  const clickHandler = () =>{
    console.log('clicked!!!')
  };
  const [isActive, setIsActive] = useState(true);

  const handleDelete = (event) => {
    setIsActive(false);
  }

  if (!isActive) {
    return null;
  }


  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date}  />
      <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
    <button onClick={handleDelete}>Delete Expense</button>
    </Card>
  );
}

export default ExpenceItem;
