import React from 'react';

interface SerifAccentProps {
  children: React.ReactNode;
  className?: string;
  colorHex?: string;
}

export const SerifAccent: React.FC<SerifAccentProps> = ({
  children,
  className = '',
  colorHex = '#03AD97',
}) => {
  return (
    <span
      className={`font-serif-accent text-emerald-600 font-normal underline decoration-[#03AD97]/30 underline-offset-4 ${className}`}
      style={{ color: colorHex }}
    >
      {children}
    </span>
  );
};
