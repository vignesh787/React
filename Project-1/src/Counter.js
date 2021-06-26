import React, { useState } from "react";
import AppButton from "./AppButton";
const Counter = (props) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    console.log("increment +++");
    setValue(value + 1);
  };
  const handleDecrement = () => {
    console.log("Decrement---");
    setValue(value - 1);
  };

  return (
    <div>
      <h4>Counter App </h4>

      <AppButton text="+" bgcolor="Green" recieveBtnClick={handleIncrement} />
      <AppButton text="-" bgcolor="Red" recieveBtnClick={handleDecrement} />
      <div> Value {value}</div>
    </div>
  );
};

export default Counter;
