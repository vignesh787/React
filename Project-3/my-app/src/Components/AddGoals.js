import React, { useState } from 'react';

const AddGoals = (props) => {

   const [goal,setGoal] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
    };

const saveGoalText = (event) => {
    // console.log(event);
    console.log(goal);
    props.addGoalToList(goal);

};

const inputChangeHandler = (event) => {
  
    console.log(event.target.value);
    setGoal(event.target.value)
};

    return <div>
    <form onSubmit={submitHandler}>

        <input type ="text" value ={goal} onChange={inputChangeHandler}></input>

        <button type="submit" onClick={saveGoalText}>Add Goal</button>


    </form>
    </div>

};

export default AddGoals;
