import CountComponent from "./components/CountComponent";
import NoStateComponent from "./components/NoStateComponent";
import StateComponent from "./components/StateComponent";
import './App.css';
import ListComponent from "./components/ListComponent";
import ColorToggle from "./components/ColorToggle";
import RefComponent from "./components/RefComponent";
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
      <hr></hr>
      <ColorToggle/>
      <hr></hr>
      <RefComponent/>
    </div>
  );
}

export default App;
