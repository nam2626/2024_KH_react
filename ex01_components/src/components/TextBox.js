export default () => {
  //초기화 버튼 문제
  //초기화 버튼 클릭시 txt에 입력된 내용을 전부 지우는 작업
  const txtClear = () => {
    const txt = document.querySelector('#txt');
    txt.value = '';
  }
  return (
    <div>
      <input type='text' id='txt' placeholder="텍스트를 입력하세요"/>
      <button onClick={txtClear}>초기화</button>
    </div>
  );
}