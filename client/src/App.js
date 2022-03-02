import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages'
import Projects from './pages/projects'
import Resources from './pages/resources'
import Datasets from './pages/datasets'
import About from './pages/about'

const App = () => {
  return (
    <Router>
      <Home />
      {/*
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/datasets' element={<Datasets/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      */}
    </Router>

  );
}

export default App;
