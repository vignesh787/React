import React from 'react';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.Module.css';


const ErrorModal = (props) => {

    return(
        <Card className={classes.modal} >
            <header className={classes.header}><h2>{props.title}</h2></header>
            <div className={classes.content}><p>{props.message}</p></div>
            <footer>  <Button onClick= {props.onConfirm}> Okay </Button></footer>
        </Card>
    );

};

export default ErrorModal;