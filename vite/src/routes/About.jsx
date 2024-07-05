import React from 'react';
import profilePhoto from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="py-16 px-8 bg-secondary text-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2">
          <img src={profilePhoto} alt="Profile" className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 mb-8 md:mb-0 shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">I am a passionate developer with experience in building dynamic web applications using modern technologies. I love coding and constantly seek to improve my skills and learn new things. Let's work together to create something amazing!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
