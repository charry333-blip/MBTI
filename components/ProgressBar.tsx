
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full max-w-2xl mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-indigo-700">진행도</span>
            <span className="text-sm font-medium text-indigo-700">{current} / {total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
  );
};

export default ProgressBar;
