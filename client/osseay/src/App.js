import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;