import ItemComponent from "./ItemComponent";

export default function ListCompoent(props) {
  let {list,deleteTodo,updateTodo} = props;
  return (
    <div>
      <table className="area">
        <tr>
          <th>순번</th>
          <th className="content">내용</th>
          <th>작업</th>
        </tr>
      {list.map((obj) => <ItemComponent key={obj.id} id={obj.id} val={obj.val} done={obj.done} deleteItem={deleteTodo} updateItem={updateTodo}/>)}
      </table>
    </div>
  );
}