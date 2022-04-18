import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages'
import SigninPage from './pages/signin';
import ProjectsPage from './pages/projects';
import ResourcesPage from './pages/resources';
import DatasetsPage from './pages/datasets';
import AboutPage from './pages/about';
import SignUpPage from './pages/signUp';
import NotFoundPage from './pages/notfound';
import ProjectPage from './pages/project';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='signin' element={<SigninPage/>} />
        <Route path='signup' element={<SignUpPage/>} />
        <Route path='projects' element={<ProjectsPage/>} />
        <Route path='project/:_id' element={<ProjectPage/>} />
        <Route path='resources' element={<ResourcesPage/>} />
        <Route path='datasets' element={<DatasetsPage/>} />
        <Route path='about' element={<AboutPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
