import React from 'react';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'HTML', level: 'Advanced' },
  { name: 'Lit ', level: 'Advanced' },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-8 bg-white text-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Skill Set</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-secondary p-4 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-lg">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
