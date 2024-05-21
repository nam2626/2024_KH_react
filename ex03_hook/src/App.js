import CountComponent from "./components/CountComponent";
import NoStateComponent from "./components/NoStateComponent";
import StateComponent from "./components/StateComponent";
import './App.css';
import ListComponent from "./components/ListComponent";
import ColorToggle from "./components/ColorToggle";
import RefComponent from "./components/RefComponent";
import RangeComponent from "./components/RangeComponent";
import ColorPicker from "./components/ColorPicker";
import LoginForm from "./components/LoginForm";
import Effect from "./components/Effect";
import MemoEx from "./components/MemoEx";
import CallBakEx from "./components/CallBackEx";

function App() {
  return (
    <div>
      {/* <NoStateComponent/>
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
      <hr></hr>
      <RangeComponent/>
      <hr></hr>
      <ColorPicker/>
      <hr></hr>
      <LoginForm/>
      <hr></hr>
      <Effect/>
      <hr/> 
      <MemoEx/>*/}
      <CallBakEx/>
    </div>
  );
}

export default App;
