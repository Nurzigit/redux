// components/ExpenseList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../../action/actionType";
import { FilterComponent } from "../Filter";

export const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const sort = useSelector((state) => state.sort);


  let filteredExpenses = expenses;
  if (filter === 'amount') {
    filteredExpenses = filteredExpenses.sort((a, b) => a.date - b.date);
  }

  if (sort === 'asc') {
    filteredExpenses = filteredExpenses.sort((a, b) => a.amount - b.amount);
  }

  const handleDelete = (date) => {
    dispatch(deleteExpense(date));
  };
  return (
    <div>
      <h2>List</h2>
      <ul>
      <FilterComponent />
        {expenses.map((ex) => (

          <li key={ex.id}>
            <span>{ex.name}</span>
            <span>{ex.amount}</span>
            <button onClick={() => handleDelete(ex.date)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
