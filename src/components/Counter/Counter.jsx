import "./Counter.css";
import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.initialValue, props.number);

  const increment = () => {
    setCounter(counter + props.number);
  };
  const decrement = () => {
    setCounter(counter - props.number);
  };
  const increment1 = () => {
    setCounter(props.number + 1);
  };
  const decrement1 = () => {
    setCounter(props.number - 1);
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
      <div>
      <button onClick={increment1}>INCREMENT</button>
      <span>{props.number}</span>
      <button onClick={decrement1}>DECREMENT</button>
      </div>
    </div>
  );
};

export default Counter;
