import './App.css';
import OpenWeatherAjax from './components/OpenWeatherAjax';
import OpenWeatherAxios from './components/OpenWeatherAxios';
import TestAxios from './components/TestAxios';

function App() {
  return (
    <div className="App">
      <OpenWeatherAjax/>
      <hr></hr>
      <OpenWeatherAxios/>
      <hr></hr>
      <TestAxios/>
    </div>
  );
}

export default App;
