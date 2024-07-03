import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <hr/>
      <Routes>
        <Route path="/" element={<Home/>} />        
      </Routes>
    </Router>
  );
}

export default App;
