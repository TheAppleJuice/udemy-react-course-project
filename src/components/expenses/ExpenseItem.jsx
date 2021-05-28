import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(propsData) {
//Adding state
    const [title, setTitle] =useState(propsData.title);
    console.log('ExpenseItem is evaluated by React');


    const clickHandler = () => {
        setTitle('Updated ! '); //Setting new state
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={propsData.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {propsData.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )

}

export default ExpenseItem;