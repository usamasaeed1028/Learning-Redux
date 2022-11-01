import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, counter2: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increament(state, action) {
      state.counter = state.counter + action.payload;
    },
    decreament(state, action) {
      state.counter = state.counter - action.payload;
    },
    increamentBy5(state, action) {
      state.counter2 = state.counter2 + action.payload;
    },
    decreamentBy5(state, action) {
      state.counter2 = state.counter2 - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
