import React from 'react';

const navItems = [
  { id: 'introduction', label: 'Bio' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const NavigationBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation-bar">
      <div className="nav-brand" onClick={() => scrollToSection('introduction')}>
        William Wang
      </div>
      <div className="nav-links">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => scrollToSection(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
