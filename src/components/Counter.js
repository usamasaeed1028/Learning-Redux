import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const counter2 = useSelector((state) => state.counter2);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "showCounter" });

  };

  const increamentHandler = () => {
    dispatch({ type: "increament", value: 1 });
  };
  const decreamentHandler = () => {
    dispatch({ type: "decreament", value: 1 });
  };

  const increamentHandler5 = () => {
    dispatch({ type: "increamentBy5", value: 5 });
  };
  const decreamentHandler5 = () => {
    dispatch({ type: "decreamentBy5", value: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter}</div>
          <div className={classes.value}>{counter2}</div>
          <div className={classes.margin}>
            <button onClick={increamentHandler} className={classes.margin}>Increament Counter</button>
            <button onClick={decreamentHandler} className={classes.margin}>Decreament Counter</button>
          </div>
          <div className={classes.margin}>
            <button onClick={increamentHandler5} className={classes.margin}>Increament Counter By 5 </button>
            <button onClick={decreamentHandler5} className={classes.margin}>
              Decreament Counter By 5
            </button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
