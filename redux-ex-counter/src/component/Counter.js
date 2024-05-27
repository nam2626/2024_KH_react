import { useDispatch, useSelector } from "react-redux";
import { increament, decrement } from "../store/CounterSlice";

export default function Counter() {
  //상태값 선택
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" />
      <button>증가</button>
      <hr/>
      <button>-</button>
      <span>{count}</span>
      <button onClick={()=>dispatch(increament())}>+</button>
    </div>
  );
}