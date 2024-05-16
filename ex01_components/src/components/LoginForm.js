import './../css/login.css';
function LoginForm(){
  return (
    <div className='loginForm'>
      <input type='text' id='name'></input>
      <input type='password' id='pass'/>
      <button className='btn_login'>로그인</button>
    </div>
  );
}

export default LoginForm;