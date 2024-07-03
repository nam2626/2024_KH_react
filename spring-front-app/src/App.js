import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Header/>
      <hr/>
      <Routes>
        <Route path="/" element={<Home/>} />        
        <Route path="/register" element={<Register />} />        
      </Routes>
    </Router>
  );
}

export default App;
