import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ProjectJourney from './components/ProjectJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Use effect to handle scroll spy for active navigation links (optional, but nice for UX)
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <ProjectJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
