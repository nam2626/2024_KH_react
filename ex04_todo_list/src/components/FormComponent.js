import { useRef, useState } from "react";
import ItemComponent from "./ItemComponent";
import './../css/form.css';
//초기 랜덤 데이터
function makeItem(){
  const items = [
    {
        "id": 1,
        "val": "빨래하기",
        "done": false
    },
    {
        "id": 2,
        "val": "장보기",
        "done": false
    },
    {
        "id": 3,
        "val": "청소하기",
        "done": false
    },
    {
        "id": 4,
        "val": "요리하기",
        "done": false
    },
    {
        "id": 5,
        "val": "운동하기",
        "done": false
    },
    {
        "id": 6,
        "val": "책 읽기",
        "done": false
    },
    {
        "id": 7,
        "val": "이메일 확인",
        "done": false
    },
    {
        "id": 8,
        "val": "프로젝트 작업",
        "done": false
    },
    {
        "id": 9,
        "val": "미팅 준비",
        "done": false
    },
    {
        "id": 10,
        "val": "전화하기",
        "done": false
    }
];
  return items;
}
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
      <table className="area">
        <tr>
          <th>순번</th>
          <th className="content">내용</th>
          <th>작업</th>
        </tr>
      {list.map((obj) => <ItemComponent key={obj.id} id={obj.id} val={obj.val} done={obj.done} deleteItem={deleteItem} updateItem={updateItem}/>)}
      </table>
    </>
  ); 
}