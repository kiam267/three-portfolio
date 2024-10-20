import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Project from './sections/Project';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Exprerience from './sections/Exprerience';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Clients />
      <Exprerience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
