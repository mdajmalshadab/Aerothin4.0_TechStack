import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from '../Page/Home/home';
import Templates from '../Page/Page1/Container/templates/templates';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Routes>
          <Route path='/templates' element={<Templates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
