import { useState } from "react";

export default function NoEffect() {
  let [counter,setCounter] = useState(0);
  let [today,setToday] = useState(new Date());

  const handlerClick = () =>{
    setCounter(counter + 1);
  }
  setTimeout(() => {
    setToday(new Date());
    console.log('NoEffect 렌더링 : ',today.toLocaleString());
  },3000);
  console.log('렌더링 호출');
  return (
    <div>
      <h2>{today.toLocaleString()}</h2>
      <p>상태변수 값 : {counter}</p>
      <button onClick={handlerClick}>count 증가</button>
    </div>
  );
}