//렌더링이 안바뀌는 이유
//state 변수를 바꿔도 새로 렌더링 될때 매번 다시 hello가 저장되기 때문에
//렌더링이 발생해도 바뀌지 않는다.
//그리고 리액트는 컴포넌트의 리턴 값을 보고 비교해서 렌더링을 실행하는데
//매번 렌더링이 발생될 때 마다 함수가 매번 새롭게 실행되기 때문에
//아무리 state변수를 변경해도 hello에서 바뀌지 않는 것이다.
export default function NoStateComponent() {
  let state = 'hello';

  const okClick = () => {
    state = '안녕하세요';
    console.log(state);
  }

  return (
  <div>
    <h1>{state}</h1>
    <button onClick={okClick}>클릭</button>
  </div>);
}