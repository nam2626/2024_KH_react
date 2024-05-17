import { useState } from "react";

export default function ListComponent() {
  const [list, setList] = useState([]);
 
  const addHandler = () => {
    list.push(document.querySelector('#txt').value);
    setList(list);
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