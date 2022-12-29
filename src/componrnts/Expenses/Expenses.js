import React, { useState } from "react";
import ExpenseFilter from "../Filter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
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
      <ExpensesChart expenses={filteredItem} />
      <ExpensesList filteredItem={filteredItem} />
    </Card>
  );
};

export default Expenses;
