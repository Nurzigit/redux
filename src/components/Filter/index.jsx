// FilterComponent.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../action/actionType';

export const FilterComponent = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
        <option value="category">Category</option>
      </select>
    </div>
  );
};

