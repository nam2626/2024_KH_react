import {useCallback, useRef,useState} from 'react'
export default function CallBakEx() {
  const [txt_list, setTxt] = useState([]);
  const inputTxt = useRef();
  //텍스트 추가 버튼 클릭시 텍스트상자에 입력된 내용 txt_list에 추가
  //텍스트 상자의 내용은 초기화
  //이럴경우 매번 해당 함수가 생성
  // const handler = () =>{
  //   setTxt((cur) => {
  //     return cur.concat(inputTxt.current.value);
  //   });
  // }
  const handler = useCallback(() =>{
    setTxt((cur) => {
      return cur.concat(inputTxt.current.value);
    });
  },[]);
  return (
    <div>
      <input type="text" ref={inputTxt}/>
      <button onClick={handler}>텍스트 추가</button>
      <hr/>
      <p>{txt_list.join(',')}</p>
    </div>
  );
}