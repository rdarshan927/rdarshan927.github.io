import React from 'react';

const Skills = () => (
  <section id="skills" className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800 dark:text-white flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-4">Skills</h2>
    <ul className="flex flex-wrap justify-center">
      <li className="w-full sm:w-1/2 md:w-1/3 p-2">JavaScript</li>
      <li className="w-full sm:w-1/2 md:w-1/3 p-2">React</li>
      <li className="w-full sm:w-1/2 md:w-1/3 p-2">Node.js</li>
      <li className="w-full sm:w-1/2 md:w-1/3 p-2">Linux</li>
      <li className="w-full sm:w-1/2 md:w-1/3 p-2">CSS</li>
      <li className="w-full sm:w-1/2 md:w-1/3 p-2">Git</li>
    </ul>
  </section>
);

export default Skills;
