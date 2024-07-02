import { useRef } from 'react';
import axios from 'axios';
export default function TestAxios() {
  const result = useRef();

  const onCulturalHandler = () => {
    var url = 'https://data.gb.go.kr/opendata/service/rest/nationalCulturalAssets/getRecordList';
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'hpOVfNem4MVro1QdBZTMTq%2FMZs%2B8yylSvxNQlqPiEQec%2Bo99WRRbIvrVqLltto5W0TmluoxR7uQHpHFNZ146qg%3D%3D'; 
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); 
    queryParams += '&' + encodeURIComponent('cate') + '=' + encodeURIComponent(''); 
    console.log(url+queryParams);
    axios.get(url+queryParams).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log('finally 영역');
    });
  };

  return (
    <div>
      <input type='text' id='txt' />
      <button onClick={onCulturalHandler}>검색하기</button>
      <p ref={result}></p>
    </div>
  );
}