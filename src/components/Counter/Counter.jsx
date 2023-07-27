import "./Counter.css";
import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.initialValue);

  const increment = () => {
    setCounter(counter + props.number);
  };
  const decrement = () => {
    setCounter(counter - props.number);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
