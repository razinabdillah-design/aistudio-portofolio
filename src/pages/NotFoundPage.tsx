import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-28 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="inline-flex p-3 rounded-xl bg-[#EBE8DF] text-[#3157D5]">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase text-[#3157D5] tracking-widest">
          404 // Trajectory Missing
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif text-[#15181D]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#697078] leading-relaxed">
          The requested coordinate or experience route does not exist. It may have been relocated or is yet to be explored.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#3157D5] transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/journey"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#15181D] bg-[#EBE8DF] rounded-md hover:bg-[#15181D]/10 transition-colors"
        >
          <span>Explore Journey</span>
        </Link>
      </div>
    </div>
  );
};
