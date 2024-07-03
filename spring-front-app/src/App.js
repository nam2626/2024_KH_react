import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Router>
      
      <hr/>
      <Routes>
        <Route path="/" element={<Home/>} />        
      </Routes>
    </Router>
  );
}

export default App;
