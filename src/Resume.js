import React from 'react';
const Resume = () => {
    const resumePdfUrl = process.env.PUBLIC_URL + '/Wang\'s Resume.pdf';
  return (
    <div>
      <h2>Resume</h2>
      <embed src={resumePdfUrl} type="application/pdf" width="100%" height="500px" />
      <p>
        <a href={resumePdfUrl} download>
          download resume
        </a>
      </p>
    </div>
  );
};

export default Resume;