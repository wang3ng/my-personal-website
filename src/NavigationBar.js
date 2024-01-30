import React from 'react';

const NavigationBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navigation-bar">
      <button onClick={() => scrollToSection('introduction')}>Bio</button>
      <button onClick={() => scrollToSection('resume')}>Resume</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
    </div>
  );
};

export default NavigationBar;