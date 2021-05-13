import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    console.log('1111')
    dispatch(counterActions.increase({amount:5}));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>
          Incremet
        </button>
        <button onClick={increaseHandler}>
          Increase By 5
        </button>
        <button onClick={ decrementHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
