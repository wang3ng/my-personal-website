import React from 'react';

const Introduction = () => {
    const linkedInUrl = 'https://www.linkedin.com/in/xuyang-wang-420722213/';
    return (
        <div>
        <h2>Bio</h2>
        <p>I'm a undergraduate student at New York University, majoring in computer science joint with Data Science. Minor in game design</p>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
        LinkedIn Profile
        </a>
        </div>
    );
};

export default Introduction;