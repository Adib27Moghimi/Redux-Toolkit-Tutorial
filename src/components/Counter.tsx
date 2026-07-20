import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../state/store";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return <div></div>;
}
export default Counter;
