
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
