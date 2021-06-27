import React, { useState } from 'react';
import Goal from './Goal';



const GoalList = (props) => {

    return (
        <div>
            <h2> Hey there i have reached in Goal List section</h2>
            <ul >

                {props.item};
                {/* {props.item.map((goal) => (
                    <Goal goal1={goal}/>
                ))} */}
                          
            </ul>
        </div>
    );

};

export default GoalList;