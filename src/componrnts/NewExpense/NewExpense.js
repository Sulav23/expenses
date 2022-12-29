import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isClicked, setIsCliked] = useState(false);

  const handleClick = () => {
    setIsCliked((prevIsClicked) => !prevIsClicked);
  };

  if (!isClicked) {
    return (
      <div className="new-expense">
        <button onClick={handleClick}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        addExpenseData={props.addExpenseData}
        handleClick={handleClick}
      />
    </div>
  );
};

export default NewExpense;
