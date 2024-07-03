import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Register() {
  let txtId = useRef();
  let txtPass = useRef();
  let txtName = useRef();
  let txtNick = useRef();
  let selectGrade = useRef();
  let [gradeList, setgradeList] = useState([]);
  useEffect(() => {
    const readData = async () => {
      axios.get('http://localhost:9999/grade/list')
      .then(response => {
        console.log(response);
        setgradeList(response.data);
      })
    }
    readData();
  },[]);
  if(gradeList.length == 0) return;
  return (
    <div>
      <ul>
        <li><input type='text' ref={txtId} placeholder="아이디 입력"/></li>
        <li><input type='password' ref={txtPass} placeholder="암호 입력"/></li>
        <li><input type='text' ref={txtName} placeholder="이름 입력"/></li>
        <li><input type='text' ref={txtNick} placeholder="닉네임 입력"/></li>
        <li>
            <select ref={selectGrade}>
              {gradeList.map((item,idx) => {
                return (
                  <option value={item.gradeNo}>{item.gradeName}</option>
                );
              })}
            </select>
        </li>
        <li><button>회원가입</button><button>뒤로가기</button></li>
      </ul>
    </div>
  );
}