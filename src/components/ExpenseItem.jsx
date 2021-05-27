import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(propsData) {
    return (
        <div className="expense-item">
            <ExpenseDate date={propsData.date} />
            <div className="expense-item__description">
                <h2>{propsData.title}</h2>
                <div className="expense-item__price">$ {propsData.amount}</div>
            </div>
        </div>
    )

}

export default ExpenseItem;