
import React, { useState, useMemo } from 'react';
import { Answer, Question } from '../types';
import { QUESTIONS } from '../constants';
import ProgressBar from './ProgressBar';
import Card from './common/Card';

interface QuizScreenProps {
  onComplete: (answers: Answer[]) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [fade, setFade] = useState(true);

  const currentQuestion = useMemo(() => QUESTIONS[currentQuestionIndex], [currentQuestionIndex]);

  const handleAnswer = (question: Question, value: Answer['value']) => {
    const newAnswer: Answer = {
      questionId: question.id,
      value: value,
      dimension: question.dimension,
    };
    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);
    setFade(false);

    setTimeout(() => {
        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setFade(true);
        } else {
            onComplete(newAnswers);
        }
    }, 400);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <ProgressBar current={currentQuestionIndex + 1} total={QUESTIONS.length} />
      <Card>
        <div className={`p-8 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">
            {currentQuestion.text}
          </h2>
          <div className="space-y-4">
            <button
              onClick={() => handleAnswer(currentQuestion, currentQuestion.optionA.value)}
              className="w-full text-left p-4 bg-white border-2 border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <p className="text-lg text-gray-800">{currentQuestion.optionA.text}</p>
            </button>
            <button
              onClick={() => handleAnswer(currentQuestion, currentQuestion.optionB.value)}
              className="w-full text-left p-4 bg-white border-2 border-gray-200 rounded-lg hover:bg-cyan-50 hover:border-cyan-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <p className="text-lg text-gray-800">{currentQuestion.optionB.text}</p>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuizScreen;
