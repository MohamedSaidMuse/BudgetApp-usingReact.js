

import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem =(props) =>{
  
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      
    </Card></li>
  );
}

export default ExpenseItem;
// splitting components into smaller components---- in thi s componnet we can say that it is getting a bit bigger
// we are uisng the props functinlaity which make sth eocde reusbale 
// helps put dates in human readable way (toLocaleString())
// a component in ecat is just a js function
