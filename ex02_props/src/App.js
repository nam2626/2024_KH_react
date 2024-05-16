import ButtonOK from "./components/ButtonOK";
import CheckComp from "./components/CheckComp";

function App() {
  return (
    <div>
      <ButtonOK name='홍길동' age={21}/>
      <hr></hr>
      <ButtonOK name='김철수' age={20}/>
      <hr></hr>
      <CheckComp/>
    </div>
  );
}

export default App;
