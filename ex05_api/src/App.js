import {useEffect} from 'react';
const {kakao} = window;
function App() {
  const style = {
    width : '500px',
    height : '400px',
    border: '1px solid black',
    margin : '0 auto'
  }
  //script 태그로 라이브러리 읽으면 window 객체에 등록
  // console.log(window);
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    
    var map = new kakao.maps.Map(container, options);
  },[]);

  return (
    <div className="App">
      	<div id="map" style={style}></div>
    </div>
  );
}

export default App;
