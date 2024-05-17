const profile = [
  {id : 1, name : 'Alex', age : 20},
  {id : 2, name : 'Bob', age : 30},
  {id : 3, name : 'Charlie', age : 40},
  {id : 4, name : 'David', age : 50},
  {id : 5, name : 'Ethan', age : 70},
  {id : 6, name : 'Tom', age : 60}
];
export default function ItemList() {
  const tag = profile.map((item,idx) => {
    return (
      <li key={item.id}>{item.id} & {item.name} & {item.age}</li>
    );
  });
  console.log(tag);
  return (
    <ul>
      {tag}
    </ul>
  );
}