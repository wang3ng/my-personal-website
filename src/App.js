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
      <main className="container">
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Xuyang Wang. Built with React.</p>
      </footer>
    </div>
  );
};

export default App;
