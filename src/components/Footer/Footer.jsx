import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-400 dark:bg-slate-800 text-white text-gray-700 p-2">
      <div className="container mx-auto">
        <p className="text-center">&copy; {new Date().getFullYear()} Rahul Saini</p>
        <p className="text-center">CodeCraft - Your Web and Language Code Editor</p>
      </div>
    </footer>
  );
};

export default Footer;
