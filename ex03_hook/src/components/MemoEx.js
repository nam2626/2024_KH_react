import {useEffect, useMemo, useRef, useState} from 'react';

function ResultComponent(props){
  console.log('렌더링 실행');
  const getAverage = (arr) => {
    if(arr.length == 0) return 0;
    let total = 0;
    arr.forEach(item => total += item);
    // total = arr.reduce((acc,cur) => acc + cur,0);
    return total / arr.length;
  }

  return(
    <div>
      <p>{props.arr.join(",")} / {getAverage(props.arr)}</p>
    </div>
  );
}
export default () => {
  const [num_list, setValue] = useState([]);
  const txtNum = useRef();
  
  const addNumber = () => {
    //추가 버튼 클릭시 text에 입력된 숫자를 num_list에 저장
    // setValue([...num_list,txtNum.current.value]);
    // setValue(num_list.concat(txtNum.current.value));
    // setValue((cur) => {
    //   return cur.concat(txtNum.current.value);
    // });
    setValue((cur) => {
      return [...cur, Number(txtNum.current.value)];
    });
  }
  //배열에 값을 숫자 만개 저장, 값은 랜덤으로 생성해서 저장, 0~99
  useEffect( () => {
    for(let i = 0; i<10000;i++){
      setValue((cur) => cur.concat(Math.floor(Math.random()*100)));
    }
  },[]);

  const [date, setDate] = useState(new Date());

  setTimeout(()=> {
    setDate(new Date());
  }, 1000);

  const ResultComponentMemo = useMemo(()=>{
    return <ResultComponent arr={num_list}/>;
  },[num_list]);

  return (
    <div>
      <p>{date.toLocaleString()}</p>
      <input type='text' ref={txtNum}/>
      <button onClick={addNumber}>추가</button><br></br>
      {ResultComponentMemo}
    </div>
  );
}






