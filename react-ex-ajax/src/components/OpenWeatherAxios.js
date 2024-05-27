import {useRef} from 'react';
import axios from 'axios';
//POST로 전송하는 경우
/* 
  공식 예제 소스 : https://www.npmjs.com/package/axios
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/
export default function OpenWeatherAxios() {
  const result = useRef();
  const onWeaterHandler = () => {
    let url = 'https://api.openweathermap.org/data/2.5/weather';
  
    axios.get(url,{
      params : {
        id : '1835847',
        appid : 'APP_KEY'
      }
    }).then((response) => {
        //데이터를 받아서 화면에 출력 처리하는 부분
        console.log(response);
        let json = response.data;
        let tag = '';
        tag += `<p>도시명 : ${json.name}</p>`;
        tag += `<p>현재날씨 : ${json.weather[0].main}</p>`;
        tag += `<p>최고온도 : ${json.main.temp_max - 273.15}</p>`;
        tag += `<p>최저온도 : ${json.main.temp_min - 273.15}</p>`;
        tag += `<p>바람세기 : ${json.wind.speed}m/sec</p>`;
        result.current.innerHTML = tag;

    }).catch((error) => {
        //에러가 발생했을때 처리하는 영역
        console.log(error);
    }).finally(() => {
      console.log('fianlly 영역');
    });
  }
  return (
    <div>
      <button onClick={onWeaterHandler}>날씨 조회 - Axios</button>
      <hr></hr>
      <p ref={result}></p>
    </div>

  ); 
}