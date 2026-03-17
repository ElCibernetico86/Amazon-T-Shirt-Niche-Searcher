
import React from 'react';

const TShirtIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" transform="translate(-4, -4) scale(1.5)" filter="url(#f1)" opacity="0"/>
         <path d="M18.364 5.636l-1.414-1.414a2 2 0 00-2.828 0L12 6.364l-2.122-2.122a2 2 0 00-2.828 0l-1.414 1.414m12.728 0a2 2 0 010 2.828L12 17.636l-4.242-4.242a2 2 0 010-2.828" opacity="0.1"/>
        <path d="M9 9l6-6m-6 6l-6 6" opacity="0.1"/>
        <path d="M15.536 8.464a5 5 0 010 7.072L12 19.072l-3.536-3.536a5 5 0 017.072-7.072v0z" strokeWidth="1.5" stroke="rgba(100,200,255,0.5)"/>
        <path d="M8.1 19.9a1 1 0 01-.7-.3l-5-5a1 1 0 011.4-1.4l5 5a1 1 0 01-.7 1.7z" opacity="0.1"/>
        <path d="M15.9 19.9a1 1 0 01-.7-.3l-5-5a1 1 0 111.4-1.4l5 5a1 1 0 01-.7 1.7z" opacity="0.1"/>
        <path d="M3 10V4a1 1 0 011-1h16a1 1 0 011 1v6" stroke="currentColor" strokeWidth="1"/>
        <path d="M9.5 3.5a2.5 2.5 0 00-5 0" stroke="currentColor" strokeWidth="1"/>
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 text-center border-b border-gray-700/50 shadow-lg bg-gray-900/50 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-3">
        <TShirtIcon />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          T-Shirt Niche Finder
        </h1>
      </div>
      <p className="mt-2 text-md text-gray-400">
        Your shortcut to Amazon's "Novelty & More" t-shirt category.
      </p>
    </header>
  );
};

export default Header;
