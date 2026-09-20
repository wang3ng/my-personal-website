import React from 'react';

const Introduction = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/xuyang-wang-420722213/';
  const githubUrl = 'https://github.com/wang3ng';

  return (
    <div className="intro-content">
      <p className="tagline">
        Applied AI &amp; Robotics Engineer
      </p>
      <p>
        I'm a Master's student in Robotics (Mechanical Engineering) at{' '}
        <strong>Johns Hopkins University</strong>, with a B.S. in Computer
        Science &amp; Data Science from <strong>New York University</strong>.
        I build ROS/C++ teleoperation systems, Gymnasium RL benchmarks, and
        Python pipelines that integrate models into reproducible robot-learning
        workflows.
      </p>
      <p>
        Currently seeking AI/ML Engineer, Robotics Engineer, and Software
        Engineer internships &mdash; open to relocation.
      </p>
      <div className="button-row">
        <a
          className="button-link"
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
        <a
          className="button-link secondary"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Introduction;
