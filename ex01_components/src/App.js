import ButtonOK from "./components/ButtonOK";
import LoginForm from "./components/LoginForm";
/* 
  JSX 규칙
  1. 반드시 부모요소 태그 하나로 감싸야함
  2. JSX 안에서 자바스크립트 표현식을 쓸려면 {}로 묶어야함
  3. CSS 적용시에도 카멜표기법으로 작성해야함.(background-color -> backgourndColor)
  4. JSX의 속성은 DOM 속성명(javascript 속성)을 따른다 → class 를 className으로 사용
  5. 반드시 닫는 태그를 써야됨
  6. '', ""로 묶지 않음
  7. {} 자바스크립트 표현식 내부에서는 if문을 사용하지 않음.(필요시 삼항 연산자는 가능)
*/
function App() {
  const person = {name:'홍길동',age : 20};
  const style = {backgroundColor : 'red', color:'white'};
  return (
    <div>
      <h1>First React App</h1>
      <h2>소제목</h2>
      <p>HTML TAG 작성....</p>
      <p style={style}>이름 : {person.name}, 나이 : {person.age}</p>
      <hr></hr>
      <img src='./img/grill1.jpg'></img>
      <hr></hr>
      <ButtonOK/>
      <ButtonOK/>
      <hr/>
      <LoginForm/>
    </div>
  );
}

export default App;
