import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import './ExpensesList.css';
 const Expenses =(props) =>{
const [filteredYear, setFilteredYear] = useState('2020');
const filterChangeHandler = (selectedYear) => {

setFilteredYear(selectedYear);
};
const filteredExpenses = props.items.filter((expense) => {
return expense.date.getFullYear().toString() === filteredYear;
});

return (
     <div>  
     <Card className="expenses">
     <ExpensesFilter selected ={filteredYear} onChangeFilter ={filterChangeHandler}/>
     <ExpensesChart expenses={filteredExpenses}/>
     <ExpenseList items= {filteredExpenses}/>
     </Card>
     </div>
   );
 };
 export default Expenses;
 
 
 
 
 
 //we now want tpa dd the chart to see the  gra
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 