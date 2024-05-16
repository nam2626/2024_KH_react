export default () => {
  //초기화 버튼 문제
  //초기화 버튼 클릭시 txt에 입력된 내용을 전부 지우는 작업
  const txtClear = () => {
    const txt = document.querySelector('#txt');
    txt.value = '';
  }
  const txtBox = (e) => {
    // console.log(e);
    // 텍스트 상자에 데이터를 입력했을때
    // 입력한 텍스트가 6글자 이상이고, 숫자로만 입력되지 않았을 때
    // 데이터를 정상적으로 입력하셨습니다.
    // 만약 숫자만 입력하거나, 텍스트가 6글자 미만이면, 
    // 데이터를 비정상적으로 입력하였습니다. 
    // txt_area에 출력
    let txt = e.target.value;
    //console.log(txt);
    if(txt.length >= 6 && isNaN(txt)){
      document.querySelector('.txt_area').innerHTML = '정상적으로 입력하셨습니다.';
    }else{
      document.querySelector('.txt_area').innerHTML = '데이터를 비정상적으로 입력하였습니다.';
    }
  }
  return (
    <div>
      <input type='text' id='txt' placeholder="텍스트를 입력하세요" onChange={txtBox}/>
      <button onClick={txtClear}>초기화</button>
      <div className='txt_area'></div>
    </div>
  );
}