import {Link, Route, Router, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/content">Content</Link></li>
          </ul>
        </nav>
        <hr></hr>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/content' element={<Content/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
