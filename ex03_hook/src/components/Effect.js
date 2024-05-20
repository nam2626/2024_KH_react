import { useEffect, useState } from "react";

export default function Effect() {
  let [counter,setCounter] = useState(0);
  let [today,setToday] = useState(new Date());

  const handlerClick = () =>{
    setCounter(counter + 1);
  }
  useEffect( () => {
    setTimeout(() => {
      setToday(new Date());
      console.log('Effect 렌더링 : ',today.toLocaleString());
    },3000);
  },[]);

  return (
    <div>
      <h2>{today.toLocaleString()}</h2>
      <p>상태변수 값 : {counter}</p>
      <button onClick={handlerClick}>count 증가</button>
    </div>
  );
}