import React, { useState } from "react";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue)

  return <div className="counter">
    <div>you have clicked {count} times</div>
    <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>
}

export default Counter;