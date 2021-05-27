import './ExpenseDate.css';

function ExpenseDate(propsData) {
    const month = propsData.date.toLocaleString('en-US', {month: 'long'});
    const day = propsData.date.toLocaleString('en-US', {day: '2-digit'});
    const year = propsData.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );

}

export default ExpenseDate;