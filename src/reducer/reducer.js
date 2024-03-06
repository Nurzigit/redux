// reducers.js
const initialState = {
    expenses: [],
  };
  
  const expenseReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
      case 'add':
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      case 'delete':
        return {
          ...state,
          expenses: state.expenses.filter((expense) => expense.date !== action.payload),
        };
      case 'update':
        return {
          ...state,
          expenses: state.expenses.map((expense) =>
            expense.id === action.payload.id ? action.payload : expense
          ),
        };
      default:
        return state;
    }
  };
  
  export default expenseReducer;
  