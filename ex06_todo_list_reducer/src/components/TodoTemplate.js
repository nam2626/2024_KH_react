import { useReducer } from "react";
import FormComponent from "./FormComponent";
import ListCompoent from "./ListComponents";
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
function reducer(state, action){
  switch(action.type){
  case 'addTodo':
    return {list:state.list.concat(action.payload)};
  case 'updateTodo':
    let arr = state.list.map((obj) => {
      if(obj.id === n){
        obj.done = true;
      }
      return obj;
    });
    return {list : arr};
  case 'deleteTodo':
    return {list : state.list.filter((obj) => obj.id !== n)};
  default:
    return state;
  }
}
export default function TodoTemplate() {
  let [todo, dispatch] = useReducer(reducer, {
    list : makeItem()
  });
  return (
    <div>
      <FormComponent/>
      <hr></hr>
      <ListCompoent/>
    </div>
  );
}