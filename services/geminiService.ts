
import { GoogleGenAI, Type } from "@google/genai";
import { Answer, MBTI_Dimension, MBTIResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function getMBTIResult(answers: Answer[]): Promise<MBTIResult> {
  const summary = {
    [MBTI_Dimension.IE]: { I: 0, E: 0 },
    [MBTI_Dimension.SN]: { S: 0, N: 0 },
    [MBTI_Dimension.TF]: { T: 0, F: 0 },
    [MBTI_Dimension.JP]: { J: 0, P: 0 },
  };

  answers.forEach(answer => {
    if (answer.dimension === MBTI_Dimension.IE) {
        summary[MBTI_Dimension.IE][answer.value as 'I' | 'E']++;
    } else if (answer.dimension === MBTI_Dimension.SN) {
        summary[MBTI_Dimension.SN][answer.value as 'S' | 'N']++;
    } else if (answer.dimension === MBTI_Dimension.TF) {
        summary[MBTI_Dimension.TF][answer.value as 'T' | 'F']++;
    } else if (answer.dimension === MBTI_Dimension.JP) {
        summary[MBTI_Dimension.JP][answer.value as 'J' | 'P']++;
    }
  });

  const prompt = `
    당신은 MBTI 심리 분석 전문가입니다. 사용자의 12개 질문에 대한 답변 요약이 아래에 제공됩니다.
    이 데이터를 바탕으로 사용자의 4자리 MBTI 유형을 결정하고, 그에 대한 상세한 분석을 제공해주세요.
    결과는 반드시 아래의 JSON 형식에 맞춰서 한국어로 작성해주세요.

    사용자 답변 요약:
    - 에너지 방향 (I/E): 내향(I) ${summary.IE.I}개, 외향(E) ${summary.IE.E}개
    - 인식 기능 (S/N): 감각(S) ${summary.SN.S}개, 직관(N) ${summary.SN.N}개
    - 판단 기능 (T/F): 사고(T) ${summary.TF.T}개, 감정(F) ${summary.TF.F}개
    - 생활 양식 (J/P): 판단(J) ${summary.JP.J}개, 인식(P) ${summary.JP.P}개

    분석 내용은 긍정적이고 격려하는 톤으로 작성해주세요. 각 강점과 약점은 간결한 문장으로 표현해주세요.
  `;
  
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              type: { type: Type.STRING, description: '분석된 4글자 MBTI 유형 (예: INFP)' },
              summary: { type: Type.STRING, description: '해당 MBTI 유형에 대한 한 문장 요약' },
              description: { type: Type.STRING, description: '해당 유형에 대한 상세한 설명 (2-3 문단)' },
              strengths: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: '해당 유형의 강점 목록'
              },
              weaknesses: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: '해당 유형의 보완점 또는 약점 목록'
              },
            },
            required: ['type', 'summary', 'description', 'strengths', 'weaknesses'],
          },
        },
      });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Error getting MBTI result from Gemini:", error);
    throw new Error("결과를 분석하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
}
