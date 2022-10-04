// Internal imports
import ExpensesDate from './ExpensesDate';
import Card from '../UI/Card';
// CSS Files
import './ExpenseItem.css';

function ExpenseItem(props) {
  let title = props.title;

  const clickHandler = () => {
    title = 'Clicled!!!';
  };

  return (
    <Card className='expense-item'>
      <ExpensesDate date={props.date} />

      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
