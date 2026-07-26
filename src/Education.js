import React from 'react';

const educationHistory = [
  {
    school: 'Johns Hopkins University',
    location: 'Baltimore, MD',
    degree: 'M.S. Robotics, Mechanical Engineering',
    dates: 'Sep 2025 – May 2027',
  },
  {
    school: 'New York University',
    location: 'New York, NY',
    degree: 'B.S. Computer Science & Data Science',
    dates: 'Sep 2021 – May 2025',
    detail: 'GPA 3.77 / 4.0',
  },
];

const Education = () => {
  return (
    <div className="card">
      <h2>Education</h2>
      <div className="timeline">
        {educationHistory.map((edu) => (
          <div className="timeline-item" key={edu.school}>
            <div className="timeline-header">
              <h3>{edu.school}</h3>
              <span className="timeline-dates">{edu.dates}</span>
            </div>
            <p className="timeline-subtitle">{edu.degree}</p>
            <p className="timeline-meta">
              {edu.location}
              {edu.detail ? ` · ${edu.detail}` : ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
