import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-purple-500 dark:from-gray-800 dark:to-black text-white dark:text-gray-200'>
      <div className='px-32 text-center'>
      <h1 className='text-8xl font-extrabold mb-8 font-[Montserrat]'>
        <span className='text-yellow-500 dark:text-red-500 '>Code</span>Craft
      </h1>
      <p className='text-xl'>Experience fluid coding with our lightning-fast editor, real-time error checking, and intuitive auto-completion.
      Whether you're a Python guru, a JavaScript enthusiast, or a C++ expert, we've got you covered. Dive into a diverse set of languages and frameworks.
      </p>
      </div>
    </div>
  );
};

export default Home;
