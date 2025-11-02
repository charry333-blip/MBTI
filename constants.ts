
import { Question, MBTI_Dimension } from './types';

export const QUESTIONS: Question[] = [
  // IE Dimension
  {
    id: 1,
    text: '주말에 에너지를 얻는 방법은?',
    dimension: MBTI_Dimension.IE,
    optionA: { text: '집에서 조용히 책을 읽거나 영화를 본다.', value: 'I' },
    optionB: { text: '친구들과 만나거나 새로운 활동에 참여한다.', value: 'E' },
  },
  {
    id: 2,
    text: '새로운 사람들을 만나는 파티에 갔을 때 당신은?',
    dimension: MBTI_Dimension.IE,
    optionA: { text: '소수의 사람들과 깊은 대화를 나누는 것을 선호한다.', value: 'I' },
    optionB: { text: '여러 사람들과 두루 어울리며 대화하는 것을 즐긴다.', value: 'E' },
  },
  {
    id: 3,
    text: '업무를 마친 후, 당신은 주로...',
    dimension: MBTI_Dimension.IE,
    optionA: { text: '혼자만의 시간을 가지며 재충전한다.', value: 'I' },
    optionB: { text: '동료나 친구들과 함께 시간을 보내며 스트레스를 푼다.', value: 'E' },
  },
  // SN Dimension
  {
    id: 4,
    text: '새로운 정보를 접할 때 더 흥미로운 것은?',
    dimension: MBTI_Dimension.SN,
    optionA: { text: '실제적이고 구체적인 사실과 데이터.', value: 'S' },
    optionB: { text: '숨겨진 의미와 가능성, 미래의 비전.', value: 'N' },
  },
  {
    id: 5,
    text: '문제를 해결할 때 당신의 접근 방식은?',
    dimension: MBTI_Dimension.SN,
    optionA: { text: '과거의 경험과 검증된 방법을 신뢰한다.', value: 'S' },
    optionB: { text: '새롭고 독창적인 아이디어를 시도하는 것을 즐긴다.', value: 'N' },
  },
  {
    id: 6,
    text: '당신이 더 신뢰하는 것은?',
    dimension: MBTI_Dimension.SN,
    optionA: { text: '직접 보고 듣고 경험한 것.', value: 'S' },
    optionB: { text: '직감과 영감, 육감.', value: 'N' },
  },
  // TF Dimension
  {
    id: 7,
    text: '중요한 결정을 내릴 때, 더 중요하게 생각하는 것은?',
    dimension: MBTI_Dimension.TF,
    optionA: { text: '객관적인 사실과 논리적인 분석.', value: 'T' },
    optionB: { text: '결정이 사람들에게 미칠 영향과 인간관계.', value: 'F' },
  },
  {
    id: 8,
    text: '친구가 고민을 털어놓을 때, 당신의 반응은?',
    dimension: MBTI_Dimension.TF,
    optionA: { text: '문제의 원인을 분석하고 해결책을 제시하려 한다.', value: 'T' },
    optionB: { text: '친구의 감정에 공감하고 위로의 말을 건넨다.', value: 'F' },
  },
  {
    id: 9,
    text: '당신에게 더 큰 칭찬은?',
    dimension: MBTI_Dimension.TF,
    optionA: { text: '"당신은 정말 똑똑하고 논리적이군요!"', value: 'T' },
    optionB: { text: '"당신은 정말 따뜻하고 배려심이 깊군요!"', value: 'F' },
  },
  // JP Dimension
  {
    id: 10,
    text: '여행을 계획할 때, 당신은?',
    dimension: MBTI_Dimension.JP,
    optionA: { text: '출발 전에 상세한 일정을 짜고 예약을 마친다.', value: 'J' },
    optionB: { text: '대략적인 계획만 세우고 상황에 따라 유연하게 움직인다.', value: 'P' },
  },
  {
    id: 11,
    text: '일상 생활에서 당신은?',
    dimension: MBTI_Dimension.JP,
    optionA: { text: '정리정돈된 환경과 예측 가능한 일상을 선호한다.', value: 'J' },
    optionB: { text: '자유롭고 즉흥적인 생활을 즐기며 변화에 잘 적응한다.', value: 'P' },
  },
  {
    id: 12,
    text: '마감 기한이 있는 프로젝트를 할 때, 당신은?',
    dimension: MBTI_Dimension.JP,
    optionA: { text: '미리 계획을 세워 꾸준히 진행하여 여유롭게 마친다.', value: 'J' },
    optionB: { text: '마감 기한이 임박했을 때 집중력이 최고조에 달한다.', value: 'P' },
  },
];
