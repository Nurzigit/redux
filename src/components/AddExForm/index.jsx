import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../action/actionType";
import { v4 as uuidv4 } from 'uuid';

export const AddExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const newExpense = {
      name,
      amount: parseFloat(amount),
      date: uuidv4(),
    };
    dispatch(addExpense(newExpense));
    setName("");
    setAmount("");
    setDate("");
  };
  console.log(date);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Колво"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Время"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

