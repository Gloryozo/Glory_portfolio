import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main greeting card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-12 mb-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-purple-500 mr-3 animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Hello, World!
            </h1>
            <Sparkles className="w-8 h-8 text-purple-500 ml-3 animate-pulse" />
          </div>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Welcome to your beautiful React application built with modern technologies
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-200 transition-colors">
            ⚛️ React 18
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200 hover:bg-purple-200 transition-colors">
            🏷️ TypeScript
          </span>
          <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium border border-cyan-200 hover:bg-cyan-200 transition-colors">
            🎨 Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200 hover:bg-green-200 transition-colors">
            ⚡ Vite
          </span>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-300 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-60 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}

export default App;