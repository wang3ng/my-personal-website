import React from 'react';
import Introduction from './Introduction';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import NavigationBar from './NavigationBar';
import './styles.css';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <header className="hero" id="introduction">
        <div className="container">
          <h1>Xuyang (William) Wang</h1>
          <Introduction />
        </div>
      </header>
      <main>
        <section id="education" className="section section-white">
          <div className="container">
            <Education />
          </div>
        </section>
        <section id="experience" className="section section-gray">
          <div className="container">
            <Experience />
          </div>
        </section>
        <section id="projects" className="section section-white">
          <div className="container">
            <Projects />
          </div>
        </section>
        <section id="skills" className="section section-gray">
          <div className="container">
            <Skills />
          </div>
        </section>
        <section id="resume" className="section section-white">
          <div className="container">
            <Resume />
          </div>
        </section>
        <section id="contact" className="section section-gray">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Xuyang Wang. Built with React.</p>
      </footer>
    </div>
  );
};

export default App;
