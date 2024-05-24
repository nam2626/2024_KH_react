import { useLocation } from "react-router-dom";

export default function Data() {
  const location = useLocation();
  const {search} = useLocation();

  console.log(location);
  return (
    <div>
      <h2>Data - QueryString</h2>
      <p></p>
    </div>
  );
}