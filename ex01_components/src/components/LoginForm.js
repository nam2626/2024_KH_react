import './../css/login.css';
function LoginForm(){
  const loginClick = () => {
    // alert('로그인 버튼 클릭');
    // 아이디와 비밀번호를 입력한 input 태그 접근
    let id = document.querySelector('#id');
    let pass = document.querySelector('#pass');
    // alert(id.value + ' ' + pass.value);
    // 아이디와 비번을 입력했는지 체크하는 코드를 작성
    // 아이디와 비밀번호를 입력하지 않았으면 area 영역에 '아이디와 비밀번호를 입력하세요.' 메세지 출력, 글자색은 빨강색, 글꼴은 두껍게 처리
    // 아이디와 비밀번호를 입력 했다면 area 영역에 '정상적으로 입력되었습니다.' 메세지 출력, 글자색은 파랑색, 글꼴은 두껍게 처리
    //innerHTML을 이용해서 태그 및 텍스트를 추가 
    let area = document.querySelector('#area');
    if(id.value == '' || pass.value == ''){
      //css 적용 및 메세지 출력 - 입력 안했을때
      // area.classList.add('클래스명');//클래스 추가
      // area.classList.remove('클래스명');//클래스 제거
      // area.classList.contains('클래스명')//해당 클래스가 있는지? true/false
      area.innerHTML = `아이디와 비밀번호를 입력하세요.`;
      area.classList.remove('true');
      area.classList.add('false');
    }else{
      //css 적용 및 메세지 출력 - 입력 했을때
      area.innerHTML = `정상적으로 입력되었습니다.`;
      area.classList.remove('false');
      area.classList.add('true');
    }
  }
  return (
    <div className='loginForm'>
      <input type='text' id='id'></input>
      <input type='password' id='pass'/>
      <div id="area"></div>
      <button className='btn_login' onClick={loginClick}>로그인</button>
    </div>
  );
}

export default LoginForm;