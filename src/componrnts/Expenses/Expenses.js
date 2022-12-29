import React, { useState } from "react";
import ExpenseFilter from "../Filter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");

  const selectFilterDate = (passedFilterDate) => {
    setFilterDate(passedFilterDate);
    console.log(filterDate);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectFilterDate={selectFilterDate}
        filterDate={filterDate}
      />
      {props.item.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
