import React, { useState } from "react";

const Counter = ({ initialValue }) => {
  // let count = 0;
  const [count, setCount] = useState(initialValue)
  // const [stateThing, setStateThing] = useState("initialValue")
  // const template = `this is a string with a ${count}`;

  const multiply = (num) => num * 3

  return <div className="counter">
    <div>you have clicked {count} times</div>
    <button 
      onClick={() => setCount(multiply(count))}
      // onClick={() => {
      //   count = count + 1;
      //   console.log(count)
      // }}
    >
    Click me</button>
  </div>
}

export default Counter;