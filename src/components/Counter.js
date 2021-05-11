import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = (type, value = 0) => {
    dispatch({ type: type, amount: value });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => toggleCounterHandler("increment")}>
          Incremet
        </button>
        <button onClick={() => toggleCounterHandler("increase", 5)}>
          Increase By 5
        </button>
        <button onClick={() => toggleCounterHandler("decrement")}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
