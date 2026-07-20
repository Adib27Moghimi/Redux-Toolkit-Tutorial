import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../state/counter/counterSlice";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2 className="counter">{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementAsync(1))}>
          Increment (1 second delay)
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment (10)
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
export default Counter;
