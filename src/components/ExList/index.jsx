// components/ExpenseList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../../action/actionType";

export const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const handleDelete = (date) => {
    dispatch(deleteExpense(date));
  };
  return (
    <div>
      <h2>List</h2>
      <ul>
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
