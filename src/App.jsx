import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './App.css'
import Projects from './components/Projects';
import Tech from './components/Tech';
import Contact from './components/Contact';
import StarsCanvas from './components/canvas/Stars';

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Projects/>
        <Tech/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    
    </BrowserRouter>
  )
}

export default App
