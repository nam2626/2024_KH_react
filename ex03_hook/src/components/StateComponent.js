import { useState } from 'react';
export default () => {
  let [state, setState] = useState('hello');

  const handler = () => {
    setState('안녕하세요');
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handler}>클릭</button>
    </div>
  );
}