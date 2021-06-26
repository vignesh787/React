import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput,setUserInput] = useState({
  //     enteredTitle : '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    // console.log(event);
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle : event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return {...prevState,enteredTitle:event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount : event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return {...prevState,enteredAmount:event.target.value};
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate : event.target.value,
    // });

    // setUserInput((prevState) => {
    //     return {...prevState,enteredDate:event.target.value};
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(event);

    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.table(expenseDate)
    props.onSaveExpenseData(expenseDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const hideNewExpense = () => {
    console.log("Cancel Button Clicked");
    return;
  };

  return (
    <form onSubmit={submitHandler}>
      <div class="new-expense__controls">
        <div class="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div class="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div class="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="Submit">Add Expense</button>

          <button type="Button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
