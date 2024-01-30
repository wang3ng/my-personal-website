import React from 'react';
import Introduction from './Introduction';
import Resume from './Resume';
import Contact from './Contact';
import './styles.css'; // Import the styles

const App = () => {
  return (
    <div className="container">
      <h1>我的个人网站</h1>
      <Introduction />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;