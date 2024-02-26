import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import About from './pages/About'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'

const App = () => {
    return (
      <>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="projects" element={<Projects/>} />
         <Route path="experiences" element={<Experiences/>} />
       </Routes>
      </>
    )
}

export default App;