import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

function Expenses(propsData) {
    return (
        <div className="expenses">
            <ExpenseItem
                title={propsData.items[0].title}
                amount={propsData.items[0].amount}
                date={propsData.items[0].date}
            />
            <ExpenseItem
                title={propsData.items[1].title}
                amount={propsData.items[1].amount}
                date={propsData.items[1].date}
            />
            <ExpenseItem
                title={propsData.items[2].title}
                amount={propsData.items[2].amount}
                date={propsData.items[2].date}
            />
            <ExpenseItem
                title={propsData.items[3].title}
                amount={propsData.items[3].amount}
                date={propsData.items[3].date}
            />

        </div>
    )

}

export default Expenses;








