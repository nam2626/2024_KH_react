import React, { useState } from 'react';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';
import User from './components/User';
function App() {
  const [id, setId] = useState('admin');
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/content">Content</Link></li>
            <li><Link to={"/user/"+id}>User</Link></li>
          </ul>
        </nav>
        <hr></hr>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/content' element={<Content/>}/>
          <Route path='/user/:id' element={<User/>}/>
        </Routes>
        <hr></hr>
      </div>
    </Router>
  );
}

export default App;
