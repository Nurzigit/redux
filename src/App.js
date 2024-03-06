import './App.css';
import { AddExpenseForm } from './components/AddExForm';
import { ExpenseList } from './components/ExList';
import { TotalExpenses } from './components/TotalEx';


function App() {
  return (
    <>
      <AddExpenseForm/>
      <ExpenseList/>
      <TotalExpenses/>
    </>
  );
}

export default App;
