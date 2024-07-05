import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
