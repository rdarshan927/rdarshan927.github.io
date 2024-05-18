import React from 'react';

const Header = ({ toggleTheme, isDarkMode }) => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl">Darshan's Portfolio</h1>
      <nav>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="mr-4">About</a>
        <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="mr-4">Skills</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="mr-4">Projects</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
        <button 
          onClick={toggleTheme}
          className="bg-gray-600 p-2 rounded ml-4"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
