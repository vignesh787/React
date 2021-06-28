import  classes  from './AddUser.module.css';
import React, { useState } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';

const AddUsers = (props) => {

    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();

const addUserHandler = (event) => {
    event.preventDefault();
    

    if(enteredUserName.trim().length === 0 || enteredAge.trim().length ===0){
        setError({
            title :' Invalid Input',
            message : 'PLase entear a valid name and age non-empty values).'
        });
        return;
    }

    if(+enteredAge <1 ){
        setError({
            title :' Invalid Age',
            message :' Please entear a valid age non-empty values).'
        });
        return;
    }

    console.log(enteredUserName,enteredAge);

    props.onUserAddition(enteredUserName,enteredAge);
    
    
    setEnteredUserName('');
    setEnteredAge('')
};

const errorHandler = () => {
    setError(null);
};

const userNameChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredUserName(event.target.value);
}

const ageChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAge(event.target.value);
}

    return (
        <div>
            <div className={classes.backdrop} />
            {error && <ErrorModal title={error.title} message={error.message}  onConfirm={errorHandler}/>}
        <Card className={classes.input}>
         <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" value = {enteredUserName} onChange={userNameChangeHandler} type="text"/>
            <label htmlFor="age">Age (Years)</label>
            <input id="username" value={enteredAge} onChange={ageChangeHandler} type="number"/>

            <Button type="submit" >Add User</Button>
         </form>
        </Card>
        </div>
    );


};

export default AddUsers;