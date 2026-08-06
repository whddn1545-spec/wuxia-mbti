'use client';

import { useTestStore } from '../../store/useTestStore';
import { questions } from '../../data/questions';
import { calculateFaction } from '../../utils/calculateResult';
import styles from './test.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TestPage() {
  const { currentIndex, answerQuestion, scores } = useTestStore();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (currentIndex >= questions.length && questions.length > 0) {
      const resultId = calculateFaction(scores);
      router.push(`/result/${resultId}`);
    }
  }, [currentIndex, scores, router]);

  if (!mounted) return null;

  if (currentIndex >= questions.length) {
    return (
      <main className={styles.main}>
        <div className={styles.container} style={{ textAlign: 'center', padding: '5rem' }}>
          <h2 style={{ color: 'var(--accent-gold)', fontSize: '1.5rem' }}>
            무림맹 서고에서 당신의 성향 호패를 제작 중입니다...
          </h2>
        </div>
      </main>
    );
  }

  const currentQ = questions[currentIndex];
  // 진행도는 (현재 문항 번호 / 전체 문항 수) 로 계산
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <main className={styles.main}>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className={styles.container}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 10px', marginBottom: '1.5rem' }}>
          <h2 className={styles.chapter} style={{ margin: 0 }}>{currentQ.chapter}</h2>
          <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '2px' }}>
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        <div className={styles.questionBox}>
          <span className={styles.qMark}>Q.</span>
          <p className={styles.questionText}>{currentQ.text}</p>
        </div>
        
        <div className={styles.answerList}>
          {currentQ.answers.map((ans, idx) => (
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
  );
}
