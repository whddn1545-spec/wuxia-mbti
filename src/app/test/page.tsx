'use client';

import { useTestStore } from '../../store/useTestStore';
import { questions } from '../../data/questions';
import { calculateFaction } from '../../utils/calculateResult';
import styles from './test.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ScrollTransition from '../../components/ScrollTransition';

export default function TestPage() {
  const { currentIndex, answerQuestion, scores, resetTest } = useTestStore();
  const [mounted, setMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 테스트 진입 시 항상 초기화 (이전 세션의 점수/진행도가 남아 재응시가 즉시 결과로 튕기는 버그 방지)
    resetTest();
    setMounted(true);
  }, [resetTest]);

  useEffect(() => {
    // 모든 문항을 다 풀었을 때 닫히는 애니메이션 트리거
    if (currentIndex >= questions.length && questions.length > 0) {
      setIsClosing(true);
    }
  }, [currentIndex, questions.length]);

  const handleCloseComplete = () => {
    const resultId = calculateFaction(scores);
    router.push(`/result/${resultId}`);
  };

  if (!mounted) return null;

  const currentQ = currentIndex < questions.length ? questions[currentIndex] : questions[questions.length - 1];
  const progress = (Math.min(currentIndex + 1, questions.length) / questions.length) * 100;

  return (
    <>
      <ScrollTransition isClosing={isClosing} onCloseComplete={handleCloseComplete} />
      <main className={`${styles.main} ${isClosing ? styles.fadeOut : ''}`}>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className={styles.container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 10px', marginBottom: '1.5rem' }}>
            <h2 className={styles.chapter} style={{ margin: 0 }}>{currentQ?.chapter}</h2>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '2px' }}>
              {Math.min(currentIndex + 1, questions.length)} / {questions.length}
            </span>
          </div>

          <div className={styles.questionBox}>
            <span className={styles.qMark}>Q.</span>
            <p className={styles.questionText}>{currentQ?.text}</p>
          </div>
          
          <div className={styles.answerList}>
            {currentQ?.answers.map((ans, idx) => (
              <button 
                key={idx} 
                className={styles.answerButton}
                onClick={() => answerQuestion(ans.axis, ans.value)}
              >
                <span className={styles.answerNumber}>{idx + 1}.</span> {ans.text}
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
