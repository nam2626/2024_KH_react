import CountComponent from "./components/CountComponent";
import NoStateComponent from "./components/NoStateComponent";
import StateComponent from "./components/StateComponent";
import './App.css';
import ListComponent from "./components/ListComponent";
function App() {
  return (
    <div>
      <NoStateComponent/>
      <hr></hr>
      <StateComponent />
      <hr></hr>
      <CountComponent/>
      <hr></hr>
      <ListComponent />
    </div>
  );
}

export default App;
