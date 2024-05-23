import { useRef, useState } from "react";
import './../css/form.css';

export default (props) => {
  let {addTodo} = props;
  let count = useRef(10)
  const txt = useRef();

  return(
    <>
    <div className="form-container">
      <input type="text" ref={txt} className="input"/>
      <button onClick={() => {
        addTodo({id:++count.current,val : txt.current.value, done:false});
      }} className="btn add">추가</button>
    </div>      
    </>
  ); 
}