import {useRef} from 'react';

/* 
    fetch("API 주소",{
      method:"POST",
      body : JSON.stringfy({
        id : id.current.value,
        파라미터명 : 파라미터값,
        ...
      })
    }).then((reponse) => reponse.json())
    .then((result) => { 받아온 데이터 처리 영역 })
    .catch((error) => { 에러 처리 영역 });

*/
export default function OpenWeatherAjax() {
  const result = useRef();
  const onWeaterHandler = () => {
    let url = 'https://api.openweathermap.org/data/2.5/weather?id=1835847&appid=APP_KEY';

    fetch(url).then((response) => {
        //호출 결과를 받는 부분
        if (!response.ok) {
            throw new Error(`HTTP error : ${response.stateus}`);
        }
        return response.json();
    }).then((json) => {
        //데이터를 받아서 화면에 출력 처리하는 부분
        console.log(json);
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
    });
  }
  return (
    <div>
      <button onClick={onWeaterHandler}>날씨 조회 - Ajax</button>
      <hr></hr>
      <p ref={result}></p>
    </div>

  ); 
}