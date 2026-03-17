
import React from 'react';
import Header from './components/Header';
import NicheSearch from './components/NicheSearch';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <NicheSearch />
      </main>
      <Footer />
    </div>
  );
};

export default App;
