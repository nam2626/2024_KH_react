import { useCallback, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type){
    case 'changeNumber':
      let value = Number(action.payload.value);
      return {...state, [action.payload.name] : value};
    case 'changeString':
      return {...state, str : action.payload};
    case 'changeToday':
      return {...state, today : new Date()};
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

  return (
    <div>
      <h2>Reducer Hook</h2>
      <input type="text" name="num" onChange={changeNumber}/>
      Num : {data.num} <br></br>
      <input type="text" name="str" onChange={changeString}/>
      Str : {data.str}<br></br>
      Date : {data.today.toLocaleString()}<br/>
    </div>

  );
}