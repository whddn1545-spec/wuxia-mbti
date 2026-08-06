'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollTransition.module.css';

export default function ScrollTransition({ 
  isClosing = false, 
  onCloseComplete 
}: { 
  isClosing?: boolean; 
  onCloseComplete?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 마운트 시 약간의 지연 후 쫙 열리게 함
    const timer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 닫히는 상태로 변경되면 스크롤을 닫음
    if (isClosing) {
      setIsOpen(false);
      if (onCloseComplete) {
        setTimeout(() => {
          onCloseComplete();
        }, 1200); // 닫히는 애니메이션 시간(1.2초) 대기 후 콜백 실행
      }
    }
  }, [isClosing, onCloseComplete]);

  return (
    <div className={styles.overlay}>
      <div className={`${styles.scrollHalf} ${styles.scrollHalfTop} ${isOpen ? styles.openTop : ''}`}>
        <div className={styles.scrollPoleBottom}></div>
      </div>
      <div className={`${styles.scrollHalf} ${styles.scrollHalfBottom} ${isOpen ? styles.openBottom : ''}`}>
        <div className={styles.scrollPoleTop}></div>
      </div>
    </div>
  );
}
