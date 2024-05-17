import { useRef, useState } from "react";
import ItemComponent from "./ItemComponent";

export default () => {
  let [list, setList] = useState([]);
  let count = useRef(0)
  const txt = useRef();
  const addItem = () => {
    let item = {id:++count.current, val : txt.current.value};
    setList([...list, item]);
    console.log(list);
  }
  const deleteItem = (n) => {
    setList(list.filter((obj,idx) => obj.id !== n));
  }
  return(
    <>
      <input type="text" ref={txt}/>
      <button onClick={addItem}>추가</button>
      <hr></hr>
      {list.map((obj) => <ItemComponent key={obj.id} id={obj.id} val={obj.val} deleteItem={deleteItem} />)}
    </>
  ); 
}