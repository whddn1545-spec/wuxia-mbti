import { create } from 'zustand';

export interface Scores {
  ideology: number; // 1: 명분, -1: 실리
  order: number;    // 1: 규율, -1: 자유
  method: number;   // 1: 돌파, -1: 은밀
  attitude: number; // 1: 강경, -1: 온건
}

interface TestState {
  currentIndex: number;
  scores: Scores;
  answerQuestion: (axis: keyof Scores, value: number) => void;
  resetTest: () => void;
}

export const useTestStore = create<TestState>((set) => ({
  currentIndex: 0,
  scores: {
    ideology: 0,
    order: 0,
    method: 0,
    attitude: 0,
  },
  answerQuestion: (axis, value) => set((state) => ({
    scores: { ...state.scores, [axis]: state.scores[axis] + value },
    currentIndex: state.currentIndex + 1,
  })),
  resetTest: () => set({
    currentIndex: 0,
    scores: { ideology: 0, order: 0, method: 0, attitude: 0 }
  })
}));
