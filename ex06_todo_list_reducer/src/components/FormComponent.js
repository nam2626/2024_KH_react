import { useRef, useState } from "react";
import ItemComponent from "./ItemComponent";
import './../css/form.css';

export default () => {
  let [list, setList] = useState(makeItem());
  let count = useRef(10)
  const txt = useRef();
  const addItem = () => {
    let item = {id:++count.current, val : txt.current.value, done: false};
    setList([...list, item]);
    console.log(list);
  }
  const deleteItem = (n) => {
    setList(list.filter((obj,idx) => obj.id !== n));
  }
  const updateItem = (n) => {
    setList(list.map((obj) => {
      if(obj.id === n){
        obj.done = true;
      }
      return obj;
    }));
  }
  return(
    <>
    <div className="form-container">
      <input type="text" ref={txt} className="input"/>
      <button onClick={addItem} className="btn add">추가</button>
    </div>
      <hr></hr>
      
    </>
  ); 
}