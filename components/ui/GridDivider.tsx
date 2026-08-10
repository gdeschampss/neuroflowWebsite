'use client';

import React from 'react';

interface GridDividerProps {
  label?: string;
  className?: string;
}

export const GridDivider: React.FC<GridDividerProps> = ({ label, className = '' }) => {
  return (
    <div className={`relative w-full border-t border-slate-200/80 my-0 ${className}`}>
      {/* Plus/Crosshair markers on left and right borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-0">
        <div className="absolute -top-[5px] left-4 text-slate-300 text-xs font-mono select-none pointer-events-none">+</div>
        <div className="absolute -top-[5px] right-4 text-slate-300 text-xs font-mono select-none pointer-events-none">+</div>
      </div>
      {label && (
        <div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-3 py-0.5 border border-slate-200/80 rounded-full text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          {label}
        </div>
      )}
    </div>
  );
};
