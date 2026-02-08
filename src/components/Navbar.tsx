import React from 'react';
import { Tab } from '../types';

interface NavbarProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentTab, onTabChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onTabChange(Tab.HOME)}
          >
            <img 
              src="/logo.png" 
              alt="Saint Jude Catholic School Logo" 
              className="h-10 w-auto mr-3 group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-semibold text-lg tracking-tight text-gray-900">
              Saint Jude <span className="text-green-700 font-normal">Green Knights</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-1">
            {Object.values(Tab).filter(tab => tab !== Tab.PRESS_ROOM).map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentTab === tab 
                    ? 'bg-green-900 text-white shadow-lg shadow-green-900/20' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0) + tab.slice(1).toLowerCase()}
              </button>
            ))}
          </div>

          <div className="md:hidden">
             {/* Mobile simple menu would go here */}
             <button className="text-gray-500 p-2">Menu</button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Bar (Simplified) */}
      <div className="md:hidden flex justify-around border-t border-gray-100 bg-white/90 backdrop-blur pb-safe">
        {Object.values(Tab).filter(tab => tab !== Tab.PRESS_ROOM).map((tab) => (
            <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`flex-1 py-3 text-[10px] uppercase tracking-wider font-semibold ${
                currentTab === tab ? 'text-green-800' : 'text-gray-400'
            }`}
            >
            {tab}
            </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;