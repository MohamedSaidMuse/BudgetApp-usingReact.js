MODULE 2
Expenses.js here /* 
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';
 import ExpenseItem from './ExpenseItem';
 import Card from '../UI/Card';
 import ExpensesList from './ExpensesList.js';
 import './Expenses.css';
 import './ExpensesList.css';
 const Expenses =(props) =>{
const [filteredYear, setFilteredYear] = useState('2020');
const filterChangeHandler = (selectedYear) => {

setFilteredYear(selectedYear);


};

// AAdding conditional return statements 

/// Here we want to dic=scuss rendering conditionl content 


const filteredExpenses = props.items.filter((expense) => {
return expense.date.getFullYear().toString() === filteredYear;
});
// the below code makes  the jsx snipept lean 

return (
  // between theese curly braces for loops are not allowed so wwe will use a ternary expression
     // the below code is little bit of a trick in whcih js will return the second part of the condition after the and if the first part of th econdition is met. 

     <div>
       
     <Card className="expenses">
     <ExpensesFilter selected ={filteredYear} onChangeFilter ={filterChangeHandler}/>
     
     </Card>
     </div>
   );
 };
 
 export default Expenses;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';
 import ExpenseItem from './ExpenseItem';
 import Card from '../UI/Card';
 import ExpensesList from './ExpensesList.js';
 import './Expenses.css';
 import './ExpensesList.css';
 const Expenses =(props) =>{
const [filteredYear, setFilteredYear] = useState('2020');
const filterChangeHandler = (selectedYear) => {

setFilteredYear(selectedYear);


};
// so here what we did is we added a key for the expenses added and then REcat will a=identifty the expenses with their repsective keys and avoid the warning alert 
// Assignement 3 
 /*---  we need to filter the years and  such that if a user selects a value the expenses from that year are only selected 
 hints: 1.use the filter method which is in built 
     2. Dont complicate 
 
 i have given a bit of thoungt on th eassignemnet but stopped it in the midway.... need to complete it hopefully .....
 the following was cut form the code when I was craeting the filter for the year and making it respmsive:
  {props.items.map((expense) => 
(<ExpenseItem
     key = {expense.id}
     title ={expense.title}
     amount={expense.amount}
     date={expense.date}
     
     />
    ))}
 
 
 
 
 */

    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
      });
      return (
           <div>
             
           <Card className="expenses">
           <ExpensesFilter selected ={filteredYear} onChangeFilter ={filterChangeHandler}/>
           <ExpensesList items ={filteredExpenses}/>
           </Card>
           </div>
         );
       };
       
       export default Expenses;
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       




*/
/*
import React, {useState} from 'react';
import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from './Components/Expenses/Expenses';

// what if we wanted to create the a conponent which acts as a shell....


  const DUMYY_EXPENSES= [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  // this is what mainly makes the updating possible... it gets the "expense" from the the xpenses.js and then expands on the dummy expense that we had buy  adding the newly added expense item 
  const App =() => {
    const [expenses,setExpenses]  =    useState(DUMYY_EXPENSES);
  const addExpenseHandler =expense => {
    setExpenses((prevExpense) => {
return [expense, ...prevExpense];
    });
      };
/*return React.createElement('div', {}, React.createElement('h2', {},"lets us go!"),React.createElement(Expenses,{items:expenses}));*/
return (
  <div>
    <NewExpense  onAddExpense ={addExpenseHandler}/>
    <Expenses items ={expenses}/>
  </div>
);
}
// lifting the state just means that you pass the data form the child  to tjhe parent 
export default App;
// this section as all abou tof componets and shring across components s=through the props.....what endsin the screen is just the default html code .... the custom components are not what ends up in the screen... componets and pops are two of the most important pasrts in react....the application is still a static application and we will change that in the course section by learning the state....


/// Closer look at JSX
/* IN THE PAST YOu had to import react from react ... now we can omit this now and depend on the magic done ander the hood....if we would hav eused the import react we would have used the createElement etc/....*/
// Organizing the component files
/* 
you might want to store them teh UI files in a diffrent folder than the rest of the files this will make our work simlper and presentable 



*/
// an alternative synstax for writing functions  in js a synatx whic his not exclusive to react.... you can an arraow function 




 */
/* expense.js.
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';
 import ExpenseItem from './ExpenseItem';
 import Card from '../UI/Card';
 import './Expenses.css';
 
const Expenses =(props) =>{
const [filteredYear, setFilteredYear] = useState('2020');
const filterChangeHandler = selectedYear => {

setFilteredYear(selectedYear);


};
// hard coding the number of expenses is not the way to go.... to solve this: first we pass the expenses via props..

   return (
     <div>
       
     <Card className="expenses">
     <ExpensesFilter selected ={filteredYear} onChangeFilter ={filterChangeHandler}/>
     
     {props.items.map((expense) => (<ExpenseItem
     title ={expense.title}
     amount={expense.amount}
     date={expense.date}
     
     />
    ))}
     </Card>
     </div>
   );
 };
 
 export default Expenses;
 
 // in this section 6
  /*we will talk about rendering lists and conditional content --- it means outputting Dynamic lists of content and rendering content under certain conditions 

  // Rendering lists of data                                     
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*import ExpenseItem from './ExpenseItem';
 import './Expenses.css';
function Expenses(props) {
   return (
 <div className="expenses">
<ExpenseItem
        title={props[0].items[0].title}
        amount={props[0].items[0].amount}
        date={props[0].items[0].date}
      />
      <ExpenseItem
        title={props[1].items[1].title}
        amount={props[1].items[1].amount}
        date={props[1].items[1].date}
      />
      <ExpenseItem
        title={props[2].items[2].title}
        amount={props[2].items[2].amount}
        date={props[2].items[2].date}
      />
      <ExpenseItem
        title={props[3].items[3].title}
        amount={props[3].itemsm[3].amount}
        date={props[3].items[3].date}
      />
      </div>
      
      );
}
export default Expenses;*/




/* Quiz 2
How can you communicate from one of your components to a parent (i.e. higher level) component?
-- YOu can acept a function via pops an dcall it from th elower level child component to ten trigger some action in the parent component  ( which passed the function)


*/

/* Assignemnt 2 
  --- making the filter 
  1. You listen to chnaged event
  2. Forward the data yti a higher level componet 
  3. In that component store it in a state.
      
/* EXpense Form ...here 
import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = () => {
const [eneteredAmount,setEnteredAmount] = useState('');
const [EnteredDate,setEnteredDate] =useState('');
const [eneteredTitle, setEnteredTitle] = useState('');
 

/*const [userInput,setUserInput]  =        useState( {
enteredTitle:'',
enteredAmount:'',
enteredDate:''
 */


/*const AmountChangeHandler = (event)  => {

                setAmount(event.target.value);
}
*/

        
       /* document.getElementById('').addEventListener('click', (event) => {})*/
       const titleChangeHandler =(event) => {
        // the below commneted out code can technically work but it is not the best of practice , it  depends on th eprevios state and just updates the targetetd value which is not good prcatice.  WE can correct this with the fact that we use the lower code which will use for the moment .. you could be using an outdated state so that is the problem here
       // setEnteredTitle(event.target.value);
       /* setUserInputt({
 ...userInput,
 enteredTitle: event.target.value,*/
/*setUserInput((prevState) => {
return {... prevState, enteredTitle: event.target.value}; */


} ;


}
//console.log(event.target.value);

;
const AmountChangeHandler =(event) => {
        // setEnteredTitle(event.target.value);
         setUserInputt({
  ...userInput,
  enteredAmount: event.target.value,
 })
 //console.log(event.target.value);
 
 };
 const dateChangeHandler =(event) => {
        // setEnteredTitle(event.target.value);
         setUserInputt({
  ...userInput,
  enteredDate: event.target.value,
 })
 //console.log(event.target.value);
 
 };
 
   return (
   <form>
    <div className ="new-expense__controls">
    <div className ="new-expense__control">
        <label>Title</label>
        <input type='text' onChange= {titleChangeHandler}/>
</div>
<div className="new-expense__control">
        <label>Amount</label>
        <input type='text'  type ='number' min ="0.01" onChange= {titleChangeHandler}/>
</div>
<div className="new-expense__control">
        <label>Date</label>
   
        <input type='date'    min="2019-01-01" max ="2022-12-31"/>
</div>
</div>
<div className= "new-expense__actions">
<button type ="submit"> Add Expense</button>
</div>
   </form> );
};
export default ExpenseForm;











expense form ends here 
*/
/* 1. User interaction  and state 
       making apps interactive and reactive.... reactive means app changes when some things happen
       upadinhg the ui and workin with state...
// u have to know jhow the state is working under the hood....

/* Expense Item
 import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem =(props) =>{
  // function clickHandler (
    // usestate always returns an array 
const [title,setTitle] = useState(props.title);
// this is a recat hook
 
console.log('expenseItem evaluated by React')
  const clickHandler = () => {
   setTitle("updated!");
    console.log(title);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick= {clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
// splitting components into smaller components---- in thi s componnet we can say that it is getting a bit bigger
// we are uisng the props functinlaity which make sth eocde reusbale 
// helps put dates in human readable way (toLocaleString())
// a component in ecat is just a js function
*/


















MODULE 1
// quizes
// quiz  notes on module 1 ---- what is JSX? it is a special non standard  synatax used in react projects--- when we se like the create react app the JSX is converted to the standard js behind the scenes
// with react you build a component tree that has one root node
//That's correct! You build a tree by nesting components into each other - just as you build a HTML tree when building a standard HTML document.
import React from 'react';

import Expenses from './Components/Expenses/Expenses'
// what if we wanted to create the a conponent which acts as a shell....
const App =() => {
  const expenses= [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
/*return React.createElement('div', {}, React.createElement('h2', {},"lets us go!"),React.createElement(Expenses,{items:expenses}));*/
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items ={expenses}/>
    </div>
  );
}

export default App;
// this section as all abou tof componets and shring across components s=through the props.....what endsin the screen is just the default html code .... the custom components are not what ends up in the screen... componets and pops are two of the most important pasrts in react....the application is still a static application and we will change that in the course section by learning the state....


/// Closer look at JSX
/* IN THE PAST YOu had to import react from react ... now we can omit this now and depend on the magic done ander the hood....if we would hav eused the import react we would have used the createElement etc/....*/
// Organizing the component files
 /* 
 you might want to store them teh UI files in a diffrent folder than the rest of the files this will make our work simlper and presentable 
 
 
 
 */
// an alternative synstax for writing functions  in js a synatx whic his not exclusive to react.... you can an arraow function 

