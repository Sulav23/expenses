import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm addExpenseData={props.addExpenseData} />
    </div>
  );
};

export default NewExpense;
