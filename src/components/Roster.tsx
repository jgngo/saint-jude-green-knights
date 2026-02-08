import React from 'react';
import { ROSTER } from '../constants';

const Roster: React.FC = () => {
  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">The Squad.</h2>
            <p className="mt-2 text-lg text-gray-500 font-light">Meet the 2024 Varsity Team.</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
            {ROSTER.length} Players Listed
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ROSTER.map((player) => (
          <div 
            key={player.id} 
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-gray-100"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
              <img 
                src={player.imageUrl} 
                alt={player.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                #{player.number}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-medium">{player.height} • {player.weight}</p>
              </div>
            </div>
            <div className="p-6">
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">{player.position}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{player.name}</h3>
                <p className="text-sm text-gray-500">{player.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;