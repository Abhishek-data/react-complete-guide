import ExpenceDate from "./ExpenceDate";
import "./ExpenceItem.css";
import ExpenseDetails from "./ExpenseDetails";

function ExpenceItem(props) {
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date}  />
      <ExpenseDetails title={props.title} amount={props.amount}/>
    </div>
  );
}

export default ExpenceItem;
