import './App.css';
import OpenWeatherAjax from './components/OpenWeatherAjax';
import OpenWeatherAxios from './components/OpenWeatherAxios';

function App() {
  return (
    <div className="App">
      <OpenWeatherAjax/>
      <hr></hr>
      <OpenWeatherAxios/>
    </div>
  );
}

export default App;
