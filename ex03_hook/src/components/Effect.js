import { useEffect, useState } from "react";

export default function Effect() {
  let [counter,setCounter] = useState(0);
  let [today,setToday] = useState(new Date());

  const handlerClick = () =>{
    setCounter(counter + 1);
  }
  //[] 없음 => 리렌더링 될때마다 재실행이 된다.
  //[] => 빈 배열, 최초로 로드될 때 딱 한번만 실행된다.
  //[상태변수,...] => 지정한 상태 변수가 변경 될때만 새롭게 등록된다.
  useEffect( () => {
    setTimeout(() => {
      setToday(new Date());
      console.log('Effect 렌더링 : ',today.toLocaleString());
    },3000);
  },[counter]);

  return (
    <div>
      <h2>{today.toLocaleString()}</h2>
      <p>상태변수 값 : {counter}</p>
      <button onClick={handlerClick}>count 증가</button>
    </div>
  );
}