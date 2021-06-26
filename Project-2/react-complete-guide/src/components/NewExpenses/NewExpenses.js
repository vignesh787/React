import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onReachingApp(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <buttom onClick={startEditingHandler}> Add New Expense </buttom>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
