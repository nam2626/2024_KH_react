export default function CheckComp() {
  const checkedStatus = () => {
    const status = document.querySelector('#chk').checked;
    console.log(status);
    if(status){
      alert('하단에 체크박스에 체크가 되었습니다.');
    }else{
      alert('하단에 페크박스의 체크가 풀려있습니다.');
    }
  }
  return (
    <div>
      <input type="checkbox" id="chk" onClick={checkedStatus}/>
      <label htmlFor="chk">체크박스</label>
    </div>
  );
}

