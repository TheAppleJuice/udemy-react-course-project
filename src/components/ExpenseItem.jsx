import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(propsData) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={propsData.date} />
            <div className="expense-item__description">
                <h2>{propsData.title}</h2>
                <div className="expense-item__price">$ {propsData.amount}</div>
            </div>
        </Card>
    )

}

export default ExpenseItem;