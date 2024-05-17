export default function ItemComponent(props) {
  let {id, val, done, deleteItem} = props;
  return (
    <tr>
      <td>{id}</td>
      <td className={done ? 'done' : ''}>{val}</td>
      <td>
        <button className="btn finish">작업 완료</button>
        <button onClick={() => deleteItem(id)} className="btn delete">삭제</button>
      </td>
        
    </tr>
  );
}