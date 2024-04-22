// components/TotalExpenses.js
import React from 'react';
import { useSelector } from 'react-redux';

export const TotalExpenses = () => {
  const expenses = useSelector((state) => state.expenses);
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0); 

  return (
    <div>
      <h2>Total</h2>
      <p>Total: {total}</p>
    </div>
  );
};

