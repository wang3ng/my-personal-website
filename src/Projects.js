import React from 'react';

const projects = [
  {
    title: 'Move-Aim-Shoot RL Benchmark',
    role: 'Lead Developer',
    dates: 'Jan 2025 – Present',
    bullets: [
      'Designed a reproducible 2D RL benchmark with 12 maps, self-play, and partial observability (laser scans).',
      'Built Gymnasium environments and shared training/evaluation APIs for hybrid and continuous actions.',
      'Implemented feedforward PPO, recurrent PPO with privileged critic (CTDE), asymmetric distillation, and SAC.',
      'Automated fixed-teacher evaluation with multi-seed mean ± 95% CI and robustness tests (~80-93% win rate in ~5k steps).',
    ],
  },
  {
    title: 'CIS II: EyeRobot and Eye Snake Teleoperation',
    role: 'Software Integration Lead',
    dates: 'Jan 2026 – Present',
    bullets: [
      'Architected ROS/cisst control for unified EyeRobot (SHER 2.1) and Eye Snake (I2RIS) teleoperation under one operator loop.',
      'Implemented C++ teleoperation in robotTask.cpp with Geomagic/Phantom ROS and Maxon EPOS packages.',
      'Delivered SHER_I2RIS_teleoperate launch workflows; fixed mapping, stability, joint limits, and build integration issues.',
    ],
  },
  {
    title: 'Multitask RL with OOD Monitoring',
    role: 'ML Engineer',
    dates: 'Sep 2023 – Dec 2023',
    bullets: [
      'Detected OOD policy drift during fine-tuning; defined distance metrics/thresholds and built training visualization tooling.',
    ],
  },
];

const Projects = () => {
  return (
    <div className="card">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="timeline-header">
              <h3>{project.title}</h3>
              <span className="timeline-dates">{project.dates}</span>
            </div>
            <p className="timeline-subtitle">{project.role}</p>
            <ul>
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
