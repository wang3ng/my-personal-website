import React from 'react';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'C++', 'C', 'C#', 'SQL'],
  },
  {
    category: 'AI / ML',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Gymnasium',
      'scikit-learn',
      'LLM Prompting',
      'QLoRA Fine-Tuning',
    ],
  },
  {
    category: 'Systems',
    skills: ['ROS / cisst', 'Linux', 'Git', 'Data Pipelines', 'Debugging', 'Visualization'],
  },
];

const Skills = () => {
  return (
    <div className="card">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skills-group" key={group.category}>
            <h3>{group.category}</h3>
            <div className="tag-cloud">
              {group.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
