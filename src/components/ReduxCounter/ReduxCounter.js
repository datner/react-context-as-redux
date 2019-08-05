import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ReduxCounter.css";
import { actions } from "../../reducers/counterReducer";

const Counter = props => {
  const count = useSelector(store => store.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(actions.increment(count))}>
        increment
      </button>
      <button onClick={() => dispatch(actions.decrement(count))}>
        decrement
      </button>
      <button onClick={() => dispatch(actions.set(10))}>set to 10</button>
    </div>
  );
};

export default Counter;
