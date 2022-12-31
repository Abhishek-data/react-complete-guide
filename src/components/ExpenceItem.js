import './ExpenceItem.css';

function ExpenceItem() {
    const expenseDate = new Date(2022, 12, 31);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    const locationOfExpenditure = 'New Year Party'


    return (
    <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <h2>{locationOfExpenditure}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </div>
   );

}

export default ExpenceItem;
