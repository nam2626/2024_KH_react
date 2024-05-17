export default function ItemComponent(props) {
  let {id, val, deleteItem} = props;
  return (
    <p>
      {id} / {val} / 
      <button onClick={() => deleteItem(id)}>삭제</button>
    </p>
  );
}