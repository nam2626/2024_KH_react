import { useEffect } from "react"
import axios from 'axios'
import '../css/Home.css'
export default function Home() {
  //액시오스로 전체 회원 데이터를 가져오는 코드
  useEffect(() => {
    //http://localhost:9999/member/list
    //아이디 이름 닉네임 회원등급
    axios.get('http://localhost:9999/member/list')
    .then(response => {
      console.log(response);
    })
  },[]);
  return (
    <>
      <h2>회원 목록</h2>
      <hr></hr>

    </>
  )
}