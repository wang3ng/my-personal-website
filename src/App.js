import React from 'react';
import Introduction from './Introduction';
import Resume from './Resume';
import Contact from './Contact';
import NavigationBar from './NavigationBar';
import './styles.css';

const App = () => {
  return (
    <div className="container">
      <NavigationBar />
      <div className="container">
        <section id="introduction">
          <h1>Xuyang (William Wang)</h1>
          <Introduction />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;