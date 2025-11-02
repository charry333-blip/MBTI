
import React, { useState, useCallback } from 'react';
import { AppState, Answer, MBTIResult } from './types';
import { getMBTIResult } from './services/geminiService';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.WELCOME);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [mbtiResult, setMbtiResult] = useState<MBTIResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => {
    setAppState(AppState.QUIZ);
  };

  const handleQuizComplete = useCallback(async (finalAnswers: Answer[]) => {
    setAnswers(finalAnswers);
    setAppState(AppState.LOADING);
    setError(null);
    try {
      const result = await getMBTIResult(finalAnswers);
      setMbtiResult(result);
      setAppState(AppState.RESULT);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
      setAppState(AppState.WELCOME); // or an error screen
    }
  }, []);

  const handleRestart = () => {
    setAppState(AppState.WELCOME);
    setAnswers([]);
    setMbtiResult(null);
    setError(null);
  };
  
  const renderContent = () => {
    switch (appState) {
      case AppState.QUIZ:
        return <QuizScreen onComplete={handleQuizComplete} />;
      case AppState.LOADING:
        return <LoadingScreen />;
      case AppState.RESULT:
        return mbtiResult ? <ResultScreen result={mbtiResult} onRestart={handleRestart} /> : <LoadingScreen/>;
      case AppState.WELCOME:
      default:
        return <WelcomeScreen onStart={handleStart} error={error} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      <main className="w-full max-w-2xl mx-auto">
       {renderContent()}
      </main>
    </div>
  );
};

export default App;
