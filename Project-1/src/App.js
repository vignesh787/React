import React from "react";
import "./styles.css";
import MyButton from "./Button";
import FButton from "./FButton";
import AppButton from "./AppButton";
import Counter from "./Counter";
import Greeting from "./Greeting";

export default function App() {
  return (
    <div className="App">
      <h4>Happy New Year 2021 </h4>
      <MyButton />
      <FButton />
      <AppButton text="Submit" bgcolor="Green" />
      <AppButton text="Clear" bgcolor="Grey" />
      <AppButton text="Exit" bgcolor="Red" />
      <AppButton />
      <Counter />
      <Greeting />
    </div>
  );
}
