import React from 'react';

const Projects = () => (
  <section id="projects" className="min-h-screen p-8 bg-white dark:bg-gray-900 dark:text-white flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-100 dark:bg-gray-700 p-4">
        <h3 className="text-2xl font-bold">Project Title</h3>
        <p className="text-gray-700 dark:text-gray-300">pending to add in here ...</p>
        <a href="https://github.com/yourusername/project" className="text-blue-500">View on GitHub</a>
      </div>
      {/* Add more projects here */}
    </div>
  </section>
);

export default Projects;
