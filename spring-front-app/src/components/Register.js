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
  const register = () => {
    const obj = {
      boardMemberId : txtId.current.value,
      boardMemberPasswd : txtPass.current.value,
      boardMemberName : txtName.current.value,
      boardMemberNick : txtNick.current.value,
      boardMemberGrade : selectGrade.current.value,
    }
    console.log(obj);

    axios.post('http://localhost:9999/member/insert',obj).then(respose => {
      console.log(respose);
      //경고창으로 메세지 출력
      //회원등록이 완료되었을 때만 Home으로 이동
      
    })

  }
  return (
    <div>
      <ul id="register_form">
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
        <li><button onClick={register}>회원가입</button><button>뒤로가기</button></li>
      </ul>
    </div>
  );
}