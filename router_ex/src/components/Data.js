import { useLocation } from "react-router-dom";

export default function Data() {
  const location = useLocation();
  const {search} = useLocation();
  const queryString = new URLSearchParams(search);

  const name = queryString.get('name');
  const age = queryString.get('age');

  console.log(location);
  return (
    <div>
      <h2>Data - QueryString</h2>
      <p>{name} / {age}</p>
    </div>
  );
}