import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MemberView() {
  const {memberId} = useParams();
  console.log(memberId);
  const [member, setMember] = useState();
  useEffect(()=>{
    const fetchData = () => {
      axios.get('http://localhost:9999/member/'+memberId)
      .then(response => {
          console.log(response);
      });
    }
    fetchData();
  },[]);
  if(member == null){
    return <div>회원 데이터를 로딩중입니다.</div>
  }
  return (
    <div>{memberId}</div>
  ); 
}