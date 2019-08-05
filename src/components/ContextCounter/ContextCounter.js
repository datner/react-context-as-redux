import React, { useContext } from "react";
import "./ContextCounter.css";
import CounterContext, { actions } from "../../contexts/counterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h1>The count is: {state.count}</h1>
      <button onClick={() => dispatch(actions.increment())}>increment</button>
      <button onClick={() => dispatch(actions.decrement())}>decrement</button>
      <button onClick={() => dispatch(actions.set(10))}>set to 10</button>
    </div>
  );
};

export default Counter;
