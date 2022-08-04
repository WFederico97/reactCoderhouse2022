import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Users from './Pages/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Users' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
