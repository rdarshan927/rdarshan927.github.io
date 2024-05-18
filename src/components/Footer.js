import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; {new Date().getFullYear()} Darshan. All rights reserved.</p>
    <div className="flex justify-center mt-4">
      <a href="https://github.com/rdarshan927" className="mx-2">GitHub</a>
      <a href="https://linkedin.com/in/rdarshan927" className="mx-2">LinkedIn</a>
      <a href="mailto:darshanronline@gmail.com" className="mx-2">Email</a>
    </div>
  </footer>
);

export default Footer;
