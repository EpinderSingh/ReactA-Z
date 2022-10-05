import React from 'react';

//Import Internal Files
import ExpenseForm from './ExpenseForm';

// CSS Files
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
