import { useState } from "react";

export default function ListComponent() {
  const [list, setList] = useState([]);
 
  const addHandler = () => {
    // 참조형 변수인 배열이나 객체들은 내부 값이 바뀌어도 
    // 상태값을 감시하는 부분에서는 값 변경을 감지 하지 못함.
    // 상태값 변경을 감지할려면 배열이나 객체를 새로 할당해서 저장
    // 저장하고 있는 메모리 주소를 바꿔야 바뀐걸로 인신을 함
    // setList(list.concat(document.querySelector('#txt').value));
    // setList([...list,document.querySelector('#txt').value])
    setList((state) =>{
      return [...state, document.querySelector('#txt').value];
    });
    console.log(list);
  }

  return (
    <div>
      <p>리스트 내용 : {list.join(" ")}</p>
      <input type="text" id='txt'/>
      <button onClick={addHandler}>추가</button>
    </div>
  )

}