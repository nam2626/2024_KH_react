import { useRef, useState } from "react";

export default () => {
  let [list, setList] = useState([]);
  let count = useRef(0)
  const txt = useRef();
  const addItem = () => {
    let item = {id:++count.current, val : txt.current.value};
    setList([...list, item]);
    console.log(list);
  }
  return(
    <>
      <input type="text" ref={txt}/>
      <button onClick={addItem}>추가</button>
    </>
  ); 
}