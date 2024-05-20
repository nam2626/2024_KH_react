import { useEffect, useState } from "react";

function LoginForm() {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  useEffect(() => {
    console.log('effect : ',id,pass);
  });
  return (
    <div>
      <h2>useEffect 예제</h2>
      <input type="text" onChange={(e)=>{
        setId(e.target.value);
      }}/>
      <br/>
      <input type="password" onChange={(e)=>{
        setPass(e.target.value);
      }}/>
      <p>id : {id}<br/>pass : {pass}</p>
    </div>
  );
}
export default LoginForm;