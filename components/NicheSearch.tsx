
import React, { useState } from 'react';

const SearchIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const NicheSearch: React.FC = () => {
  const [niche, setNiche] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (niche.trim() === '') {
      setError('Please enter a niche to search for.');
      return;
    }
    setError('');

    const searchTerm = encodeURIComponent(`${niche.trim()} t-shirt`);
    const amazonUrl = `https://www.amazon.com/s?k=${searchTerm}&i=fashion-novelty&page=3`;

    window.open(amazonUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-2xl text-center">
        <div className="bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-lg">
            <h2 className="text-2xl font-semibold mb-2 text-gray-100">Find Your Next Bestseller</h2>
            <p className="text-gray-400 mb-6">Enter a niche to search for t-shirts on page 3 of Amazon's "Novelty & More" category.</p>
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    value={niche}
                    onChange={(e) => {
                        setNiche(e.target.value);
                        if (error) setError('');
                    }}
                    placeholder="e.g., tacos, vintage cars, reading..."
                    className="flex-grow w-full px-5 py-3 text-lg bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                />
                <button
                    type="submit"
                    className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-105"
                >
                    <SearchIcon />
                    Search Amazon
                </button>
            </form>
            {error && <p className="mt-4 text-red-400">{error}</p>}
        </div>
         <div className="mt-8 text-sm text-gray-500">
            <p><span className="font-bold">Why Page 3?</span> Searching deeper helps uncover less saturated designs and hidden gems.</p>
            <p className="mt-1"><span className="font-bold">Category:</span> We automatically target "Apparel/Novelty and More" for you.</p>
        </div>
    </div>
  );
};

export default NicheSearch;
