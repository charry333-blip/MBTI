
import React from 'react';
import { MBTIResult } from '../types';
import Card from './common/Card';
import Button from './common/Button';

interface ResultScreenProps {
  result: MBTIResult;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  return (
    <Card>
      <div className="p-8">
        <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-2">당신의 성격 유형은</p>
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
            {result.type}
            </h1>
            <p className="text-xl font-semibold text-gray-700 mt-3">{result.summary}</p>
        </div>
        
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2 mb-3">유형 설명</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{result.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xl font-bold text-green-600 border-b-2 border-green-200 pb-2 mb-3">강점</h3>
                    <ul className="space-y-2 list-inside">
                        {result.strengths.map((strength, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="text-gray-600">{strength}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-red-600 border-b-2 border-red-200 pb-2 mb-3">보완점</h3>
                    <ul className="space-y-2 list-inside">
                        {result.weaknesses.map((weakness, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="text-gray-600">{weakness}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="text-center mt-10">
            <Button onClick={onRestart}>
                다시 검사하기
            </Button>
        </div>
      </div>
    </Card>
  );
};

export default ResultScreen;
