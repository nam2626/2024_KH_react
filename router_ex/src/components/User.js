import { useParams } from "react-router-dom";

export default function User() {
  const {id} = useParams();
  return <h2>User id : {id}</h2>;
}