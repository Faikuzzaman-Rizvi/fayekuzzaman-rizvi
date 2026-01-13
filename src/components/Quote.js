import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

const Quote = () => {
  return (
    <section className="relative py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-12 md:p-16 border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300">
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 text-white/10">
            <QuoteIcon size={48} />
          </div>
          
          {/* Quote Content */}
          <div className="relative z-10">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-8 italic">
              "Programming is like a game: bugs are puzzles to solve, new features are levels to unlock, and when the code runs perfectly, that's the ultimate win!"
            </p>
            
            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
              <div className="text-right">
                <p className="text-lg font-bold text-white">Fayekuzzaman Rizvi</p>
                <p className="text-sm text-gray-500">.NET Developer</p>
              </div>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/20"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Quote;