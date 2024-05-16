export default (props) => {
  console.log(props);
  //ok_area 영역에 props에 있는 내용을 출력
  const btnOkClick = () => {
    // let name = props.name;
    // let age = props.age;
    /* 
      props 사용시 속성명과 선언할 변수명과 동일하게 처리하면
      props에 있는 값을 뽑아서 선언 및 초기화가 가능함
    */
    let {name, age} = props;
    alert(name + ' ' + age);
  }
  return (
    <div>
      <button onClick={btnOkClick}>확인</button>
      <div className='ok_area'>
        이름 : {props.name}, 나이 : {props.age}
      </div>
    </div>
  );
}