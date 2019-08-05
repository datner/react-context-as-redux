import { createStore } from "redux";

const initialState = {
  count: 0
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

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "CHANGE-COUNT":
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};

export default createStore(counterReducer);
