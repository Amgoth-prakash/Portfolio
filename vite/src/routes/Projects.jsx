import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'This is a brief description of project one.',
    image: 'https://cdn.pixabay.com/photo/2013/07/12/18/58/international-154119_640.png',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of project two.',
    image: 'https://cdn.pixabay.com/photo/2020/08/03/10/00/money-5459709_640.png',
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'This is a brief description of project three.',
    image: 'https://cdn.pixabay.com/photo/2018/05/16/19/38/process-3406857_640.jpg',
    link: '#'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 bg-white text-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary p-4 rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="rounded-t-lg w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <a href={project.link} className="text-primary hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
