
import React from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface WelcomeScreenProps {
  onStart: () => void;
  error?: string | null;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, error }) => {
  return (
    <Card>
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 mb-4">
          Gemini MBTI 성격 테스트
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Gemini AI가 당신의 성격 유형을 분석해 드립니다.
          <br />
          몇 가지 질문에 솔직하게 답하고 자신에 대해 더 깊이 알아보세요.
        </p>
        {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                <p className="font-bold">오류 발생</p>
                <p>{error}</p>
            </div>
        )}
        <Button onClick={onStart} size="large">
          검사 시작하기
        </Button>
      </div>
    </Card>
  );
};

export default WelcomeScreen;
