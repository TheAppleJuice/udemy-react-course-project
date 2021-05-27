import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(propsData) {
    return (
        <Card className="expenses">
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

        </Card>
    )

}

export default Expenses;








