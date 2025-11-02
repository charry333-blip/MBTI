
export enum AppState {
  WELCOME,
  QUIZ,
  LOADING,
  RESULT,
}

export enum MBTI_Dimension {
  IE = 'IE', // Introversion / Extroversion
  SN = 'SN', // Sensing / Intuition
  TF = 'TF', // Thinking / Feeling
  JP = 'JP', // Judging / Perceiving
}

export interface Question {
  id: number;
  text: string;
  dimension: MBTI_Dimension;
  optionA: {
    text: string;
    value: 'I' | 'S' | 'T' | 'J';
  };
  optionB: {
    text: string;
    value: 'E' | 'N' | 'F' | 'P';
  };
}

export interface Answer {
  questionId: number;
  value: 'I' | 'E' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  dimension: MBTI_Dimension;
}

export interface MBTIResult {
  type: string;
  summary: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
}
