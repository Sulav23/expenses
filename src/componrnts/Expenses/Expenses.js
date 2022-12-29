import React, { useState } from "react";
import ExpenseFilter from "../Filter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");

  const selectFilterDate = (passedFilterDate) => {
    setFilterDate(passedFilterDate);
  };

  const filteredItem = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === filterDate
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectFilterDate={selectFilterDate}
        filterDate={filterDate}
      />
      <ExpensesList filteredItem={filteredItem} />
    </Card>
  );
};

export default Expenses;
