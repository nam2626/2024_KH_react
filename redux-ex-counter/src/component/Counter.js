import { useDispatch, useSelector } from "react-redux";
import { increament, decrement,increamentByAmount } from "../store/CounterSlice";
import { useRef } from "react";

export default function Counter() {
  //상태값 선택
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const txtNum = useRef();
  return (
    <div>
      <input type="text" ref={txtNum}/>
      <button onClick={()=>dispatch(increamentByAmount(Number(txtNum.current.value)))}>증가</button>
      <hr/>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={()=>dispatch(increament())}>+</button>
    </div>
  );
}