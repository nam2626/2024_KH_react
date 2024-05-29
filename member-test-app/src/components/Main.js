import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Main() {
  const info = useSelector(state => state.member.value);
  console.log('Main redux : ',info);
  const [id,setId] = useState('')
  const [name,setName] = useState('');
  useEffect(() =>{

    const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:9999/get/token', {
        params :{ token : info.token}
      });
      console.log(response);
      if (response.status === 200) {
        console.log(response.data);
        if(response.data.flag){
          alert('사용자 정보 읽기 완료');
          setId(response.data.id);
          setName(response.data.name);
        }
      }
    } catch (error) {
      alert('로그인 실패');
      console.error(error);
    }
  }
  fetchData();
  },[])

  return (
    <div>
      <h2>로그인 한 사람 정보</h2>
      <p>아이디 : {id}</p>
      <p>이름 : {name}</p>
    </div>
  );
}