import React from 'react';

const Resume = () => {
  const resumePdfUrl = process.env.PUBLIC_URL + '/William_Resume.pdf';
  return (
    <div className="card resume-card">
      <h2>Resume</h2>
      <div className="embed-container">
        <embed src={resumePdfUrl} type="application/pdf" width="100%" height="600px" />
      </div>
      <p>
        <a className="button-link" href={resumePdfUrl} download>
          Download Resume (PDF)
        </a>
      </p>
    </div>
  );
};

export default Resume;