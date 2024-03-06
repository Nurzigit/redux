export const addExpense = (expense) => ({
    type: 'add',
    payload: expense,
  });
  
export const deleteExpense = (id) => ({
    type: 'delete',
    payload: id,
});
  
export const updateExpense = (expense) => ({
    type: 'update',
    payload: expense,
});
  