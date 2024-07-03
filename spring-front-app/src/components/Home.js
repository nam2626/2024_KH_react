import { useEffect, useState } from "react"
import axios from 'axios'
import '../css/Home.css'
export default function Home() {
  let [memberList, setMemberList] = useState([]);
  let [gradeList, setgradeList] = useState([]);

  //액시오스로 전체 회원 데이터를 가져오는 코드
  useEffect(() => {
    //http://localhost:9999/member/list
    //아이디 이름 닉네임 회원등급
    const readData = async () => {
        axios.get('http://localhost:9999/member/list')
        .then(response => {
          console.log(response);
          setMemberList((v) => [...response.data]);
        })
        axios.get('http://localhost:9999/grade/list')
        .then(response => {
          console.log(response);
          setgradeList(response.data);
        })
      }
      readData();
    },[]);
    console.log(memberList);
    console.log(gradeList);

    return (
    <>
      <h2>회원 목록</h2>
      <table>
        <thead>
          <th>아이디</th>
          <th>이름</th>
          <th>닉네임</th>
          <th>등급</th>
        </thead>
        <tbody>
        {
          memberList.map((item,idx) => {
            return (
              <tr key={idx}>
                <td>{item.boardMemberId}</td>
                <td>{item.boardMemberName}</td>
                <td>{item.boardMemberNick}</td>
                <td>{item.boardMemberGrade}</td>
              </tr>
            );
          })  
        }
        </tbody>
      </table>
    </>
  )
}