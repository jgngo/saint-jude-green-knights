import React, { useState } from 'react';
import { generateRecap } from '../services/geminiService';
import { Bot, FileText, Send, Sparkles } from 'lucide-react';

const RecapGenerator: React.FC = () => {
  const [opponent, setOpponent] = useState('');
  const [result, setResult] = useState('Win');
  const [score, setScore] = useState('');
  const [highlights, setHighlights] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedText('');
    const text = await generateRecap(opponent, result, score, highlights);
    setGeneratedText(text);
    setIsLoading(false);
  };

  return (
    <div className="pt-24 pb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
       <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-green-500 to-green-800 rounded-2xl mb-6 shadow-lg">
                <Bot className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Press Room AI.</h2>
            <p className="mt-2 text-lg text-gray-500 font-light">Draft professional game recaps instantly.</p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-gray-400" /> Match Details
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Opponent</label>
                    <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="e.g., Sacred Heart"
                        value={opponent}
                        onChange={(e) => setOpponent(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Result</label>
                        <select 
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all appearance-none"
                            value={result}
                            onChange={(e) => setResult(e.target.value)}
                        >
                            <option>Win</option>
                            <option>Loss</option>
                            <option>Draw</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Final Score</label>
                        <input 
                            type="text" 
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                            placeholder="24-17"
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Key Highlights</label>
                    <textarea 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all h-32 resize-none"
                        placeholder="Sterling threw 2 TDs, defense had 3 sacks..."
                        value={highlights}
                        onChange={(e) => setHighlights(e.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full flex items-center justify-center bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Drafting...
                        </>
                    ) : (
                        <>
                            <Sparkles className="w-5 h-5 mr-2 text-yellow-400" /> Generate Recap
                        </>
                    )}
                </button>
            </form>
        </div>

        {/* Output Area */}
        <div className={`bg-gray-900 text-gray-300 p-8 rounded-3xl shadow-xl flex flex-col ${generatedText ? '' : 'justify-center items-center'}`}>
            {generatedText ? (
                <>
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-800">
                        <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">AI Draft v1.0</span>
                        <button className="text-xs text-gray-500 hover:text-white transition-colors">Copy Text</button>
                    </div>
                    <div className="prose prose-invert prose-p:text-gray-300 prose-p:leading-relaxed">
                        {generatedText.split('\n').map((para, i) => (
                            para.trim() && <p key={i} className="mb-4">{para}</p>
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-center opacity-40">
                    <Sparkles className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                    <p className="text-lg font-light">Ready to create.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default RecapGenerator;