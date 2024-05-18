import React from 'react';

const About = () => (
  <section id="about" className="min-h-screen p-8 bg-white dark:bg-gray-900 dark:text-white flex flex-col justify-center items-center text-center">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <img 
      src="https://pbs.twimg.com/profile_images/1571050300416610305/rzkHwyY0_400x400.jpg" 
      alt="Profile" 
      className="w-32 h-32 rounded-full mb-4"
    />
    <p className="text-gray-700 dark:text-gray-300">I'm a 2nd-year BSc IT student with a passion for programming, chess, anime, and Linux.</p>
  </section>
);

export default About;