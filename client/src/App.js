import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages'
import Projects from './pages/projects'
import Resources from './pages/resources'
import Datasets from './pages/datasets'
import About from './pages/about'
import SigninPage from './pages/signin';
import ProjectsPage from './pages/projects';
import ResourcesPage from './pages/resources';
import DatasetsPage from './pages/datasets';
import AboutPage from './pages/about';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='sign-in' element={<SigninPage/>} />
        <Route path='projects' element={<ProjectsPage/>} />
        <Route path='resources' element={<ResourcesPage/>} />
        <Route path='datasets' element={<DatasetsPage/>} />
        <Route path='about' element={<AboutPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
