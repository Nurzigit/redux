// reducer.js
const initialState = {
  expenses: [],
  filter: null,
  sort: null,
};

const expenseReducer = (state = initialState, action) => {
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
    case 'set_filter':
      return {
        ...state,
        filter: action.payload,
      };
    case 'set_sort':
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default expenseReducer;
