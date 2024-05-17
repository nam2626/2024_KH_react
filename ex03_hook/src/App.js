import CountComponent from "./components/CountComponent";
import NoStateComponent from "./components/NoStateComponent";
import StateComponent from "./components/StateComponent";
import './App.css';
function App() {
  return (
    <div>
      <NoStateComponent/>
      <hr></hr>
      <StateComponent />
      <hr></hr>
      <CountComponent/>
    </div>
  );
}

export default App;
