import {useRef, useState} from 'react';
export default () => {
  const [result, setResult] = useState('');
  const text = useRef();
  const handler = () => {
    setResult(text.current.value);
    console.log(text.current.value);
  }
  return (
    <>
      <h2>useRef 적용</h2>
      <input type='text' ref={text} onChange={handler}/>
      <br></br>
      <span>{result}</span>
    </>
  );
}