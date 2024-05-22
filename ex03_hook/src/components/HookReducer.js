import { useCallback, useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type){
    case 'changeNumber':
      let value = Number(action.payload.value);
      return {...state, [action.payload.name] : value};
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

  return (
    <div>
      <h2>Reducer Hook</h2>
      <input type="text" name="num" onChange={changeNumber}/>
      Num : {data.num} <br></br>
      <input type="text" name="str"/> Str : {data.str}<br></br>
    </div>

  );
}