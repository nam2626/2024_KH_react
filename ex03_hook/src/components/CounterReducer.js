import React, { useReducer } from 'react';
//const [변수명, dispatch] = useReducer(함수명,{키값:값,....});
//state에는 상태값을 받음, action 해야될 일
function reducer(state, action) {
  switch(action.type){
    case 'INCREMENT':
      return {...state, value : state.value + 1};
    case 'DECREMENT':
      return {...state, value : state.value - action.payload};
    default:
      return state;
  }
}

export default function CounterReducer() {
  const [count,dispatch] = useReducer(reducer, {value : 0});
  return (
    <div>
      <h2>Count : {count.value}</h2>
      <button onClick={() => dispatch({type:'INCREMENT'})}>증가</button>
      <button onClick={() => dispatch({type:'DECREMENT', payload : 2})}>감소</button>
    </div>
  );
}