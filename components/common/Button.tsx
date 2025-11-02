
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'normal' | 'large';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'normal', ...props }) => {
  const sizeClasses = size === 'large' 
    ? 'px-8 py-4 text-xl font-bold'
    : 'px-6 py-2 text-lg font-semibold';
  
  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses}
        text-white bg-gradient-to-r from-indigo-500 to-cyan-500 
        rounded-full shadow-md 
        hover:scale-105 hover:shadow-lg 
        transform transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-4 focus:ring-indigo-300
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
