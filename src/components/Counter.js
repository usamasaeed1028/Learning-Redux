import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const counter2 = useSelector((state) => state.counter.counter2);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());

  };

  const increamentHandler = () => {
    dispatch(counterActions.increament(1));
  };
  const decreamentHandler = () => {
    dispatch(counterActions.decreament(1));
  };

  const increamentHandler5 = () => {
    dispatch(counterActions.increamentBy5(5));
  };
  const decreamentHandler5 = () => {
    dispatch(counterActions.decreamentBy5(5));
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
