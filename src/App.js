import React from 'react'
import Navbar from './components/navbar';
import Intro from './components/intro';
import Skills from './components/skills';
import Works from './components/work';
import Clients from './components/clients';
import Footer from './components/footer';



function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
