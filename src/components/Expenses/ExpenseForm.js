import React from "react";
import Card from "../UI/Card";

const ExpenseForm = (props) => {
    const changeHandler = (event) => {
        console.log(event.target.value)
    }

    return (
        <Card className="expense-item">
            <form onChange={changeHandler}>
                <label>Expense Title</label>
                <input></input>
                <label>Expense Amount</label>
                <input></input>
                <label>Date</label>
                <input></input>
                <button>Submit</button>
            </form>
        </Card>
    )
}

export default ExpenseForm