import { useParams } from "react-router-dom";

export default function MemberView() {
  const {memberId} = useParams();
  console.log(memberId);
  return (
    <div>{memberId}</div>
  ); 
}