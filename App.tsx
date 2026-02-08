import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roster from './components/Roster';
import Schedule from './components/Schedule';
import Stats from './components/Stats';
import RecapGenerator from './components/RecapGenerator';
import Footer from './components/Footer';
import { Tab } from './types';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    switch (currentTab) {
      case Tab.HOME:
        return (
          <div className="animate-fade-in">
             <Hero onCtaClick={() => setCurrentTab(Tab.ROSTER)} />
             
             {/* Highlights / Quick Links Bento Grid for Home */}
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div 
                    onClick={() => setCurrentTab(Tab.SCHEDULE)}
                    className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                    <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest">Next Match</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-green-800 transition-colors">vs. De La Salle</h3>
                    <p className="text-gray-500 mt-1">Friday, 7:00 PM</p>
                </div>

                <div 
                     onClick={() => setCurrentTab(Tab.STATS)}
                     className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                    <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest">Top Performer</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-yellow-600 transition-colors">Marcus Sterling</h3>
                    <p className="text-gray-500 mt-1">320 Yds, 3 TDs last game</p>
                </div>

                <div 
                    onClick={() => setCurrentTab(Tab.PRESS_ROOM)}
                    className="group bg-green-900 p-8 rounded-3xl shadow-sm cursor-pointer hover:bg-green-800 transition-colors duration-300 relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <span className="text-green-300 font-semibold text-xs uppercase tracking-widest">Admin Tools</span>
                        <h3 className="text-2xl font-bold text-white mt-2">Press Room AI</h3>
                        <p className="text-green-100/70 mt-1">Generate Recaps &rarr;</p>
                    </div>
                </div>
             </div>
          </div>
        );
      case Tab.ROSTER:
        return <Roster />;
      case Tab.SCHEDULE:
        return <Schedule />;
      case Tab.STATS:
        return <Stats />;
      case Tab.PRESS_ROOM:
        return <RecapGenerator />;
      default:
        return <Hero onCtaClick={() => setCurrentTab(Tab.ROSTER)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentTab={currentTab} onTabChange={setCurrentTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;