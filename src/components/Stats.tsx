import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { SEASON_STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Performance.</h2>
            <p className="mt-2 text-lg text-gray-500 font-light">Season metrics and analysis.</p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Offensive Output Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Points per Game</h3>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={SEASON_STATS}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                        <XAxis 
                            dataKey="game" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fontSize: 12, fill: '#9ca3af'}} 
                            dy={10}
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fontSize: 12, fill: '#9ca3af'}} 
                        />
                        <Tooltip 
                            cursor={{fill: '#f9fafb'}}
                            contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                        />
                        <Bar dataKey="points" fill="#166534" radius={[6, 6, 0, 0]} barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Yardage Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Total Yards</h3>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={SEASON_STATS}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                        <XAxis 
                            dataKey="game" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fontSize: 12, fill: '#9ca3af'}} 
                            dy={10}
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fontSize: 12, fill: '#9ca3af'}} 
                        />
                        <Tooltip 
                            cursor={{fill: '#f9fafb'}}
                            contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                        />
                        <Bar dataKey="yards" fill="#eab308" radius={[6, 6, 0, 0]} barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Key Stat Cards (Bento Grid) */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="bg-green-900 text-white p-6 rounded-3xl flex flex-col justify-between h-40">
                <span className="text-green-300 font-medium text-sm">Record</span>
                <span className="text-5xl font-bold tracking-tighter">2-1</span>
             </div>
             <div className="bg-gray-100 text-gray-900 p-6 rounded-3xl flex flex-col justify-between h-40">
                <span className="text-gray-500 font-medium text-sm">Avg Pts</span>
                <span className="text-5xl font-bold tracking-tighter">24.3</span>
             </div>
             <div className="bg-gray-100 text-gray-900 p-6 rounded-3xl flex flex-col justify-between h-40">
                <span className="text-gray-500 font-medium text-sm">Turnovers</span>
                <span className="text-5xl font-bold tracking-tighter text-green-600">+4</span>
             </div>
             <div className="bg-yellow-400 text-yellow-900 p-6 rounded-3xl flex flex-col justify-between h-40">
                <span className="text-yellow-800 font-medium text-sm">State Rank</span>
                <span className="text-5xl font-bold tracking-tighter">#12</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;