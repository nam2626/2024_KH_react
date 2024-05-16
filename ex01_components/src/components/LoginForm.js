import './../css/login.css';
function LoginForm(){
  const loginClick = () => {
    // alert('로그인 버튼 클릭');
    // 아이디와 비밀번호를 입력한 input 태그 접근
    let id = document.querySelector('#id');
    let pass = document.querySelector('#pass');
    alert(id.value + ' ' + pass.value);
  }
  return (
    <div className='loginForm'>
      <input type='text' id='id'></input>
      <input type='password' id='pass'/>
      <button className='btn_login' onClick={loginClick}>로그인</button>
    </div>
  );
}

export default LoginForm;