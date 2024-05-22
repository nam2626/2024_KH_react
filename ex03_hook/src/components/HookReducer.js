import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";

const reducer = (state, action) => {
  switch(action.type){
    case 'changeNumber':
      let value = Number(action.payload.value);
      return {...state, [action.payload.name] : value};
    case 'changeString':
      return {...state, str : action.payload};
    case 'changeToday':
      return {...state, today : new Date()};
    case 'addNumber':
      return {...state, list : [...state.list, Number(action.payload)]};
  }
}
export default function HookReducer() {
  const [data, dispatch] = useReducer(reducer, {
    num: '',
    str: '',
    today: new Date(),
    avg: '',
    list: [],
  });

  const changeNumber = useCallback((e) => {
    dispatch({type:'changeNumber', payload : e.target});
  },[]);

  const changeString = useCallback((e) => {
    dispatch({type:'changeString', payload : e.target.value});
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch({type : 'changeToday'});
    },3000);
  },[data.today]);
  const txtNum = useRef();
  const addNumber = () => {
    dispatch({type:'addNumber', payload : txtNum.current.value});
  }
  const getAverage = (arr) => {
    //배열에 있는 내용 평균 리턴
    if(arr.length == 0) return 0;
    return arr.reduce((pre,cur) => pre + cur,0) / arr.length;
  }
  
  const getAverageMemo = useMemo(() => {
    return getAverage(data.list);
  },[data.list]);

  return (
    <div>
      <h2>Reducer Hook</h2>
      <input type="text" name="num" onChange={changeNumber}/>
      Num : {data.num} <br></br>
      <input type="text" name="str" onChange={changeString}/>
      Str : {data.str}<br></br>
      Date : {data.today.toLocaleString()}<br/>
      Avg :  {data.list.join(',')} / {getAverageMemo}<br/>
      <input type="text" ref={txtNum}/><button onClick={addNumber}>숫자 추가</button>
    </div>

  );
}