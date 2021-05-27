import './ExpenseItem.css';

function ExpenseItem(propsData) {

    return (
        <div className="expense-item">
            <div>{propsData.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{propsData.title}</h2>
                <div className="expense-item__price">$ {propsData.amount}</div>
            </div>
        </div>
    )

}

export default ExpenseItem;