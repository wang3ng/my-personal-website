import React from 'react';

const experience = [
  {
    company: 'EmotiBot',
    location: 'Shanghai, China',
    role: 'AI Engineering Intern',
    dates: 'Jul 2023 – Aug 2023',
    bullets: [
      'Owned LLM prompt and evaluation workflows for teaching, testing, interviewing, and automated scoring.',
      'Built Python data pipelines to collect, clean, and structure corpora for supervised fine-tuning.',
      'Implemented a QLoRA fine-tuning workflow for customer-service automation and content generation.',
      'Validated end-to-end model behavior through testing and debugging on an iOS learning product.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="card">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline-item" key={job.company}>
            <div className="timeline-header">
              <h3>{job.role}</h3>
              <span className="timeline-dates">{job.dates}</span>
            </div>
            <p className="timeline-subtitle">
              {job.company} · {job.location}
            </p>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
