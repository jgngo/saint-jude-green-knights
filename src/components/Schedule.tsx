import React from 'react';
import { SCHEDULE } from '../constants';
import { Calendar, MapPin, Trophy } from 'lucide-react';

const Schedule: React.FC = () => {
  return (
    <div className="pt-24 pb-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
       <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Season Schedule.</h2>
            <p className="mt-2 text-lg text-gray-500 font-light">Road to the Championship.</p>
        </div>

      <div className="space-y-4">
        {SCHEDULE.map((match) => (
          <div 
            key={match.id} 
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between hover:shadow-md transition-shadow duration-300"
          >
            {/* Date & Time */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/4 mb-4 md:mb-0">
                <div className="flex items-center text-gray-400 mb-1 text-sm font-medium uppercase tracking-wider">
                    <Calendar className="w-4 h-4 mr-2" /> {match.date}
                </div>
                <div className="text-2xl font-semibold text-gray-900">{match.time}</div>
            </div>

            {/* Matchup */}
            <div className="flex-1 flex flex-col md:flex-row items-center justify-center w-full mb-4 md:mb-0">
                <div className="text-right flex-1 hidden md:block">
                    <span className="text-xl font-bold text-gray-900">Green Knights</span>
                </div>
                <div className="px-6 text-gray-300 font-light text-2xl">vs</div>
                <div className="text-left flex-1">
                    <span className="text-xl font-bold text-gray-900">{match.opponent}</span>
                    <div className="md:hidden text-center text-sm text-gray-500 mt-1">Green Knights vs {match.opponent}</div>
                </div>
            </div>

            {/* Location & Result */}
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-end">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" /> {match.location} ({match.isHome ? 'H' : 'A'})
                </div>
                {match.result ? (
                    <div className={`px-4 py-1.5 rounded-full text-sm font-bold flex items-center ${
                        match.result.outcome === 'W' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                        <Trophy className="w-3 h-3 mr-2" />
                        {match.result.outcome} {match.result.us} - {match.result.them}
                    </div>
                ) : (
                    <div className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">
                        Upcoming
                    </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;