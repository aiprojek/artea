import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Outlets from './components/Outlets';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-artea-cream text-artea-dark font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Outlets />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
