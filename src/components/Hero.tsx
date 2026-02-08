import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <div className="relative overflow-hidden bg-black text-white rounded-3xl mx-4 mt-6 shadow-2xl h-[70vh] md:h-[80vh]">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[20s] hover:scale-105"
            style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=10")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col items-center text-center">
            <span className="text-green-400 font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 animate-fade-in-up">
                Varsity 2024-25
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none animate-fade-in-up delay-100">
                Titanium <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500">
                    Determination.
                </span>
            </h1>
            <p className="text-gray-300 max-w-xl text-lg md:text-xl mb-8 font-light animate-fade-in-up delay-200">
                The Saint Jude Green Knights are back. Bigger, faster, and stronger than ever before.
            </p>
            <button 
                onClick={onCtaClick}
                className="group flex items-center bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-green-400 hover:text-green-950 transition-colors duration-300 animate-fade-in-up delay-300"
            >
                View Roster <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    </div>
  );
};

export default Hero;