import React, { useState } from 'react';
import RadialMenu from './components/RadialMenu';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('home'); // Default section is 'home'

  // Function to handle navigation from the Radial Menu
  const handleNavigate = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      <RadialMenu onNavigate={handleNavigate} />

      {/* Render sections based on the currentSection state */}
      {currentSection === 'home' && <Home onNavigate={handleNavigate} />} {/* Pass onNavigate */}
      {currentSection === 'about' && <About />}
      {currentSection === 'projects' && <Projects />}
      {currentSection === 'contact' && <Contact />}
    </div>
  );
}

export default App;
