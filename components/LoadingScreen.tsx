
import React from 'react';
import Card from './common/Card';

const LoadingScreen: React.FC = () => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="w-16 h-16 border-4 border-t-4 border-t-indigo-500 border-gray-200 rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">결과를 분석 중입니다...</h2>
        <p className="text-gray-500">Gemini AI가 당신의 성향을 꼼꼼하게 살펴보고 있어요.</p>
      </div>
    </Card>
  );
};

export default LoadingScreen;
