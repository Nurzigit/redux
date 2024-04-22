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

export const setFilter = (filter) => ({
    type: 'set_filter',
    payload: filter,
  });
  
  export const setSort = (sort) => ({
    type: 'set_sort',
    payload: sort,
  });
  
  
export const fetchExpenses = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('api/expenses');
        const expenses = await response.json();
        expenses.forEach((expense) => dispatch(addExpense(expense)));
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };
  };