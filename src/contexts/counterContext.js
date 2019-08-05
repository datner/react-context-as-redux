import React, { createContext, useReducer } from "react";

const CounterContext = createContext();

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "CHANGE-COUNT":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export const actions = {
  increment: () => ({
    type: "INCREMENT"
  }),
  decrement: () => ({
    type: "DECREMENT"
  }),
  set: count => ({
    type: "CHANGE-COUNT",
    payload: count
  })
};

export const CounterProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};

export const CounterConsumer = CounterContext.Consumer;
export default CounterContext;
