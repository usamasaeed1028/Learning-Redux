import { createStore } from "redux";
const initalState = { counter: 0, counter2: 0, showCounter: true };

const counterReducer = (state = initalState, action) => {
  if (action.type == "increament") {
    return {
      counter: state.counter + action.value,
      counter2: state.counter2,
      showCounter: true,
    };
  }
  if (action.type == "decreament") {
    return {
      counter: state.counter - action.value,
      counter2: state.counter2,
      showCounter: true,
    };
  }
  if (action.type == "increamentBy5") {
    return {
      counter2: state.counter2 + action.value,
      counter: state.counter,
      showCounter: true,
    };
  }
  if (action.type == "decreamentBy5") {
    return {
      counter2: state.counter2 - action.value,
      counter: state.counter,
      showCounter: true,
    };
  }
  if (action.type == "showCounter") {
    return {
      counter: state.counter,
      counter2: state.counter2,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
