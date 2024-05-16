import './../css/button.css';
function ButtonOK(){
  const clickOk = (event) => {
    alert('확인 버튼 클릭');
    console.log(event);
  }
 return (
    <button className='buttonOk' onClick={clickOk}>확인</button>
  );
}

export default ButtonOK;