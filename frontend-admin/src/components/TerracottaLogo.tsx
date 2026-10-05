import React from 'react';

interface TerracottaLogoProps {
  size?: number;
  className?: string;
}

export const TerracottaLogo: React.FC<TerracottaLogoProps> = ({ size = 32, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 12-ray burst matching the uploaded user icon */}
      <g stroke="#E07A5F" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <line x1="50" y1="12" x2="50" y2="88" />
        <line x1="12" y1="50" x2="88" y2="50" />
        <line x1="23" y1="23" x2="77" y2="77" />
        <line x1="23" y1="77" x2="77" y2="23" />
        <line x1="16" y1="36" x2="84" y2="64" />
        <line x1="36" y1="16" x2="64" y2="84" />
        <line x1="16" y1="64" x2="84" y2="36" />
        <line x1="36" y1="84" x2="64" y2="16" />
      </g>
    </svg>
  );
};
