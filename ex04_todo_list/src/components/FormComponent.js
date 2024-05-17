import { useRef, useState } from "react";
import ItemComponent from "./ItemComponent";
import './../css/form.css';
export default () => {
  let [list, setList] = useState([]);
  let count = useRef(0)
  const txt = useRef();
  const addItem = () => {
    let item = {id:++count.current, val : txt.current.value, done: false};
    setList([...list, item]);
    console.log(list);
  }
  const deleteItem = (n) => {
    setList(list.filter((obj,idx) => obj.id !== n));
  }
  return(
    <>
    <div className="form-container">
      <input type="text" ref={txt} className="input"/>
      <button onClick={addItem} className="btn add">추가</button>
    </div>
      <hr></hr>
      <table className="area">
        <tr>
          <th>순번</th>
          <th>내용</th>
          <th>작업</th>
        </tr>
      {list.map((obj) => <ItemComponent key={obj.id} id={obj.id} val={obj.val} done={obj.done} deleteItem={deleteItem} />)}
      </table>
    </>
  ); 
}